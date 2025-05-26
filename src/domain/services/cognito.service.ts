import { Injectable, Inject } from '@nestjs/common';
import {
    CognitoIdentityProviderClient,
    SignUpCommand,
    AdminAddUserToGroupCommand,
    CreateGroupCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CognitoService {
    constructor(
        @Inject('COGNITO_CLIENT')
        private readonly cognitoClient: CognitoIdentityProviderClient,
        private readonly configService: ConfigService,
    ) { }

    async createGroup(groupName: string) {
        const command = new CreateGroupCommand({
            GroupName: groupName,
            UserPoolId: this.configService.get<string>('COGNITO_USER_POOL_ID'), // replace with your User Pool ID
            Description: `Group for tenant ${groupName}`,
        });

        return await this.cognitoClient.send(command);
    }

    async signUpUser(email: string, password: string, groupName: string) {
        const signUpCommand = new SignUpCommand({
            ClientId: this.configService.get<string>('COGNITO_CLIENT_ID'),
            Username: email,
            Password: password,
            UserAttributes: [
                { Name: 'email', Value: email },
                { Name: 'email_verified', Value: 'true' },
            ],
        });

        const signUpResponse = await this.cognitoClient.send(signUpCommand);

        if (signUpResponse.UserSub) {
            const addUserToGroupCommand = new AdminAddUserToGroupCommand({
                UserPoolId: this.configService.get<string>('COGNITO_USER_POOL_ID'),
                Username: email,
                GroupName: groupName,
            });

            await this.cognitoClient.send(addUserToGroupCommand);
        }

        return signUpResponse;
    }
}