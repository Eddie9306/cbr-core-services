
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tenants
 * 
 */
export type tenants = $Result.DefaultSelection<Prisma.$tenantsPayload>
/**
 * Model documentTypes
 * 
 */
export type documentTypes = $Result.DefaultSelection<Prisma.$documentTypesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model bankAccountTypes
 * 
 */
export type bankAccountTypes = $Result.DefaultSelection<Prisma.$bankAccountTypesPayload>
/**
 * Model banks
 * 
 */
export type banks = $Result.DefaultSelection<Prisma.$banksPayload>
/**
 * Model bankAccounts
 * 
 */
export type bankAccounts = $Result.DefaultSelection<Prisma.$bankAccountsPayload>
/**
 * Model transactionStatus
 * 
 */
export type transactionStatus = $Result.DefaultSelection<Prisma.$transactionStatusPayload>
/**
 * Model currencies
 * 
 */
export type currencies = $Result.DefaultSelection<Prisma.$currenciesPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model payrollCycleStatus
 * 
 */
export type payrollCycleStatus = $Result.DefaultSelection<Prisma.$payrollCycleStatusPayload>
/**
 * Model payrollCycles
 * 
 */
export type payrollCycles = $Result.DefaultSelection<Prisma.$payrollCyclesPayload>
/**
 * Model workRecords
 * 
 */
export type workRecords = $Result.DefaultSelection<Prisma.$workRecordsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenants.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenants`: Exposes CRUD operations for the **tenants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenants.findMany()
    * ```
    */
  get tenants(): Prisma.tenantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentTypes`: Exposes CRUD operations for the **documentTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTypes
    * const documentTypes = await prisma.documentTypes.findMany()
    * ```
    */
  get documentTypes(): Prisma.documentTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccountTypes`: Exposes CRUD operations for the **bankAccountTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccountTypes
    * const bankAccountTypes = await prisma.bankAccountTypes.findMany()
    * ```
    */
  get bankAccountTypes(): Prisma.bankAccountTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banks`: Exposes CRUD operations for the **banks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banks
    * const banks = await prisma.banks.findMany()
    * ```
    */
  get banks(): Prisma.banksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankAccounts`: Exposes CRUD operations for the **bankAccounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankAccounts
    * const bankAccounts = await prisma.bankAccounts.findMany()
    * ```
    */
  get bankAccounts(): Prisma.bankAccountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionStatus`: Exposes CRUD operations for the **transactionStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionStatuses
    * const transactionStatuses = await prisma.transactionStatus.findMany()
    * ```
    */
  get transactionStatus(): Prisma.transactionStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currencies`: Exposes CRUD operations for the **currencies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currencies.findMany()
    * ```
    */
  get currencies(): Prisma.currenciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollCycleStatus`: Exposes CRUD operations for the **payrollCycleStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollCycleStatuses
    * const payrollCycleStatuses = await prisma.payrollCycleStatus.findMany()
    * ```
    */
  get payrollCycleStatus(): Prisma.payrollCycleStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollCycles`: Exposes CRUD operations for the **payrollCycles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollCycles
    * const payrollCycles = await prisma.payrollCycles.findMany()
    * ```
    */
  get payrollCycles(): Prisma.payrollCyclesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workRecords`: Exposes CRUD operations for the **workRecords** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkRecords
    * const workRecords = await prisma.workRecords.findMany()
    * ```
    */
  get workRecords(): Prisma.workRecordsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tenants: 'tenants',
    documentTypes: 'documentTypes',
    users: 'users',
    bankAccountTypes: 'bankAccountTypes',
    banks: 'banks',
    bankAccounts: 'bankAccounts',
    transactionStatus: 'transactionStatus',
    currencies: 'currencies',
    accounts: 'accounts',
    payrollCycleStatus: 'payrollCycleStatus',
    payrollCycles: 'payrollCycles',
    workRecords: 'workRecords',
    transactions: 'transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenants" | "documentTypes" | "users" | "bankAccountTypes" | "banks" | "bankAccounts" | "transactionStatus" | "currencies" | "accounts" | "payrollCycleStatus" | "payrollCycles" | "workRecords" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tenants: {
        payload: Prisma.$tenantsPayload<ExtArgs>
        fields: Prisma.tenantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tenantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tenantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          findFirst: {
            args: Prisma.tenantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tenantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          findMany: {
            args: Prisma.tenantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>[]
          }
          create: {
            args: Prisma.tenantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          createMany: {
            args: Prisma.tenantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tenantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          update: {
            args: Prisma.tenantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          deleteMany: {
            args: Prisma.tenantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tenantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tenantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tenantsPayload>
          }
          aggregate: {
            args: Prisma.TenantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenants>
          }
          groupBy: {
            args: Prisma.tenantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tenantsCountArgs<ExtArgs>
            result: $Utils.Optional<TenantsCountAggregateOutputType> | number
          }
        }
      }
      documentTypes: {
        payload: Prisma.$documentTypesPayload<ExtArgs>
        fields: Prisma.documentTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload>
          }
          findFirst: {
            args: Prisma.documentTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload>
          }
          findMany: {
            args: Prisma.documentTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload>[]
          }
          create: {
            args: Prisma.documentTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload>
          }
          createMany: {
            args: Prisma.documentTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.documentTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload>
          }
          update: {
            args: Prisma.documentTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload>
          }
          deleteMany: {
            args: Prisma.documentTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.documentTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentTypesPayload>
          }
          aggregate: {
            args: Prisma.DocumentTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentTypes>
          }
          groupBy: {
            args: Prisma.documentTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentTypesCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      bankAccountTypes: {
        payload: Prisma.$bankAccountTypesPayload<ExtArgs>
        fields: Prisma.bankAccountTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bankAccountTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bankAccountTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload>
          }
          findFirst: {
            args: Prisma.bankAccountTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bankAccountTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload>
          }
          findMany: {
            args: Prisma.bankAccountTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload>[]
          }
          create: {
            args: Prisma.bankAccountTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload>
          }
          createMany: {
            args: Prisma.bankAccountTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bankAccountTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload>
          }
          update: {
            args: Prisma.bankAccountTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload>
          }
          deleteMany: {
            args: Prisma.bankAccountTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bankAccountTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bankAccountTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountTypesPayload>
          }
          aggregate: {
            args: Prisma.BankAccountTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccountTypes>
          }
          groupBy: {
            args: Prisma.bankAccountTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.bankAccountTypesCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountTypesCountAggregateOutputType> | number
          }
        }
      }
      banks: {
        payload: Prisma.$banksPayload<ExtArgs>
        fields: Prisma.banksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.banksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.banksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          findFirst: {
            args: Prisma.banksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.banksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          findMany: {
            args: Prisma.banksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>[]
          }
          create: {
            args: Prisma.banksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          createMany: {
            args: Prisma.banksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.banksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          update: {
            args: Prisma.banksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          deleteMany: {
            args: Prisma.banksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.banksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.banksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$banksPayload>
          }
          aggregate: {
            args: Prisma.BanksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanks>
          }
          groupBy: {
            args: Prisma.banksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BanksGroupByOutputType>[]
          }
          count: {
            args: Prisma.banksCountArgs<ExtArgs>
            result: $Utils.Optional<BanksCountAggregateOutputType> | number
          }
        }
      }
      bankAccounts: {
        payload: Prisma.$bankAccountsPayload<ExtArgs>
        fields: Prisma.bankAccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bankAccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bankAccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload>
          }
          findFirst: {
            args: Prisma.bankAccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bankAccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload>
          }
          findMany: {
            args: Prisma.bankAccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload>[]
          }
          create: {
            args: Prisma.bankAccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload>
          }
          createMany: {
            args: Prisma.bankAccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bankAccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload>
          }
          update: {
            args: Prisma.bankAccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload>
          }
          deleteMany: {
            args: Prisma.bankAccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bankAccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bankAccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bankAccountsPayload>
          }
          aggregate: {
            args: Prisma.BankAccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankAccounts>
          }
          groupBy: {
            args: Prisma.bankAccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankAccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bankAccountsCountArgs<ExtArgs>
            result: $Utils.Optional<BankAccountsCountAggregateOutputType> | number
          }
        }
      }
      transactionStatus: {
        payload: Prisma.$transactionStatusPayload<ExtArgs>
        fields: Prisma.transactionStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload>
          }
          findFirst: {
            args: Prisma.transactionStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload>
          }
          findMany: {
            args: Prisma.transactionStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload>[]
          }
          create: {
            args: Prisma.transactionStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload>
          }
          createMany: {
            args: Prisma.transactionStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload>
          }
          update: {
            args: Prisma.transactionStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload>
          }
          deleteMany: {
            args: Prisma.transactionStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionStatusPayload>
          }
          aggregate: {
            args: Prisma.TransactionStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionStatus>
          }
          groupBy: {
            args: Prisma.transactionStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionStatusCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionStatusCountAggregateOutputType> | number
          }
        }
      }
      currencies: {
        payload: Prisma.$currenciesPayload<ExtArgs>
        fields: Prisma.currenciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.currenciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.currenciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          findFirst: {
            args: Prisma.currenciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.currenciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          findMany: {
            args: Prisma.currenciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>[]
          }
          create: {
            args: Prisma.currenciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          createMany: {
            args: Prisma.currenciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.currenciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          update: {
            args: Prisma.currenciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          deleteMany: {
            args: Prisma.currenciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.currenciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.currenciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$currenciesPayload>
          }
          aggregate: {
            args: Prisma.CurrenciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrencies>
          }
          groupBy: {
            args: Prisma.currenciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.currenciesCountArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      payrollCycleStatus: {
        payload: Prisma.$payrollCycleStatusPayload<ExtArgs>
        fields: Prisma.payrollCycleStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payrollCycleStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payrollCycleStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload>
          }
          findFirst: {
            args: Prisma.payrollCycleStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payrollCycleStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload>
          }
          findMany: {
            args: Prisma.payrollCycleStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload>[]
          }
          create: {
            args: Prisma.payrollCycleStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload>
          }
          createMany: {
            args: Prisma.payrollCycleStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.payrollCycleStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload>
          }
          update: {
            args: Prisma.payrollCycleStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload>
          }
          deleteMany: {
            args: Prisma.payrollCycleStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payrollCycleStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.payrollCycleStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCycleStatusPayload>
          }
          aggregate: {
            args: Prisma.PayrollCycleStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollCycleStatus>
          }
          groupBy: {
            args: Prisma.payrollCycleStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollCycleStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.payrollCycleStatusCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCycleStatusCountAggregateOutputType> | number
          }
        }
      }
      payrollCycles: {
        payload: Prisma.$payrollCyclesPayload<ExtArgs>
        fields: Prisma.payrollCyclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payrollCyclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payrollCyclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload>
          }
          findFirst: {
            args: Prisma.payrollCyclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payrollCyclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload>
          }
          findMany: {
            args: Prisma.payrollCyclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload>[]
          }
          create: {
            args: Prisma.payrollCyclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload>
          }
          createMany: {
            args: Prisma.payrollCyclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.payrollCyclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload>
          }
          update: {
            args: Prisma.payrollCyclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload>
          }
          deleteMany: {
            args: Prisma.payrollCyclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payrollCyclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.payrollCyclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payrollCyclesPayload>
          }
          aggregate: {
            args: Prisma.PayrollCyclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollCycles>
          }
          groupBy: {
            args: Prisma.payrollCyclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollCyclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.payrollCyclesCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollCyclesCountAggregateOutputType> | number
          }
        }
      }
      workRecords: {
        payload: Prisma.$workRecordsPayload<ExtArgs>
        fields: Prisma.workRecordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workRecordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workRecordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload>
          }
          findFirst: {
            args: Prisma.workRecordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workRecordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload>
          }
          findMany: {
            args: Prisma.workRecordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload>[]
          }
          create: {
            args: Prisma.workRecordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload>
          }
          createMany: {
            args: Prisma.workRecordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.workRecordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload>
          }
          update: {
            args: Prisma.workRecordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload>
          }
          deleteMany: {
            args: Prisma.workRecordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workRecordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.workRecordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workRecordsPayload>
          }
          aggregate: {
            args: Prisma.WorkRecordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkRecords>
          }
          groupBy: {
            args: Prisma.workRecordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkRecordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.workRecordsCountArgs<ExtArgs>
            result: $Utils.Optional<WorkRecordsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tenants?: tenantsOmit
    documentTypes?: documentTypesOmit
    users?: usersOmit
    bankAccountTypes?: bankAccountTypesOmit
    banks?: banksOmit
    bankAccounts?: bankAccountsOmit
    transactionStatus?: transactionStatusOmit
    currencies?: currenciesOmit
    accounts?: accountsOmit
    payrollCycleStatus?: payrollCycleStatusOmit
    payrollCycles?: payrollCyclesOmit
    workRecords?: workRecordsOmit
    transactions?: transactionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TenantsCountOutputType
   */

  export type TenantsCountOutputType = {
    Users: number
    payrollCycles: number
  }

  export type TenantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | TenantsCountOutputTypeCountUsersArgs
    payrollCycles?: boolean | TenantsCountOutputTypeCountPayrollCyclesArgs
  }

  // Custom InputTypes
  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantsCountOutputType
     */
    select?: TenantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * TenantsCountOutputType without action
   */
  export type TenantsCountOutputTypeCountPayrollCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payrollCyclesWhereInput
  }


  /**
   * Count Type DocumentTypesCountOutputType
   */

  export type DocumentTypesCountOutputType = {
    Users: number
  }

  export type DocumentTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | DocumentTypesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DocumentTypesCountOutputType without action
   */
  export type DocumentTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypesCountOutputType
     */
    select?: DocumentTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentTypesCountOutputType without action
   */
  export type DocumentTypesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    bankAccounts: number
    workRecords: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | UsersCountOutputTypeCountBankAccountsArgs
    workRecords?: boolean | UsersCountOutputTypeCountWorkRecordsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankAccountsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workRecordsWhereInput
  }


  /**
   * Count Type BankAccountTypesCountOutputType
   */

  export type BankAccountTypesCountOutputType = {
    bankAccounts: number
  }

  export type BankAccountTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | BankAccountTypesCountOutputTypeCountBankAccountsArgs
  }

  // Custom InputTypes
  /**
   * BankAccountTypesCountOutputType without action
   */
  export type BankAccountTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountTypesCountOutputType
     */
    select?: BankAccountTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountTypesCountOutputType without action
   */
  export type BankAccountTypesCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankAccountsWhereInput
  }


  /**
   * Count Type BanksCountOutputType
   */

  export type BanksCountOutputType = {
    bankAccounts: number
  }

  export type BanksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | BanksCountOutputTypeCountBankAccountsArgs
  }

  // Custom InputTypes
  /**
   * BanksCountOutputType without action
   */
  export type BanksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BanksCountOutputType
     */
    select?: BanksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BanksCountOutputType without action
   */
  export type BanksCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankAccountsWhereInput
  }


  /**
   * Count Type BankAccountsCountOutputType
   */

  export type BankAccountsCountOutputType = {
    transactions: number
  }

  export type BankAccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | BankAccountsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * BankAccountsCountOutputType without action
   */
  export type BankAccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankAccountsCountOutputType
     */
    select?: BankAccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BankAccountsCountOutputType without action
   */
  export type BankAccountsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type TransactionStatusCountOutputType
   */

  export type TransactionStatusCountOutputType = {
    transactions: number
  }

  export type TransactionStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TransactionStatusCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * TransactionStatusCountOutputType without action
   */
  export type TransactionStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionStatusCountOutputType
     */
    select?: TransactionStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionStatusCountOutputType without action
   */
  export type TransactionStatusCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type CurrenciesCountOutputType
   */

  export type CurrenciesCountOutputType = {
    transactions: number
  }

  export type CurrenciesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CurrenciesCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesCountOutputType
     */
    select?: CurrenciesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurrenciesCountOutputType without action
   */
  export type CurrenciesCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    transactions: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type PayrollCyclesCountOutputType
   */

  export type PayrollCyclesCountOutputType = {
    transactions: number
    workRecords: number
  }

  export type PayrollCyclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | PayrollCyclesCountOutputTypeCountTransactionsArgs
    workRecords?: boolean | PayrollCyclesCountOutputTypeCountWorkRecordsArgs
  }

  // Custom InputTypes
  /**
   * PayrollCyclesCountOutputType without action
   */
  export type PayrollCyclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollCyclesCountOutputType
     */
    select?: PayrollCyclesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PayrollCyclesCountOutputType without action
   */
  export type PayrollCyclesCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }

  /**
   * PayrollCyclesCountOutputType without action
   */
  export type PayrollCyclesCountOutputTypeCountWorkRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workRecordsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tenants
   */

  export type AggregateTenants = {
    _count: TenantsCountAggregateOutputType | null
    _avg: TenantsAvgAggregateOutputType | null
    _sum: TenantsSumAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  export type TenantsAvgAggregateOutputType = {
    tenantId: number | null
    employees: number | null
  }

  export type TenantsSumAggregateOutputType = {
    tenantId: number | null
    employees: number | null
  }

  export type TenantsMinAggregateOutputType = {
    tenantId: number | null
    companyName: string | null
    phoneNumber: string | null
    address: string | null
    employees: number | null
    creationDate: Date | null
  }

  export type TenantsMaxAggregateOutputType = {
    tenantId: number | null
    companyName: string | null
    phoneNumber: string | null
    address: string | null
    employees: number | null
    creationDate: Date | null
  }

  export type TenantsCountAggregateOutputType = {
    tenantId: number
    companyName: number
    phoneNumber: number
    address: number
    employees: number
    creationDate: number
    _all: number
  }


  export type TenantsAvgAggregateInputType = {
    tenantId?: true
    employees?: true
  }

  export type TenantsSumAggregateInputType = {
    tenantId?: true
    employees?: true
  }

  export type TenantsMinAggregateInputType = {
    tenantId?: true
    companyName?: true
    phoneNumber?: true
    address?: true
    employees?: true
    creationDate?: true
  }

  export type TenantsMaxAggregateInputType = {
    tenantId?: true
    companyName?: true
    phoneNumber?: true
    address?: true
    employees?: true
    creationDate?: true
  }

  export type TenantsCountAggregateInputType = {
    tenantId?: true
    companyName?: true
    phoneNumber?: true
    address?: true
    employees?: true
    creationDate?: true
    _all?: true
  }

  export type TenantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenants to aggregate.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tenants
    **/
    _count?: true | TenantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantsMaxAggregateInputType
  }

  export type GetTenantsAggregateType<T extends TenantsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenants[P]>
      : GetScalarType<T[P], AggregateTenants[P]>
  }




  export type tenantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tenantsWhereInput
    orderBy?: tenantsOrderByWithAggregationInput | tenantsOrderByWithAggregationInput[]
    by: TenantsScalarFieldEnum[] | TenantsScalarFieldEnum
    having?: tenantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantsCountAggregateInputType | true
    _avg?: TenantsAvgAggregateInputType
    _sum?: TenantsSumAggregateInputType
    _min?: TenantsMinAggregateInputType
    _max?: TenantsMaxAggregateInputType
  }

  export type TenantsGroupByOutputType = {
    tenantId: number
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate: Date
    _count: TenantsCountAggregateOutputType | null
    _avg: TenantsAvgAggregateOutputType | null
    _sum: TenantsSumAggregateOutputType | null
    _min: TenantsMinAggregateOutputType | null
    _max: TenantsMaxAggregateOutputType | null
  }

  type GetTenantsGroupByPayload<T extends tenantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantsGroupByOutputType[P]>
            : GetScalarType<T[P], TenantsGroupByOutputType[P]>
        }
      >
    >


  export type tenantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tenantId?: boolean
    companyName?: boolean
    phoneNumber?: boolean
    address?: boolean
    employees?: boolean
    creationDate?: boolean
    Users?: boolean | tenants$UsersArgs<ExtArgs>
    payrollCycles?: boolean | tenants$payrollCyclesArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenants"]>



  export type tenantsSelectScalar = {
    tenantId?: boolean
    companyName?: boolean
    phoneNumber?: boolean
    address?: boolean
    employees?: boolean
    creationDate?: boolean
  }

  export type tenantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tenantId" | "companyName" | "phoneNumber" | "address" | "employees" | "creationDate", ExtArgs["result"]["tenants"]>
  export type tenantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | tenants$UsersArgs<ExtArgs>
    payrollCycles?: boolean | tenants$payrollCyclesArgs<ExtArgs>
    _count?: boolean | TenantsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tenantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tenants"
    objects: {
      Users: Prisma.$usersPayload<ExtArgs>[]
      payrollCycles: Prisma.$payrollCyclesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tenantId: number
      companyName: string
      phoneNumber: string
      address: string
      employees: number
      creationDate: Date
    }, ExtArgs["result"]["tenants"]>
    composites: {}
  }

  type tenantsGetPayload<S extends boolean | null | undefined | tenantsDefaultArgs> = $Result.GetResult<Prisma.$tenantsPayload, S>

  type tenantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tenantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantsCountAggregateInputType | true
    }

  export interface tenantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tenants'], meta: { name: 'tenants' } }
    /**
     * Find zero or one Tenants that matches the filter.
     * @param {tenantsFindUniqueArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tenantsFindUniqueArgs>(args: SelectSubset<T, tenantsFindUniqueArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tenantsFindUniqueOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tenantsFindUniqueOrThrowArgs>(args: SelectSubset<T, tenantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindFirstArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tenantsFindFirstArgs>(args?: SelectSubset<T, tenantsFindFirstArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindFirstOrThrowArgs} args - Arguments to find a Tenants
     * @example
     * // Get one Tenants
     * const tenants = await prisma.tenants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tenantsFindFirstOrThrowArgs>(args?: SelectSubset<T, tenantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenants.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenants.findMany({ take: 10 })
     * 
     * // Only select the `tenantId`
     * const tenantsWithTenantIdOnly = await prisma.tenants.findMany({ select: { tenantId: true } })
     * 
     */
    findMany<T extends tenantsFindManyArgs>(args?: SelectSubset<T, tenantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenants.
     * @param {tenantsCreateArgs} args - Arguments to create a Tenants.
     * @example
     * // Create one Tenants
     * const Tenants = await prisma.tenants.create({
     *   data: {
     *     // ... data to create a Tenants
     *   }
     * })
     * 
     */
    create<T extends tenantsCreateArgs>(args: SelectSubset<T, tenantsCreateArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {tenantsCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenants = await prisma.tenants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tenantsCreateManyArgs>(args?: SelectSubset<T, tenantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tenants.
     * @param {tenantsDeleteArgs} args - Arguments to delete one Tenants.
     * @example
     * // Delete one Tenants
     * const Tenants = await prisma.tenants.delete({
     *   where: {
     *     // ... filter to delete one Tenants
     *   }
     * })
     * 
     */
    delete<T extends tenantsDeleteArgs>(args: SelectSubset<T, tenantsDeleteArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenants.
     * @param {tenantsUpdateArgs} args - Arguments to update one Tenants.
     * @example
     * // Update one Tenants
     * const tenants = await prisma.tenants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tenantsUpdateArgs>(args: SelectSubset<T, tenantsUpdateArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {tenantsDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tenantsDeleteManyArgs>(args?: SelectSubset<T, tenantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenants = await prisma.tenants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tenantsUpdateManyArgs>(args: SelectSubset<T, tenantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenants.
     * @param {tenantsUpsertArgs} args - Arguments to update or create a Tenants.
     * @example
     * // Update or create a Tenants
     * const tenants = await prisma.tenants.upsert({
     *   create: {
     *     // ... data to create a Tenants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenants we want to update
     *   }
     * })
     */
    upsert<T extends tenantsUpsertArgs>(args: SelectSubset<T, tenantsUpsertArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenants.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends tenantsCountArgs>(
      args?: Subset<T, tenantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantsAggregateArgs>(args: Subset<T, TenantsAggregateArgs>): Prisma.PrismaPromise<GetTenantsAggregateType<T>>

    /**
     * Group by Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tenantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tenantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tenantsGroupByArgs['orderBy'] }
        : { orderBy?: tenantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tenantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tenants model
   */
  readonly fields: tenantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tenants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tenantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends tenants$UsersArgs<ExtArgs> = {}>(args?: Subset<T, tenants$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payrollCycles<T extends tenants$payrollCyclesArgs<ExtArgs> = {}>(args?: Subset<T, tenants$payrollCyclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tenants model
   */
  interface tenantsFieldRefs {
    readonly tenantId: FieldRef<"tenants", 'Int'>
    readonly companyName: FieldRef<"tenants", 'String'>
    readonly phoneNumber: FieldRef<"tenants", 'String'>
    readonly address: FieldRef<"tenants", 'String'>
    readonly employees: FieldRef<"tenants", 'Int'>
    readonly creationDate: FieldRef<"tenants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tenants findUnique
   */
  export type tenantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants findUniqueOrThrow
   */
  export type tenantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants findFirst
   */
  export type tenantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants findFirstOrThrow
   */
  export type tenantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tenants.
     */
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants findMany
   */
  export type tenantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter, which tenants to fetch.
     */
    where?: tenantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tenants to fetch.
     */
    orderBy?: tenantsOrderByWithRelationInput | tenantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tenants.
     */
    cursor?: tenantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tenants.
     */
    skip?: number
    distinct?: TenantsScalarFieldEnum | TenantsScalarFieldEnum[]
  }

  /**
   * tenants create
   */
  export type tenantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The data needed to create a tenants.
     */
    data: XOR<tenantsCreateInput, tenantsUncheckedCreateInput>
  }

  /**
   * tenants createMany
   */
  export type tenantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tenants.
     */
    data: tenantsCreateManyInput | tenantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tenants update
   */
  export type tenantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The data needed to update a tenants.
     */
    data: XOR<tenantsUpdateInput, tenantsUncheckedUpdateInput>
    /**
     * Choose, which tenants to update.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants updateMany
   */
  export type tenantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tenants.
     */
    data: XOR<tenantsUpdateManyMutationInput, tenantsUncheckedUpdateManyInput>
    /**
     * Filter which tenants to update
     */
    where?: tenantsWhereInput
    /**
     * Limit how many tenants to update.
     */
    limit?: number
  }

  /**
   * tenants upsert
   */
  export type tenantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * The filter to search for the tenants to update in case it exists.
     */
    where: tenantsWhereUniqueInput
    /**
     * In case the tenants found by the `where` argument doesn't exist, create a new tenants with this data.
     */
    create: XOR<tenantsCreateInput, tenantsUncheckedCreateInput>
    /**
     * In case the tenants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tenantsUpdateInput, tenantsUncheckedUpdateInput>
  }

  /**
   * tenants delete
   */
  export type tenantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
    /**
     * Filter which tenants to delete.
     */
    where: tenantsWhereUniqueInput
  }

  /**
   * tenants deleteMany
   */
  export type tenantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tenants to delete
     */
    where?: tenantsWhereInput
    /**
     * Limit how many tenants to delete.
     */
    limit?: number
  }

  /**
   * tenants.Users
   */
  export type tenants$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * tenants.payrollCycles
   */
  export type tenants$payrollCyclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    where?: payrollCyclesWhereInput
    orderBy?: payrollCyclesOrderByWithRelationInput | payrollCyclesOrderByWithRelationInput[]
    cursor?: payrollCyclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollCyclesScalarFieldEnum | PayrollCyclesScalarFieldEnum[]
  }

  /**
   * tenants without action
   */
  export type tenantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tenants
     */
    select?: tenantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tenants
     */
    omit?: tenantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tenantsInclude<ExtArgs> | null
  }


  /**
   * Model documentTypes
   */

  export type AggregateDocumentTypes = {
    _count: DocumentTypesCountAggregateOutputType | null
    _avg: DocumentTypesAvgAggregateOutputType | null
    _sum: DocumentTypesSumAggregateOutputType | null
    _min: DocumentTypesMinAggregateOutputType | null
    _max: DocumentTypesMaxAggregateOutputType | null
  }

  export type DocumentTypesAvgAggregateOutputType = {
    documentTypeId: number | null
  }

  export type DocumentTypesSumAggregateOutputType = {
    documentTypeId: number | null
  }

  export type DocumentTypesMinAggregateOutputType = {
    documentTypeId: number | null
    name: string | null
    code: string | null
    creationDate: Date | null
  }

  export type DocumentTypesMaxAggregateOutputType = {
    documentTypeId: number | null
    name: string | null
    code: string | null
    creationDate: Date | null
  }

  export type DocumentTypesCountAggregateOutputType = {
    documentTypeId: number
    name: number
    code: number
    creationDate: number
    _all: number
  }


  export type DocumentTypesAvgAggregateInputType = {
    documentTypeId?: true
  }

  export type DocumentTypesSumAggregateInputType = {
    documentTypeId?: true
  }

  export type DocumentTypesMinAggregateInputType = {
    documentTypeId?: true
    name?: true
    code?: true
    creationDate?: true
  }

  export type DocumentTypesMaxAggregateInputType = {
    documentTypeId?: true
    name?: true
    code?: true
    creationDate?: true
  }

  export type DocumentTypesCountAggregateInputType = {
    documentTypeId?: true
    name?: true
    code?: true
    creationDate?: true
    _all?: true
  }

  export type DocumentTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentTypes to aggregate.
     */
    where?: documentTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentTypes to fetch.
     */
    orderBy?: documentTypesOrderByWithRelationInput | documentTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documentTypes
    **/
    _count?: true | DocumentTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTypesMaxAggregateInputType
  }

  export type GetDocumentTypesAggregateType<T extends DocumentTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentTypes[P]>
      : GetScalarType<T[P], AggregateDocumentTypes[P]>
  }




  export type documentTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentTypesWhereInput
    orderBy?: documentTypesOrderByWithAggregationInput | documentTypesOrderByWithAggregationInput[]
    by: DocumentTypesScalarFieldEnum[] | DocumentTypesScalarFieldEnum
    having?: documentTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTypesCountAggregateInputType | true
    _avg?: DocumentTypesAvgAggregateInputType
    _sum?: DocumentTypesSumAggregateInputType
    _min?: DocumentTypesMinAggregateInputType
    _max?: DocumentTypesMaxAggregateInputType
  }

  export type DocumentTypesGroupByOutputType = {
    documentTypeId: number
    name: string
    code: string | null
    creationDate: Date
    _count: DocumentTypesCountAggregateOutputType | null
    _avg: DocumentTypesAvgAggregateOutputType | null
    _sum: DocumentTypesSumAggregateOutputType | null
    _min: DocumentTypesMinAggregateOutputType | null
    _max: DocumentTypesMaxAggregateOutputType | null
  }

  type GetDocumentTypesGroupByPayload<T extends documentTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTypesGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTypesGroupByOutputType[P]>
        }
      >
    >


  export type documentTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    documentTypeId?: boolean
    name?: boolean
    code?: boolean
    creationDate?: boolean
    Users?: boolean | documentTypes$UsersArgs<ExtArgs>
    _count?: boolean | DocumentTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTypes"]>



  export type documentTypesSelectScalar = {
    documentTypeId?: boolean
    name?: boolean
    code?: boolean
    creationDate?: boolean
  }

  export type documentTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"documentTypeId" | "name" | "code" | "creationDate", ExtArgs["result"]["documentTypes"]>
  export type documentTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | documentTypes$UsersArgs<ExtArgs>
    _count?: boolean | DocumentTypesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $documentTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "documentTypes"
    objects: {
      Users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      documentTypeId: number
      name: string
      code: string | null
      creationDate: Date
    }, ExtArgs["result"]["documentTypes"]>
    composites: {}
  }

  type documentTypesGetPayload<S extends boolean | null | undefined | documentTypesDefaultArgs> = $Result.GetResult<Prisma.$documentTypesPayload, S>

  type documentTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTypesCountAggregateInputType | true
    }

  export interface documentTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['documentTypes'], meta: { name: 'documentTypes' } }
    /**
     * Find zero or one DocumentTypes that matches the filter.
     * @param {documentTypesFindUniqueArgs} args - Arguments to find a DocumentTypes
     * @example
     * // Get one DocumentTypes
     * const documentTypes = await prisma.documentTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentTypesFindUniqueArgs>(args: SelectSubset<T, documentTypesFindUniqueArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentTypesFindUniqueOrThrowArgs} args - Arguments to find a DocumentTypes
     * @example
     * // Get one DocumentTypes
     * const documentTypes = await prisma.documentTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, documentTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentTypesFindFirstArgs} args - Arguments to find a DocumentTypes
     * @example
     * // Get one DocumentTypes
     * const documentTypes = await prisma.documentTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentTypesFindFirstArgs>(args?: SelectSubset<T, documentTypesFindFirstArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentTypesFindFirstOrThrowArgs} args - Arguments to find a DocumentTypes
     * @example
     * // Get one DocumentTypes
     * const documentTypes = await prisma.documentTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, documentTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTypes
     * const documentTypes = await prisma.documentTypes.findMany()
     * 
     * // Get first 10 DocumentTypes
     * const documentTypes = await prisma.documentTypes.findMany({ take: 10 })
     * 
     * // Only select the `documentTypeId`
     * const documentTypesWithDocumentTypeIdOnly = await prisma.documentTypes.findMany({ select: { documentTypeId: true } })
     * 
     */
    findMany<T extends documentTypesFindManyArgs>(args?: SelectSubset<T, documentTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentTypes.
     * @param {documentTypesCreateArgs} args - Arguments to create a DocumentTypes.
     * @example
     * // Create one DocumentTypes
     * const DocumentTypes = await prisma.documentTypes.create({
     *   data: {
     *     // ... data to create a DocumentTypes
     *   }
     * })
     * 
     */
    create<T extends documentTypesCreateArgs>(args: SelectSubset<T, documentTypesCreateArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTypes.
     * @param {documentTypesCreateManyArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentTypes = await prisma.documentTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentTypesCreateManyArgs>(args?: SelectSubset<T, documentTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentTypes.
     * @param {documentTypesDeleteArgs} args - Arguments to delete one DocumentTypes.
     * @example
     * // Delete one DocumentTypes
     * const DocumentTypes = await prisma.documentTypes.delete({
     *   where: {
     *     // ... filter to delete one DocumentTypes
     *   }
     * })
     * 
     */
    delete<T extends documentTypesDeleteArgs>(args: SelectSubset<T, documentTypesDeleteArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentTypes.
     * @param {documentTypesUpdateArgs} args - Arguments to update one DocumentTypes.
     * @example
     * // Update one DocumentTypes
     * const documentTypes = await prisma.documentTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentTypesUpdateArgs>(args: SelectSubset<T, documentTypesUpdateArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTypes.
     * @param {documentTypesDeleteManyArgs} args - Arguments to filter DocumentTypes to delete.
     * @example
     * // Delete a few DocumentTypes
     * const { count } = await prisma.documentTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentTypesDeleteManyArgs>(args?: SelectSubset<T, documentTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTypes
     * const documentTypes = await prisma.documentTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentTypesUpdateManyArgs>(args: SelectSubset<T, documentTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentTypes.
     * @param {documentTypesUpsertArgs} args - Arguments to update or create a DocumentTypes.
     * @example
     * // Update or create a DocumentTypes
     * const documentTypes = await prisma.documentTypes.upsert({
     *   create: {
     *     // ... data to create a DocumentTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentTypes we want to update
     *   }
     * })
     */
    upsert<T extends documentTypesUpsertArgs>(args: SelectSubset<T, documentTypesUpsertArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentTypesCountArgs} args - Arguments to filter DocumentTypes to count.
     * @example
     * // Count the number of DocumentTypes
     * const count = await prisma.documentTypes.count({
     *   where: {
     *     // ... the filter for the DocumentTypes we want to count
     *   }
     * })
    **/
    count<T extends documentTypesCountArgs>(
      args?: Subset<T, documentTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentTypesAggregateArgs>(args: Subset<T, DocumentTypesAggregateArgs>): Prisma.PrismaPromise<GetDocumentTypesAggregateType<T>>

    /**
     * Group by DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documentTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentTypesGroupByArgs['orderBy'] }
        : { orderBy?: documentTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documentTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the documentTypes model
   */
  readonly fields: documentTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for documentTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends documentTypes$UsersArgs<ExtArgs> = {}>(args?: Subset<T, documentTypes$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the documentTypes model
   */
  interface documentTypesFieldRefs {
    readonly documentTypeId: FieldRef<"documentTypes", 'Int'>
    readonly name: FieldRef<"documentTypes", 'String'>
    readonly code: FieldRef<"documentTypes", 'String'>
    readonly creationDate: FieldRef<"documentTypes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * documentTypes findUnique
   */
  export type documentTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * Filter, which documentTypes to fetch.
     */
    where: documentTypesWhereUniqueInput
  }

  /**
   * documentTypes findUniqueOrThrow
   */
  export type documentTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * Filter, which documentTypes to fetch.
     */
    where: documentTypesWhereUniqueInput
  }

  /**
   * documentTypes findFirst
   */
  export type documentTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * Filter, which documentTypes to fetch.
     */
    where?: documentTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentTypes to fetch.
     */
    orderBy?: documentTypesOrderByWithRelationInput | documentTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentTypes.
     */
    cursor?: documentTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentTypes.
     */
    distinct?: DocumentTypesScalarFieldEnum | DocumentTypesScalarFieldEnum[]
  }

  /**
   * documentTypes findFirstOrThrow
   */
  export type documentTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * Filter, which documentTypes to fetch.
     */
    where?: documentTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentTypes to fetch.
     */
    orderBy?: documentTypesOrderByWithRelationInput | documentTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documentTypes.
     */
    cursor?: documentTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documentTypes.
     */
    distinct?: DocumentTypesScalarFieldEnum | DocumentTypesScalarFieldEnum[]
  }

  /**
   * documentTypes findMany
   */
  export type documentTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * Filter, which documentTypes to fetch.
     */
    where?: documentTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documentTypes to fetch.
     */
    orderBy?: documentTypesOrderByWithRelationInput | documentTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documentTypes.
     */
    cursor?: documentTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documentTypes.
     */
    skip?: number
    distinct?: DocumentTypesScalarFieldEnum | DocumentTypesScalarFieldEnum[]
  }

  /**
   * documentTypes create
   */
  export type documentTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a documentTypes.
     */
    data: XOR<documentTypesCreateInput, documentTypesUncheckedCreateInput>
  }

  /**
   * documentTypes createMany
   */
  export type documentTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documentTypes.
     */
    data: documentTypesCreateManyInput | documentTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * documentTypes update
   */
  export type documentTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a documentTypes.
     */
    data: XOR<documentTypesUpdateInput, documentTypesUncheckedUpdateInput>
    /**
     * Choose, which documentTypes to update.
     */
    where: documentTypesWhereUniqueInput
  }

  /**
   * documentTypes updateMany
   */
  export type documentTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documentTypes.
     */
    data: XOR<documentTypesUpdateManyMutationInput, documentTypesUncheckedUpdateManyInput>
    /**
     * Filter which documentTypes to update
     */
    where?: documentTypesWhereInput
    /**
     * Limit how many documentTypes to update.
     */
    limit?: number
  }

  /**
   * documentTypes upsert
   */
  export type documentTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the documentTypes to update in case it exists.
     */
    where: documentTypesWhereUniqueInput
    /**
     * In case the documentTypes found by the `where` argument doesn't exist, create a new documentTypes with this data.
     */
    create: XOR<documentTypesCreateInput, documentTypesUncheckedCreateInput>
    /**
     * In case the documentTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentTypesUpdateInput, documentTypesUncheckedUpdateInput>
  }

  /**
   * documentTypes delete
   */
  export type documentTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
    /**
     * Filter which documentTypes to delete.
     */
    where: documentTypesWhereUniqueInput
  }

  /**
   * documentTypes deleteMany
   */
  export type documentTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documentTypes to delete
     */
    where?: documentTypesWhereInput
    /**
     * Limit how many documentTypes to delete.
     */
    limit?: number
  }

  /**
   * documentTypes.Users
   */
  export type documentTypes$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * documentTypes without action
   */
  export type documentTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the documentTypes
     */
    select?: documentTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the documentTypes
     */
    omit?: documentTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentTypesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
    tenantId: number | null
    documentTypeId: number | null
    wageRate: Decimal | null
    grossCompensation: Decimal | null
    netCompensation: Decimal | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
    tenantId: number | null
    documentTypeId: number | null
    wageRate: Decimal | null
    grossCompensation: Decimal | null
    netCompensation: Decimal | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    documentNumber: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    activated: boolean | null
    tenantId: number | null
    documentTypeId: number | null
    wageRate: Decimal | null
    grossCompensation: Decimal | null
    netCompensation: Decimal | null
    creationDate: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    documentNumber: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    activated: boolean | null
    tenantId: number | null
    documentTypeId: number | null
    wageRate: Decimal | null
    grossCompensation: Decimal | null
    netCompensation: Decimal | null
    creationDate: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    documentNumber: number
    firstName: number
    lastName: number
    email: number
    phoneNumber: number
    password: number
    activated: number
    tenantId: number
    documentTypeId: number
    wageRate: number
    grossCompensation: number
    netCompensation: number
    creationDate: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
    tenantId?: true
    documentTypeId?: true
    wageRate?: true
    grossCompensation?: true
    netCompensation?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
    tenantId?: true
    documentTypeId?: true
    wageRate?: true
    grossCompensation?: true
    netCompensation?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    documentNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    activated?: true
    tenantId?: true
    documentTypeId?: true
    wageRate?: true
    grossCompensation?: true
    netCompensation?: true
    creationDate?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    documentNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    activated?: true
    tenantId?: true
    documentTypeId?: true
    wageRate?: true
    grossCompensation?: true
    netCompensation?: true
    creationDate?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    documentNumber?: true
    firstName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    password?: true
    activated?: true
    tenantId?: true
    documentTypeId?: true
    wageRate?: true
    grossCompensation?: true
    netCompensation?: true
    creationDate?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    documentNumber: string
    firstName: string
    lastName: string | null
    email: string
    phoneNumber: string | null
    password: string
    activated: boolean
    tenantId: number
    documentTypeId: number
    wageRate: Decimal
    grossCompensation: Decimal
    netCompensation: Decimal
    creationDate: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    documentNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    activated?: boolean
    tenantId?: boolean
    documentTypeId?: boolean
    wageRate?: boolean
    grossCompensation?: boolean
    netCompensation?: boolean
    creationDate?: boolean
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    documentType?: boolean | documentTypesDefaultArgs<ExtArgs>
    bankAccounts?: boolean | users$bankAccountsArgs<ExtArgs>
    workRecords?: boolean | users$workRecordsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    userId?: boolean
    documentNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    activated?: boolean
    tenantId?: boolean
    documentTypeId?: boolean
    wageRate?: boolean
    grossCompensation?: boolean
    netCompensation?: boolean
    creationDate?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "documentNumber" | "firstName" | "lastName" | "email" | "phoneNumber" | "password" | "activated" | "tenantId" | "documentTypeId" | "wageRate" | "grossCompensation" | "netCompensation" | "creationDate", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    documentType?: boolean | documentTypesDefaultArgs<ExtArgs>
    bankAccounts?: boolean | users$bankAccountsArgs<ExtArgs>
    workRecords?: boolean | users$workRecordsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      tenant: Prisma.$tenantsPayload<ExtArgs>
      documentType: Prisma.$documentTypesPayload<ExtArgs>
      bankAccounts: Prisma.$bankAccountsPayload<ExtArgs>[]
      workRecords: Prisma.$workRecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      documentNumber: string
      firstName: string
      lastName: string | null
      email: string
      phoneNumber: string | null
      password: string
      activated: boolean
      tenantId: number
      documentTypeId: number
      wageRate: Prisma.Decimal
      grossCompensation: Prisma.Decimal
      netCompensation: Prisma.Decimal
      creationDate: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documentType<T extends documentTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, documentTypesDefaultArgs<ExtArgs>>): Prisma__documentTypesClient<$Result.GetResult<Prisma.$documentTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bankAccounts<T extends users$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, users$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workRecords<T extends users$workRecordsArgs<ExtArgs> = {}>(args?: Subset<T, users$workRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly userId: FieldRef<"users", 'Int'>
    readonly documentNumber: FieldRef<"users", 'String'>
    readonly firstName: FieldRef<"users", 'String'>
    readonly lastName: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phoneNumber: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly activated: FieldRef<"users", 'Boolean'>
    readonly tenantId: FieldRef<"users", 'Int'>
    readonly documentTypeId: FieldRef<"users", 'Int'>
    readonly wageRate: FieldRef<"users", 'Decimal'>
    readonly grossCompensation: FieldRef<"users", 'Decimal'>
    readonly netCompensation: FieldRef<"users", 'Decimal'>
    readonly creationDate: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.bankAccounts
   */
  export type users$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    where?: bankAccountsWhereInput
    orderBy?: bankAccountsOrderByWithRelationInput | bankAccountsOrderByWithRelationInput[]
    cursor?: bankAccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountsScalarFieldEnum | BankAccountsScalarFieldEnum[]
  }

  /**
   * users.workRecords
   */
  export type users$workRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    where?: workRecordsWhereInput
    orderBy?: workRecordsOrderByWithRelationInput | workRecordsOrderByWithRelationInput[]
    cursor?: workRecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkRecordsScalarFieldEnum | WorkRecordsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model bankAccountTypes
   */

  export type AggregateBankAccountTypes = {
    _count: BankAccountTypesCountAggregateOutputType | null
    _avg: BankAccountTypesAvgAggregateOutputType | null
    _sum: BankAccountTypesSumAggregateOutputType | null
    _min: BankAccountTypesMinAggregateOutputType | null
    _max: BankAccountTypesMaxAggregateOutputType | null
  }

  export type BankAccountTypesAvgAggregateOutputType = {
    bankAccountTypeId: number | null
  }

  export type BankAccountTypesSumAggregateOutputType = {
    bankAccountTypeId: number | null
  }

  export type BankAccountTypesMinAggregateOutputType = {
    bankAccountTypeId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type BankAccountTypesMaxAggregateOutputType = {
    bankAccountTypeId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type BankAccountTypesCountAggregateOutputType = {
    bankAccountTypeId: number
    name: number
    creationDate: number
    _all: number
  }


  export type BankAccountTypesAvgAggregateInputType = {
    bankAccountTypeId?: true
  }

  export type BankAccountTypesSumAggregateInputType = {
    bankAccountTypeId?: true
  }

  export type BankAccountTypesMinAggregateInputType = {
    bankAccountTypeId?: true
    name?: true
    creationDate?: true
  }

  export type BankAccountTypesMaxAggregateInputType = {
    bankAccountTypeId?: true
    name?: true
    creationDate?: true
  }

  export type BankAccountTypesCountAggregateInputType = {
    bankAccountTypeId?: true
    name?: true
    creationDate?: true
    _all?: true
  }

  export type BankAccountTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bankAccountTypes to aggregate.
     */
    where?: bankAccountTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccountTypes to fetch.
     */
    orderBy?: bankAccountTypesOrderByWithRelationInput | bankAccountTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bankAccountTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bankAccountTypes
    **/
    _count?: true | BankAccountTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountTypesMaxAggregateInputType
  }

  export type GetBankAccountTypesAggregateType<T extends BankAccountTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccountTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccountTypes[P]>
      : GetScalarType<T[P], AggregateBankAccountTypes[P]>
  }




  export type bankAccountTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankAccountTypesWhereInput
    orderBy?: bankAccountTypesOrderByWithAggregationInput | bankAccountTypesOrderByWithAggregationInput[]
    by: BankAccountTypesScalarFieldEnum[] | BankAccountTypesScalarFieldEnum
    having?: bankAccountTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountTypesCountAggregateInputType | true
    _avg?: BankAccountTypesAvgAggregateInputType
    _sum?: BankAccountTypesSumAggregateInputType
    _min?: BankAccountTypesMinAggregateInputType
    _max?: BankAccountTypesMaxAggregateInputType
  }

  export type BankAccountTypesGroupByOutputType = {
    bankAccountTypeId: number
    name: string
    creationDate: Date
    _count: BankAccountTypesCountAggregateOutputType | null
    _avg: BankAccountTypesAvgAggregateOutputType | null
    _sum: BankAccountTypesSumAggregateOutputType | null
    _min: BankAccountTypesMinAggregateOutputType | null
    _max: BankAccountTypesMaxAggregateOutputType | null
  }

  type GetBankAccountTypesGroupByPayload<T extends bankAccountTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountTypesGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountTypesGroupByOutputType[P]>
        }
      >
    >


  export type bankAccountTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bankAccountTypeId?: boolean
    name?: boolean
    creationDate?: boolean
    bankAccounts?: boolean | bankAccountTypes$bankAccountsArgs<ExtArgs>
    _count?: boolean | BankAccountTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccountTypes"]>



  export type bankAccountTypesSelectScalar = {
    bankAccountTypeId?: boolean
    name?: boolean
    creationDate?: boolean
  }

  export type bankAccountTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bankAccountTypeId" | "name" | "creationDate", ExtArgs["result"]["bankAccountTypes"]>
  export type bankAccountTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | bankAccountTypes$bankAccountsArgs<ExtArgs>
    _count?: boolean | BankAccountTypesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bankAccountTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bankAccountTypes"
    objects: {
      bankAccounts: Prisma.$bankAccountsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bankAccountTypeId: number
      name: string
      creationDate: Date
    }, ExtArgs["result"]["bankAccountTypes"]>
    composites: {}
  }

  type bankAccountTypesGetPayload<S extends boolean | null | undefined | bankAccountTypesDefaultArgs> = $Result.GetResult<Prisma.$bankAccountTypesPayload, S>

  type bankAccountTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bankAccountTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountTypesCountAggregateInputType | true
    }

  export interface bankAccountTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bankAccountTypes'], meta: { name: 'bankAccountTypes' } }
    /**
     * Find zero or one BankAccountTypes that matches the filter.
     * @param {bankAccountTypesFindUniqueArgs} args - Arguments to find a BankAccountTypes
     * @example
     * // Get one BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bankAccountTypesFindUniqueArgs>(args: SelectSubset<T, bankAccountTypesFindUniqueArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccountTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bankAccountTypesFindUniqueOrThrowArgs} args - Arguments to find a BankAccountTypes
     * @example
     * // Get one BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bankAccountTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, bankAccountTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccountTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountTypesFindFirstArgs} args - Arguments to find a BankAccountTypes
     * @example
     * // Get one BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bankAccountTypesFindFirstArgs>(args?: SelectSubset<T, bankAccountTypesFindFirstArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccountTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountTypesFindFirstOrThrowArgs} args - Arguments to find a BankAccountTypes
     * @example
     * // Get one BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bankAccountTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, bankAccountTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccountTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.findMany()
     * 
     * // Get first 10 BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.findMany({ take: 10 })
     * 
     * // Only select the `bankAccountTypeId`
     * const bankAccountTypesWithBankAccountTypeIdOnly = await prisma.bankAccountTypes.findMany({ select: { bankAccountTypeId: true } })
     * 
     */
    findMany<T extends bankAccountTypesFindManyArgs>(args?: SelectSubset<T, bankAccountTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccountTypes.
     * @param {bankAccountTypesCreateArgs} args - Arguments to create a BankAccountTypes.
     * @example
     * // Create one BankAccountTypes
     * const BankAccountTypes = await prisma.bankAccountTypes.create({
     *   data: {
     *     // ... data to create a BankAccountTypes
     *   }
     * })
     * 
     */
    create<T extends bankAccountTypesCreateArgs>(args: SelectSubset<T, bankAccountTypesCreateArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccountTypes.
     * @param {bankAccountTypesCreateManyArgs} args - Arguments to create many BankAccountTypes.
     * @example
     * // Create many BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bankAccountTypesCreateManyArgs>(args?: SelectSubset<T, bankAccountTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BankAccountTypes.
     * @param {bankAccountTypesDeleteArgs} args - Arguments to delete one BankAccountTypes.
     * @example
     * // Delete one BankAccountTypes
     * const BankAccountTypes = await prisma.bankAccountTypes.delete({
     *   where: {
     *     // ... filter to delete one BankAccountTypes
     *   }
     * })
     * 
     */
    delete<T extends bankAccountTypesDeleteArgs>(args: SelectSubset<T, bankAccountTypesDeleteArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccountTypes.
     * @param {bankAccountTypesUpdateArgs} args - Arguments to update one BankAccountTypes.
     * @example
     * // Update one BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bankAccountTypesUpdateArgs>(args: SelectSubset<T, bankAccountTypesUpdateArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccountTypes.
     * @param {bankAccountTypesDeleteManyArgs} args - Arguments to filter BankAccountTypes to delete.
     * @example
     * // Delete a few BankAccountTypes
     * const { count } = await prisma.bankAccountTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bankAccountTypesDeleteManyArgs>(args?: SelectSubset<T, bankAccountTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bankAccountTypesUpdateManyArgs>(args: SelectSubset<T, bankAccountTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankAccountTypes.
     * @param {bankAccountTypesUpsertArgs} args - Arguments to update or create a BankAccountTypes.
     * @example
     * // Update or create a BankAccountTypes
     * const bankAccountTypes = await prisma.bankAccountTypes.upsert({
     *   create: {
     *     // ... data to create a BankAccountTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccountTypes we want to update
     *   }
     * })
     */
    upsert<T extends bankAccountTypesUpsertArgs>(args: SelectSubset<T, bankAccountTypesUpsertArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountTypesCountArgs} args - Arguments to filter BankAccountTypes to count.
     * @example
     * // Count the number of BankAccountTypes
     * const count = await prisma.bankAccountTypes.count({
     *   where: {
     *     // ... the filter for the BankAccountTypes we want to count
     *   }
     * })
    **/
    count<T extends bankAccountTypesCountArgs>(
      args?: Subset<T, bankAccountTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountTypesAggregateArgs>(args: Subset<T, BankAccountTypesAggregateArgs>): Prisma.PrismaPromise<GetBankAccountTypesAggregateType<T>>

    /**
     * Group by BankAccountTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bankAccountTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bankAccountTypesGroupByArgs['orderBy'] }
        : { orderBy?: bankAccountTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bankAccountTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bankAccountTypes model
   */
  readonly fields: bankAccountTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bankAccountTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bankAccountTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccounts<T extends bankAccountTypes$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, bankAccountTypes$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bankAccountTypes model
   */
  interface bankAccountTypesFieldRefs {
    readonly bankAccountTypeId: FieldRef<"bankAccountTypes", 'Int'>
    readonly name: FieldRef<"bankAccountTypes", 'String'>
    readonly creationDate: FieldRef<"bankAccountTypes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bankAccountTypes findUnique
   */
  export type bankAccountTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * Filter, which bankAccountTypes to fetch.
     */
    where: bankAccountTypesWhereUniqueInput
  }

  /**
   * bankAccountTypes findUniqueOrThrow
   */
  export type bankAccountTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * Filter, which bankAccountTypes to fetch.
     */
    where: bankAccountTypesWhereUniqueInput
  }

  /**
   * bankAccountTypes findFirst
   */
  export type bankAccountTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * Filter, which bankAccountTypes to fetch.
     */
    where?: bankAccountTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccountTypes to fetch.
     */
    orderBy?: bankAccountTypesOrderByWithRelationInput | bankAccountTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bankAccountTypes.
     */
    cursor?: bankAccountTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bankAccountTypes.
     */
    distinct?: BankAccountTypesScalarFieldEnum | BankAccountTypesScalarFieldEnum[]
  }

  /**
   * bankAccountTypes findFirstOrThrow
   */
  export type bankAccountTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * Filter, which bankAccountTypes to fetch.
     */
    where?: bankAccountTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccountTypes to fetch.
     */
    orderBy?: bankAccountTypesOrderByWithRelationInput | bankAccountTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bankAccountTypes.
     */
    cursor?: bankAccountTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccountTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bankAccountTypes.
     */
    distinct?: BankAccountTypesScalarFieldEnum | BankAccountTypesScalarFieldEnum[]
  }

  /**
   * bankAccountTypes findMany
   */
  export type bankAccountTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * Filter, which bankAccountTypes to fetch.
     */
    where?: bankAccountTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccountTypes to fetch.
     */
    orderBy?: bankAccountTypesOrderByWithRelationInput | bankAccountTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bankAccountTypes.
     */
    cursor?: bankAccountTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccountTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccountTypes.
     */
    skip?: number
    distinct?: BankAccountTypesScalarFieldEnum | BankAccountTypesScalarFieldEnum[]
  }

  /**
   * bankAccountTypes create
   */
  export type bankAccountTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a bankAccountTypes.
     */
    data: XOR<bankAccountTypesCreateInput, bankAccountTypesUncheckedCreateInput>
  }

  /**
   * bankAccountTypes createMany
   */
  export type bankAccountTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bankAccountTypes.
     */
    data: bankAccountTypesCreateManyInput | bankAccountTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bankAccountTypes update
   */
  export type bankAccountTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a bankAccountTypes.
     */
    data: XOR<bankAccountTypesUpdateInput, bankAccountTypesUncheckedUpdateInput>
    /**
     * Choose, which bankAccountTypes to update.
     */
    where: bankAccountTypesWhereUniqueInput
  }

  /**
   * bankAccountTypes updateMany
   */
  export type bankAccountTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bankAccountTypes.
     */
    data: XOR<bankAccountTypesUpdateManyMutationInput, bankAccountTypesUncheckedUpdateManyInput>
    /**
     * Filter which bankAccountTypes to update
     */
    where?: bankAccountTypesWhereInput
    /**
     * Limit how many bankAccountTypes to update.
     */
    limit?: number
  }

  /**
   * bankAccountTypes upsert
   */
  export type bankAccountTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the bankAccountTypes to update in case it exists.
     */
    where: bankAccountTypesWhereUniqueInput
    /**
     * In case the bankAccountTypes found by the `where` argument doesn't exist, create a new bankAccountTypes with this data.
     */
    create: XOR<bankAccountTypesCreateInput, bankAccountTypesUncheckedCreateInput>
    /**
     * In case the bankAccountTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bankAccountTypesUpdateInput, bankAccountTypesUncheckedUpdateInput>
  }

  /**
   * bankAccountTypes delete
   */
  export type bankAccountTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
    /**
     * Filter which bankAccountTypes to delete.
     */
    where: bankAccountTypesWhereUniqueInput
  }

  /**
   * bankAccountTypes deleteMany
   */
  export type bankAccountTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bankAccountTypes to delete
     */
    where?: bankAccountTypesWhereInput
    /**
     * Limit how many bankAccountTypes to delete.
     */
    limit?: number
  }

  /**
   * bankAccountTypes.bankAccounts
   */
  export type bankAccountTypes$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    where?: bankAccountsWhereInput
    orderBy?: bankAccountsOrderByWithRelationInput | bankAccountsOrderByWithRelationInput[]
    cursor?: bankAccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountsScalarFieldEnum | BankAccountsScalarFieldEnum[]
  }

  /**
   * bankAccountTypes without action
   */
  export type bankAccountTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccountTypes
     */
    select?: bankAccountTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccountTypes
     */
    omit?: bankAccountTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountTypesInclude<ExtArgs> | null
  }


  /**
   * Model banks
   */

  export type AggregateBanks = {
    _count: BanksCountAggregateOutputType | null
    _avg: BanksAvgAggregateOutputType | null
    _sum: BanksSumAggregateOutputType | null
    _min: BanksMinAggregateOutputType | null
    _max: BanksMaxAggregateOutputType | null
  }

  export type BanksAvgAggregateOutputType = {
    bankId: number | null
  }

  export type BanksSumAggregateOutputType = {
    bankId: number | null
  }

  export type BanksMinAggregateOutputType = {
    bankId: number | null
    code: string | null
    name: string | null
    creationDate: Date | null
  }

  export type BanksMaxAggregateOutputType = {
    bankId: number | null
    code: string | null
    name: string | null
    creationDate: Date | null
  }

  export type BanksCountAggregateOutputType = {
    bankId: number
    code: number
    name: number
    creationDate: number
    _all: number
  }


  export type BanksAvgAggregateInputType = {
    bankId?: true
  }

  export type BanksSumAggregateInputType = {
    bankId?: true
  }

  export type BanksMinAggregateInputType = {
    bankId?: true
    code?: true
    name?: true
    creationDate?: true
  }

  export type BanksMaxAggregateInputType = {
    bankId?: true
    code?: true
    name?: true
    creationDate?: true
  }

  export type BanksCountAggregateInputType = {
    bankId?: true
    code?: true
    name?: true
    creationDate?: true
    _all?: true
  }

  export type BanksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks to aggregate.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banks
    **/
    _count?: true | BanksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BanksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BanksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BanksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BanksMaxAggregateInputType
  }

  export type GetBanksAggregateType<T extends BanksAggregateArgs> = {
        [P in keyof T & keyof AggregateBanks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanks[P]>
      : GetScalarType<T[P], AggregateBanks[P]>
  }




  export type banksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: banksWhereInput
    orderBy?: banksOrderByWithAggregationInput | banksOrderByWithAggregationInput[]
    by: BanksScalarFieldEnum[] | BanksScalarFieldEnum
    having?: banksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BanksCountAggregateInputType | true
    _avg?: BanksAvgAggregateInputType
    _sum?: BanksSumAggregateInputType
    _min?: BanksMinAggregateInputType
    _max?: BanksMaxAggregateInputType
  }

  export type BanksGroupByOutputType = {
    bankId: number
    code: string
    name: string
    creationDate: Date
    _count: BanksCountAggregateOutputType | null
    _avg: BanksAvgAggregateOutputType | null
    _sum: BanksSumAggregateOutputType | null
    _min: BanksMinAggregateOutputType | null
    _max: BanksMaxAggregateOutputType | null
  }

  type GetBanksGroupByPayload<T extends banksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BanksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BanksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BanksGroupByOutputType[P]>
            : GetScalarType<T[P], BanksGroupByOutputType[P]>
        }
      >
    >


  export type banksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bankId?: boolean
    code?: boolean
    name?: boolean
    creationDate?: boolean
    bankAccounts?: boolean | banks$bankAccountsArgs<ExtArgs>
    _count?: boolean | BanksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banks"]>



  export type banksSelectScalar = {
    bankId?: boolean
    code?: boolean
    name?: boolean
    creationDate?: boolean
  }

  export type banksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bankId" | "code" | "name" | "creationDate", ExtArgs["result"]["banks"]>
  export type banksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | banks$bankAccountsArgs<ExtArgs>
    _count?: boolean | BanksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $banksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banks"
    objects: {
      bankAccounts: Prisma.$bankAccountsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bankId: number
      code: string
      name: string
      creationDate: Date
    }, ExtArgs["result"]["banks"]>
    composites: {}
  }

  type banksGetPayload<S extends boolean | null | undefined | banksDefaultArgs> = $Result.GetResult<Prisma.$banksPayload, S>

  type banksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<banksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BanksCountAggregateInputType | true
    }

  export interface banksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banks'], meta: { name: 'banks' } }
    /**
     * Find zero or one Banks that matches the filter.
     * @param {banksFindUniqueArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends banksFindUniqueArgs>(args: SelectSubset<T, banksFindUniqueArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {banksFindUniqueOrThrowArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends banksFindUniqueOrThrowArgs>(args: SelectSubset<T, banksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksFindFirstArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends banksFindFirstArgs>(args?: SelectSubset<T, banksFindFirstArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksFindFirstOrThrowArgs} args - Arguments to find a Banks
     * @example
     * // Get one Banks
     * const banks = await prisma.banks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends banksFindFirstOrThrowArgs>(args?: SelectSubset<T, banksFindFirstOrThrowArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banks
     * const banks = await prisma.banks.findMany()
     * 
     * // Get first 10 Banks
     * const banks = await prisma.banks.findMany({ take: 10 })
     * 
     * // Only select the `bankId`
     * const banksWithBankIdOnly = await prisma.banks.findMany({ select: { bankId: true } })
     * 
     */
    findMany<T extends banksFindManyArgs>(args?: SelectSubset<T, banksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banks.
     * @param {banksCreateArgs} args - Arguments to create a Banks.
     * @example
     * // Create one Banks
     * const Banks = await prisma.banks.create({
     *   data: {
     *     // ... data to create a Banks
     *   }
     * })
     * 
     */
    create<T extends banksCreateArgs>(args: SelectSubset<T, banksCreateArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banks.
     * @param {banksCreateManyArgs} args - Arguments to create many Banks.
     * @example
     * // Create many Banks
     * const banks = await prisma.banks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends banksCreateManyArgs>(args?: SelectSubset<T, banksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banks.
     * @param {banksDeleteArgs} args - Arguments to delete one Banks.
     * @example
     * // Delete one Banks
     * const Banks = await prisma.banks.delete({
     *   where: {
     *     // ... filter to delete one Banks
     *   }
     * })
     * 
     */
    delete<T extends banksDeleteArgs>(args: SelectSubset<T, banksDeleteArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banks.
     * @param {banksUpdateArgs} args - Arguments to update one Banks.
     * @example
     * // Update one Banks
     * const banks = await prisma.banks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends banksUpdateArgs>(args: SelectSubset<T, banksUpdateArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banks.
     * @param {banksDeleteManyArgs} args - Arguments to filter Banks to delete.
     * @example
     * // Delete a few Banks
     * const { count } = await prisma.banks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends banksDeleteManyArgs>(args?: SelectSubset<T, banksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banks
     * const banks = await prisma.banks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends banksUpdateManyArgs>(args: SelectSubset<T, banksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banks.
     * @param {banksUpsertArgs} args - Arguments to update or create a Banks.
     * @example
     * // Update or create a Banks
     * const banks = await prisma.banks.upsert({
     *   create: {
     *     // ... data to create a Banks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banks we want to update
     *   }
     * })
     */
    upsert<T extends banksUpsertArgs>(args: SelectSubset<T, banksUpsertArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksCountArgs} args - Arguments to filter Banks to count.
     * @example
     * // Count the number of Banks
     * const count = await prisma.banks.count({
     *   where: {
     *     // ... the filter for the Banks we want to count
     *   }
     * })
    **/
    count<T extends banksCountArgs>(
      args?: Subset<T, banksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BanksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BanksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BanksAggregateArgs>(args: Subset<T, BanksAggregateArgs>): Prisma.PrismaPromise<GetBanksAggregateType<T>>

    /**
     * Group by Banks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {banksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends banksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: banksGroupByArgs['orderBy'] }
        : { orderBy?: banksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, banksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBanksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banks model
   */
  readonly fields: banksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__banksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccounts<T extends banks$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, banks$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the banks model
   */
  interface banksFieldRefs {
    readonly bankId: FieldRef<"banks", 'Int'>
    readonly code: FieldRef<"banks", 'String'>
    readonly name: FieldRef<"banks", 'String'>
    readonly creationDate: FieldRef<"banks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * banks findUnique
   */
  export type banksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks findUniqueOrThrow
   */
  export type banksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks findFirst
   */
  export type banksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks.
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks.
     */
    distinct?: BanksScalarFieldEnum | BanksScalarFieldEnum[]
  }

  /**
   * banks findFirstOrThrow
   */
  export type banksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banks.
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banks.
     */
    distinct?: BanksScalarFieldEnum | BanksScalarFieldEnum[]
  }

  /**
   * banks findMany
   */
  export type banksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter, which banks to fetch.
     */
    where?: banksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banks to fetch.
     */
    orderBy?: banksOrderByWithRelationInput | banksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banks.
     */
    cursor?: banksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banks.
     */
    skip?: number
    distinct?: BanksScalarFieldEnum | BanksScalarFieldEnum[]
  }

  /**
   * banks create
   */
  export type banksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * The data needed to create a banks.
     */
    data: XOR<banksCreateInput, banksUncheckedCreateInput>
  }

  /**
   * banks createMany
   */
  export type banksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banks.
     */
    data: banksCreateManyInput | banksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banks update
   */
  export type banksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * The data needed to update a banks.
     */
    data: XOR<banksUpdateInput, banksUncheckedUpdateInput>
    /**
     * Choose, which banks to update.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks updateMany
   */
  export type banksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banks.
     */
    data: XOR<banksUpdateManyMutationInput, banksUncheckedUpdateManyInput>
    /**
     * Filter which banks to update
     */
    where?: banksWhereInput
    /**
     * Limit how many banks to update.
     */
    limit?: number
  }

  /**
   * banks upsert
   */
  export type banksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * The filter to search for the banks to update in case it exists.
     */
    where: banksWhereUniqueInput
    /**
     * In case the banks found by the `where` argument doesn't exist, create a new banks with this data.
     */
    create: XOR<banksCreateInput, banksUncheckedCreateInput>
    /**
     * In case the banks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<banksUpdateInput, banksUncheckedUpdateInput>
  }

  /**
   * banks delete
   */
  export type banksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
    /**
     * Filter which banks to delete.
     */
    where: banksWhereUniqueInput
  }

  /**
   * banks deleteMany
   */
  export type banksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banks to delete
     */
    where?: banksWhereInput
    /**
     * Limit how many banks to delete.
     */
    limit?: number
  }

  /**
   * banks.bankAccounts
   */
  export type banks$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    where?: bankAccountsWhereInput
    orderBy?: bankAccountsOrderByWithRelationInput | bankAccountsOrderByWithRelationInput[]
    cursor?: bankAccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankAccountsScalarFieldEnum | BankAccountsScalarFieldEnum[]
  }

  /**
   * banks without action
   */
  export type banksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banks
     */
    select?: banksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banks
     */
    omit?: banksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: banksInclude<ExtArgs> | null
  }


  /**
   * Model bankAccounts
   */

  export type AggregateBankAccounts = {
    _count: BankAccountsCountAggregateOutputType | null
    _avg: BankAccountsAvgAggregateOutputType | null
    _sum: BankAccountsSumAggregateOutputType | null
    _min: BankAccountsMinAggregateOutputType | null
    _max: BankAccountsMaxAggregateOutputType | null
  }

  export type BankAccountsAvgAggregateOutputType = {
    bankAccountId: number | null
    bankAccountTypeId: number | null
    userId: number | null
    bankId: number | null
  }

  export type BankAccountsSumAggregateOutputType = {
    bankAccountId: number | null
    bankAccountTypeId: number | null
    userId: number | null
    bankId: number | null
  }

  export type BankAccountsMinAggregateOutputType = {
    bankAccountId: number | null
    number: string | null
    bankAccountTypeId: number | null
    creationDate: Date | null
    userId: number | null
    bankId: number | null
  }

  export type BankAccountsMaxAggregateOutputType = {
    bankAccountId: number | null
    number: string | null
    bankAccountTypeId: number | null
    creationDate: Date | null
    userId: number | null
    bankId: number | null
  }

  export type BankAccountsCountAggregateOutputType = {
    bankAccountId: number
    number: number
    bankAccountTypeId: number
    creationDate: number
    userId: number
    bankId: number
    _all: number
  }


  export type BankAccountsAvgAggregateInputType = {
    bankAccountId?: true
    bankAccountTypeId?: true
    userId?: true
    bankId?: true
  }

  export type BankAccountsSumAggregateInputType = {
    bankAccountId?: true
    bankAccountTypeId?: true
    userId?: true
    bankId?: true
  }

  export type BankAccountsMinAggregateInputType = {
    bankAccountId?: true
    number?: true
    bankAccountTypeId?: true
    creationDate?: true
    userId?: true
    bankId?: true
  }

  export type BankAccountsMaxAggregateInputType = {
    bankAccountId?: true
    number?: true
    bankAccountTypeId?: true
    creationDate?: true
    userId?: true
    bankId?: true
  }

  export type BankAccountsCountAggregateInputType = {
    bankAccountId?: true
    number?: true
    bankAccountTypeId?: true
    creationDate?: true
    userId?: true
    bankId?: true
    _all?: true
  }

  export type BankAccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bankAccounts to aggregate.
     */
    where?: bankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccounts to fetch.
     */
    orderBy?: bankAccountsOrderByWithRelationInput | bankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bankAccounts
    **/
    _count?: true | BankAccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankAccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankAccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankAccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankAccountsMaxAggregateInputType
  }

  export type GetBankAccountsAggregateType<T extends BankAccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateBankAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankAccounts[P]>
      : GetScalarType<T[P], AggregateBankAccounts[P]>
  }




  export type bankAccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bankAccountsWhereInput
    orderBy?: bankAccountsOrderByWithAggregationInput | bankAccountsOrderByWithAggregationInput[]
    by: BankAccountsScalarFieldEnum[] | BankAccountsScalarFieldEnum
    having?: bankAccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankAccountsCountAggregateInputType | true
    _avg?: BankAccountsAvgAggregateInputType
    _sum?: BankAccountsSumAggregateInputType
    _min?: BankAccountsMinAggregateInputType
    _max?: BankAccountsMaxAggregateInputType
  }

  export type BankAccountsGroupByOutputType = {
    bankAccountId: number
    number: string
    bankAccountTypeId: number
    creationDate: Date
    userId: number
    bankId: number
    _count: BankAccountsCountAggregateOutputType | null
    _avg: BankAccountsAvgAggregateOutputType | null
    _sum: BankAccountsSumAggregateOutputType | null
    _min: BankAccountsMinAggregateOutputType | null
    _max: BankAccountsMaxAggregateOutputType | null
  }

  type GetBankAccountsGroupByPayload<T extends bankAccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankAccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankAccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankAccountsGroupByOutputType[P]>
            : GetScalarType<T[P], BankAccountsGroupByOutputType[P]>
        }
      >
    >


  export type bankAccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bankAccountId?: boolean
    number?: boolean
    bankAccountTypeId?: boolean
    creationDate?: boolean
    userId?: boolean
    bankId?: boolean
    bankAccountType?: boolean | bankAccountTypesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    bank?: boolean | banksDefaultArgs<ExtArgs>
    transactions?: boolean | bankAccounts$transactionsArgs<ExtArgs>
    _count?: boolean | BankAccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankAccounts"]>



  export type bankAccountsSelectScalar = {
    bankAccountId?: boolean
    number?: boolean
    bankAccountTypeId?: boolean
    creationDate?: boolean
    userId?: boolean
    bankId?: boolean
  }

  export type bankAccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bankAccountId" | "number" | "bankAccountTypeId" | "creationDate" | "userId" | "bankId", ExtArgs["result"]["bankAccounts"]>
  export type bankAccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccountType?: boolean | bankAccountTypesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    bank?: boolean | banksDefaultArgs<ExtArgs>
    transactions?: boolean | bankAccounts$transactionsArgs<ExtArgs>
    _count?: boolean | BankAccountsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bankAccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bankAccounts"
    objects: {
      bankAccountType: Prisma.$bankAccountTypesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
      bank: Prisma.$banksPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bankAccountId: number
      number: string
      bankAccountTypeId: number
      creationDate: Date
      userId: number
      bankId: number
    }, ExtArgs["result"]["bankAccounts"]>
    composites: {}
  }

  type bankAccountsGetPayload<S extends boolean | null | undefined | bankAccountsDefaultArgs> = $Result.GetResult<Prisma.$bankAccountsPayload, S>

  type bankAccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bankAccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankAccountsCountAggregateInputType | true
    }

  export interface bankAccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bankAccounts'], meta: { name: 'bankAccounts' } }
    /**
     * Find zero or one BankAccounts that matches the filter.
     * @param {bankAccountsFindUniqueArgs} args - Arguments to find a BankAccounts
     * @example
     * // Get one BankAccounts
     * const bankAccounts = await prisma.bankAccounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bankAccountsFindUniqueArgs>(args: SelectSubset<T, bankAccountsFindUniqueArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankAccounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bankAccountsFindUniqueOrThrowArgs} args - Arguments to find a BankAccounts
     * @example
     * // Get one BankAccounts
     * const bankAccounts = await prisma.bankAccounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bankAccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, bankAccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountsFindFirstArgs} args - Arguments to find a BankAccounts
     * @example
     * // Get one BankAccounts
     * const bankAccounts = await prisma.bankAccounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bankAccountsFindFirstArgs>(args?: SelectSubset<T, bankAccountsFindFirstArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankAccounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountsFindFirstOrThrowArgs} args - Arguments to find a BankAccounts
     * @example
     * // Get one BankAccounts
     * const bankAccounts = await prisma.bankAccounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bankAccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, bankAccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankAccounts
     * const bankAccounts = await prisma.bankAccounts.findMany()
     * 
     * // Get first 10 BankAccounts
     * const bankAccounts = await prisma.bankAccounts.findMany({ take: 10 })
     * 
     * // Only select the `bankAccountId`
     * const bankAccountsWithBankAccountIdOnly = await prisma.bankAccounts.findMany({ select: { bankAccountId: true } })
     * 
     */
    findMany<T extends bankAccountsFindManyArgs>(args?: SelectSubset<T, bankAccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankAccounts.
     * @param {bankAccountsCreateArgs} args - Arguments to create a BankAccounts.
     * @example
     * // Create one BankAccounts
     * const BankAccounts = await prisma.bankAccounts.create({
     *   data: {
     *     // ... data to create a BankAccounts
     *   }
     * })
     * 
     */
    create<T extends bankAccountsCreateArgs>(args: SelectSubset<T, bankAccountsCreateArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankAccounts.
     * @param {bankAccountsCreateManyArgs} args - Arguments to create many BankAccounts.
     * @example
     * // Create many BankAccounts
     * const bankAccounts = await prisma.bankAccounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bankAccountsCreateManyArgs>(args?: SelectSubset<T, bankAccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BankAccounts.
     * @param {bankAccountsDeleteArgs} args - Arguments to delete one BankAccounts.
     * @example
     * // Delete one BankAccounts
     * const BankAccounts = await prisma.bankAccounts.delete({
     *   where: {
     *     // ... filter to delete one BankAccounts
     *   }
     * })
     * 
     */
    delete<T extends bankAccountsDeleteArgs>(args: SelectSubset<T, bankAccountsDeleteArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankAccounts.
     * @param {bankAccountsUpdateArgs} args - Arguments to update one BankAccounts.
     * @example
     * // Update one BankAccounts
     * const bankAccounts = await prisma.bankAccounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bankAccountsUpdateArgs>(args: SelectSubset<T, bankAccountsUpdateArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankAccounts.
     * @param {bankAccountsDeleteManyArgs} args - Arguments to filter BankAccounts to delete.
     * @example
     * // Delete a few BankAccounts
     * const { count } = await prisma.bankAccounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bankAccountsDeleteManyArgs>(args?: SelectSubset<T, bankAccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankAccounts
     * const bankAccounts = await prisma.bankAccounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bankAccountsUpdateManyArgs>(args: SelectSubset<T, bankAccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BankAccounts.
     * @param {bankAccountsUpsertArgs} args - Arguments to update or create a BankAccounts.
     * @example
     * // Update or create a BankAccounts
     * const bankAccounts = await prisma.bankAccounts.upsert({
     *   create: {
     *     // ... data to create a BankAccounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankAccounts we want to update
     *   }
     * })
     */
    upsert<T extends bankAccountsUpsertArgs>(args: SelectSubset<T, bankAccountsUpsertArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountsCountArgs} args - Arguments to filter BankAccounts to count.
     * @example
     * // Count the number of BankAccounts
     * const count = await prisma.bankAccounts.count({
     *   where: {
     *     // ... the filter for the BankAccounts we want to count
     *   }
     * })
    **/
    count<T extends bankAccountsCountArgs>(
      args?: Subset<T, bankAccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankAccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankAccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankAccountsAggregateArgs>(args: Subset<T, BankAccountsAggregateArgs>): Prisma.PrismaPromise<GetBankAccountsAggregateType<T>>

    /**
     * Group by BankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bankAccountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bankAccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bankAccountsGroupByArgs['orderBy'] }
        : { orderBy?: bankAccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bankAccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bankAccounts model
   */
  readonly fields: bankAccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bankAccounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bankAccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bankAccountType<T extends bankAccountTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bankAccountTypesDefaultArgs<ExtArgs>>): Prisma__bankAccountTypesClient<$Result.GetResult<Prisma.$bankAccountTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bank<T extends banksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, banksDefaultArgs<ExtArgs>>): Prisma__banksClient<$Result.GetResult<Prisma.$banksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends bankAccounts$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, bankAccounts$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bankAccounts model
   */
  interface bankAccountsFieldRefs {
    readonly bankAccountId: FieldRef<"bankAccounts", 'Int'>
    readonly number: FieldRef<"bankAccounts", 'String'>
    readonly bankAccountTypeId: FieldRef<"bankAccounts", 'Int'>
    readonly creationDate: FieldRef<"bankAccounts", 'DateTime'>
    readonly userId: FieldRef<"bankAccounts", 'Int'>
    readonly bankId: FieldRef<"bankAccounts", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bankAccounts findUnique
   */
  export type bankAccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which bankAccounts to fetch.
     */
    where: bankAccountsWhereUniqueInput
  }

  /**
   * bankAccounts findUniqueOrThrow
   */
  export type bankAccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which bankAccounts to fetch.
     */
    where: bankAccountsWhereUniqueInput
  }

  /**
   * bankAccounts findFirst
   */
  export type bankAccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which bankAccounts to fetch.
     */
    where?: bankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccounts to fetch.
     */
    orderBy?: bankAccountsOrderByWithRelationInput | bankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bankAccounts.
     */
    cursor?: bankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bankAccounts.
     */
    distinct?: BankAccountsScalarFieldEnum | BankAccountsScalarFieldEnum[]
  }

  /**
   * bankAccounts findFirstOrThrow
   */
  export type bankAccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which bankAccounts to fetch.
     */
    where?: bankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccounts to fetch.
     */
    orderBy?: bankAccountsOrderByWithRelationInput | bankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bankAccounts.
     */
    cursor?: bankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bankAccounts.
     */
    distinct?: BankAccountsScalarFieldEnum | BankAccountsScalarFieldEnum[]
  }

  /**
   * bankAccounts findMany
   */
  export type bankAccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which bankAccounts to fetch.
     */
    where?: bankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bankAccounts to fetch.
     */
    orderBy?: bankAccountsOrderByWithRelationInput | bankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bankAccounts.
     */
    cursor?: bankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bankAccounts.
     */
    skip?: number
    distinct?: BankAccountsScalarFieldEnum | BankAccountsScalarFieldEnum[]
  }

  /**
   * bankAccounts create
   */
  export type bankAccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a bankAccounts.
     */
    data: XOR<bankAccountsCreateInput, bankAccountsUncheckedCreateInput>
  }

  /**
   * bankAccounts createMany
   */
  export type bankAccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bankAccounts.
     */
    data: bankAccountsCreateManyInput | bankAccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bankAccounts update
   */
  export type bankAccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a bankAccounts.
     */
    data: XOR<bankAccountsUpdateInput, bankAccountsUncheckedUpdateInput>
    /**
     * Choose, which bankAccounts to update.
     */
    where: bankAccountsWhereUniqueInput
  }

  /**
   * bankAccounts updateMany
   */
  export type bankAccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bankAccounts.
     */
    data: XOR<bankAccountsUpdateManyMutationInput, bankAccountsUncheckedUpdateManyInput>
    /**
     * Filter which bankAccounts to update
     */
    where?: bankAccountsWhereInput
    /**
     * Limit how many bankAccounts to update.
     */
    limit?: number
  }

  /**
   * bankAccounts upsert
   */
  export type bankAccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the bankAccounts to update in case it exists.
     */
    where: bankAccountsWhereUniqueInput
    /**
     * In case the bankAccounts found by the `where` argument doesn't exist, create a new bankAccounts with this data.
     */
    create: XOR<bankAccountsCreateInput, bankAccountsUncheckedCreateInput>
    /**
     * In case the bankAccounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bankAccountsUpdateInput, bankAccountsUncheckedUpdateInput>
  }

  /**
   * bankAccounts delete
   */
  export type bankAccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
    /**
     * Filter which bankAccounts to delete.
     */
    where: bankAccountsWhereUniqueInput
  }

  /**
   * bankAccounts deleteMany
   */
  export type bankAccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bankAccounts to delete
     */
    where?: bankAccountsWhereInput
    /**
     * Limit how many bankAccounts to delete.
     */
    limit?: number
  }

  /**
   * bankAccounts.transactions
   */
  export type bankAccounts$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * bankAccounts without action
   */
  export type bankAccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bankAccounts
     */
    select?: bankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bankAccounts
     */
    omit?: bankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bankAccountsInclude<ExtArgs> | null
  }


  /**
   * Model transactionStatus
   */

  export type AggregateTransactionStatus = {
    _count: TransactionStatusCountAggregateOutputType | null
    _avg: TransactionStatusAvgAggregateOutputType | null
    _sum: TransactionStatusSumAggregateOutputType | null
    _min: TransactionStatusMinAggregateOutputType | null
    _max: TransactionStatusMaxAggregateOutputType | null
  }

  export type TransactionStatusAvgAggregateOutputType = {
    transactionStatusId: number | null
  }

  export type TransactionStatusSumAggregateOutputType = {
    transactionStatusId: number | null
  }

  export type TransactionStatusMinAggregateOutputType = {
    transactionStatusId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type TransactionStatusMaxAggregateOutputType = {
    transactionStatusId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type TransactionStatusCountAggregateOutputType = {
    transactionStatusId: number
    name: number
    creationDate: number
    _all: number
  }


  export type TransactionStatusAvgAggregateInputType = {
    transactionStatusId?: true
  }

  export type TransactionStatusSumAggregateInputType = {
    transactionStatusId?: true
  }

  export type TransactionStatusMinAggregateInputType = {
    transactionStatusId?: true
    name?: true
    creationDate?: true
  }

  export type TransactionStatusMaxAggregateInputType = {
    transactionStatusId?: true
    name?: true
    creationDate?: true
  }

  export type TransactionStatusCountAggregateInputType = {
    transactionStatusId?: true
    name?: true
    creationDate?: true
    _all?: true
  }

  export type TransactionStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactionStatus to aggregate.
     */
    where?: transactionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactionStatuses to fetch.
     */
    orderBy?: transactionStatusOrderByWithRelationInput | transactionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactionStatuses
    **/
    _count?: true | TransactionStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionStatusMaxAggregateInputType
  }

  export type GetTransactionStatusAggregateType<T extends TransactionStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionStatus[P]>
      : GetScalarType<T[P], AggregateTransactionStatus[P]>
  }




  export type transactionStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionStatusWhereInput
    orderBy?: transactionStatusOrderByWithAggregationInput | transactionStatusOrderByWithAggregationInput[]
    by: TransactionStatusScalarFieldEnum[] | TransactionStatusScalarFieldEnum
    having?: transactionStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionStatusCountAggregateInputType | true
    _avg?: TransactionStatusAvgAggregateInputType
    _sum?: TransactionStatusSumAggregateInputType
    _min?: TransactionStatusMinAggregateInputType
    _max?: TransactionStatusMaxAggregateInputType
  }

  export type TransactionStatusGroupByOutputType = {
    transactionStatusId: number
    name: string
    creationDate: Date
    _count: TransactionStatusCountAggregateOutputType | null
    _avg: TransactionStatusAvgAggregateOutputType | null
    _sum: TransactionStatusSumAggregateOutputType | null
    _min: TransactionStatusMinAggregateOutputType | null
    _max: TransactionStatusMaxAggregateOutputType | null
  }

  type GetTransactionStatusGroupByPayload<T extends transactionStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionStatusGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionStatusGroupByOutputType[P]>
        }
      >
    >


  export type transactionStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionStatusId?: boolean
    name?: boolean
    creationDate?: boolean
    transactions?: boolean | transactionStatus$transactionsArgs<ExtArgs>
    _count?: boolean | TransactionStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionStatus"]>



  export type transactionStatusSelectScalar = {
    transactionStatusId?: boolean
    name?: boolean
    creationDate?: boolean
  }

  export type transactionStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transactionStatusId" | "name" | "creationDate", ExtArgs["result"]["transactionStatus"]>
  export type transactionStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | transactionStatus$transactionsArgs<ExtArgs>
    _count?: boolean | TransactionStatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $transactionStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactionStatus"
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      transactionStatusId: number
      name: string
      creationDate: Date
    }, ExtArgs["result"]["transactionStatus"]>
    composites: {}
  }

  type transactionStatusGetPayload<S extends boolean | null | undefined | transactionStatusDefaultArgs> = $Result.GetResult<Prisma.$transactionStatusPayload, S>

  type transactionStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionStatusCountAggregateInputType | true
    }

  export interface transactionStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactionStatus'], meta: { name: 'transactionStatus' } }
    /**
     * Find zero or one TransactionStatus that matches the filter.
     * @param {transactionStatusFindUniqueArgs} args - Arguments to find a TransactionStatus
     * @example
     * // Get one TransactionStatus
     * const transactionStatus = await prisma.transactionStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionStatusFindUniqueArgs>(args: SelectSubset<T, transactionStatusFindUniqueArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionStatusFindUniqueOrThrowArgs} args - Arguments to find a TransactionStatus
     * @example
     * // Get one TransactionStatus
     * const transactionStatus = await prisma.transactionStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionStatusFindFirstArgs} args - Arguments to find a TransactionStatus
     * @example
     * // Get one TransactionStatus
     * const transactionStatus = await prisma.transactionStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionStatusFindFirstArgs>(args?: SelectSubset<T, transactionStatusFindFirstArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionStatusFindFirstOrThrowArgs} args - Arguments to find a TransactionStatus
     * @example
     * // Get one TransactionStatus
     * const transactionStatus = await prisma.transactionStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionStatuses
     * const transactionStatuses = await prisma.transactionStatus.findMany()
     * 
     * // Get first 10 TransactionStatuses
     * const transactionStatuses = await prisma.transactionStatus.findMany({ take: 10 })
     * 
     * // Only select the `transactionStatusId`
     * const transactionStatusWithTransactionStatusIdOnly = await prisma.transactionStatus.findMany({ select: { transactionStatusId: true } })
     * 
     */
    findMany<T extends transactionStatusFindManyArgs>(args?: SelectSubset<T, transactionStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionStatus.
     * @param {transactionStatusCreateArgs} args - Arguments to create a TransactionStatus.
     * @example
     * // Create one TransactionStatus
     * const TransactionStatus = await prisma.transactionStatus.create({
     *   data: {
     *     // ... data to create a TransactionStatus
     *   }
     * })
     * 
     */
    create<T extends transactionStatusCreateArgs>(args: SelectSubset<T, transactionStatusCreateArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionStatuses.
     * @param {transactionStatusCreateManyArgs} args - Arguments to create many TransactionStatuses.
     * @example
     * // Create many TransactionStatuses
     * const transactionStatus = await prisma.transactionStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionStatusCreateManyArgs>(args?: SelectSubset<T, transactionStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TransactionStatus.
     * @param {transactionStatusDeleteArgs} args - Arguments to delete one TransactionStatus.
     * @example
     * // Delete one TransactionStatus
     * const TransactionStatus = await prisma.transactionStatus.delete({
     *   where: {
     *     // ... filter to delete one TransactionStatus
     *   }
     * })
     * 
     */
    delete<T extends transactionStatusDeleteArgs>(args: SelectSubset<T, transactionStatusDeleteArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionStatus.
     * @param {transactionStatusUpdateArgs} args - Arguments to update one TransactionStatus.
     * @example
     * // Update one TransactionStatus
     * const transactionStatus = await prisma.transactionStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionStatusUpdateArgs>(args: SelectSubset<T, transactionStatusUpdateArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionStatuses.
     * @param {transactionStatusDeleteManyArgs} args - Arguments to filter TransactionStatuses to delete.
     * @example
     * // Delete a few TransactionStatuses
     * const { count } = await prisma.transactionStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionStatusDeleteManyArgs>(args?: SelectSubset<T, transactionStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionStatuses
     * const transactionStatus = await prisma.transactionStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionStatusUpdateManyArgs>(args: SelectSubset<T, transactionStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TransactionStatus.
     * @param {transactionStatusUpsertArgs} args - Arguments to update or create a TransactionStatus.
     * @example
     * // Update or create a TransactionStatus
     * const transactionStatus = await prisma.transactionStatus.upsert({
     *   create: {
     *     // ... data to create a TransactionStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionStatus we want to update
     *   }
     * })
     */
    upsert<T extends transactionStatusUpsertArgs>(args: SelectSubset<T, transactionStatusUpsertArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionStatusCountArgs} args - Arguments to filter TransactionStatuses to count.
     * @example
     * // Count the number of TransactionStatuses
     * const count = await prisma.transactionStatus.count({
     *   where: {
     *     // ... the filter for the TransactionStatuses we want to count
     *   }
     * })
    **/
    count<T extends transactionStatusCountArgs>(
      args?: Subset<T, transactionStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionStatusAggregateArgs>(args: Subset<T, TransactionStatusAggregateArgs>): Prisma.PrismaPromise<GetTransactionStatusAggregateType<T>>

    /**
     * Group by TransactionStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionStatusGroupByArgs['orderBy'] }
        : { orderBy?: transactionStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactionStatus model
   */
  readonly fields: transactionStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactionStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends transactionStatus$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, transactionStatus$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactionStatus model
   */
  interface transactionStatusFieldRefs {
    readonly transactionStatusId: FieldRef<"transactionStatus", 'Int'>
    readonly name: FieldRef<"transactionStatus", 'String'>
    readonly creationDate: FieldRef<"transactionStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactionStatus findUnique
   */
  export type transactionStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * Filter, which transactionStatus to fetch.
     */
    where: transactionStatusWhereUniqueInput
  }

  /**
   * transactionStatus findUniqueOrThrow
   */
  export type transactionStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * Filter, which transactionStatus to fetch.
     */
    where: transactionStatusWhereUniqueInput
  }

  /**
   * transactionStatus findFirst
   */
  export type transactionStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * Filter, which transactionStatus to fetch.
     */
    where?: transactionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactionStatuses to fetch.
     */
    orderBy?: transactionStatusOrderByWithRelationInput | transactionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactionStatuses.
     */
    cursor?: transactionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactionStatuses.
     */
    distinct?: TransactionStatusScalarFieldEnum | TransactionStatusScalarFieldEnum[]
  }

  /**
   * transactionStatus findFirstOrThrow
   */
  export type transactionStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * Filter, which transactionStatus to fetch.
     */
    where?: transactionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactionStatuses to fetch.
     */
    orderBy?: transactionStatusOrderByWithRelationInput | transactionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactionStatuses.
     */
    cursor?: transactionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactionStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactionStatuses.
     */
    distinct?: TransactionStatusScalarFieldEnum | TransactionStatusScalarFieldEnum[]
  }

  /**
   * transactionStatus findMany
   */
  export type transactionStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * Filter, which transactionStatuses to fetch.
     */
    where?: transactionStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactionStatuses to fetch.
     */
    orderBy?: transactionStatusOrderByWithRelationInput | transactionStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactionStatuses.
     */
    cursor?: transactionStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactionStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactionStatuses.
     */
    skip?: number
    distinct?: TransactionStatusScalarFieldEnum | TransactionStatusScalarFieldEnum[]
  }

  /**
   * transactionStatus create
   */
  export type transactionStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a transactionStatus.
     */
    data: XOR<transactionStatusCreateInput, transactionStatusUncheckedCreateInput>
  }

  /**
   * transactionStatus createMany
   */
  export type transactionStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactionStatuses.
     */
    data: transactionStatusCreateManyInput | transactionStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactionStatus update
   */
  export type transactionStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a transactionStatus.
     */
    data: XOR<transactionStatusUpdateInput, transactionStatusUncheckedUpdateInput>
    /**
     * Choose, which transactionStatus to update.
     */
    where: transactionStatusWhereUniqueInput
  }

  /**
   * transactionStatus updateMany
   */
  export type transactionStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactionStatuses.
     */
    data: XOR<transactionStatusUpdateManyMutationInput, transactionStatusUncheckedUpdateManyInput>
    /**
     * Filter which transactionStatuses to update
     */
    where?: transactionStatusWhereInput
    /**
     * Limit how many transactionStatuses to update.
     */
    limit?: number
  }

  /**
   * transactionStatus upsert
   */
  export type transactionStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the transactionStatus to update in case it exists.
     */
    where: transactionStatusWhereUniqueInput
    /**
     * In case the transactionStatus found by the `where` argument doesn't exist, create a new transactionStatus with this data.
     */
    create: XOR<transactionStatusCreateInput, transactionStatusUncheckedCreateInput>
    /**
     * In case the transactionStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionStatusUpdateInput, transactionStatusUncheckedUpdateInput>
  }

  /**
   * transactionStatus delete
   */
  export type transactionStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
    /**
     * Filter which transactionStatus to delete.
     */
    where: transactionStatusWhereUniqueInput
  }

  /**
   * transactionStatus deleteMany
   */
  export type transactionStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactionStatuses to delete
     */
    where?: transactionStatusWhereInput
    /**
     * Limit how many transactionStatuses to delete.
     */
    limit?: number
  }

  /**
   * transactionStatus.transactions
   */
  export type transactionStatus$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactionStatus without action
   */
  export type transactionStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactionStatus
     */
    select?: transactionStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactionStatus
     */
    omit?: transactionStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionStatusInclude<ExtArgs> | null
  }


  /**
   * Model currencies
   */

  export type AggregateCurrencies = {
    _count: CurrenciesCountAggregateOutputType | null
    _avg: CurrenciesAvgAggregateOutputType | null
    _sum: CurrenciesSumAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  export type CurrenciesAvgAggregateOutputType = {
    currencyId: number | null
  }

  export type CurrenciesSumAggregateOutputType = {
    currencyId: number | null
  }

  export type CurrenciesMinAggregateOutputType = {
    currencyId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type CurrenciesMaxAggregateOutputType = {
    currencyId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type CurrenciesCountAggregateOutputType = {
    currencyId: number
    name: number
    creationDate: number
    _all: number
  }


  export type CurrenciesAvgAggregateInputType = {
    currencyId?: true
  }

  export type CurrenciesSumAggregateInputType = {
    currencyId?: true
  }

  export type CurrenciesMinAggregateInputType = {
    currencyId?: true
    name?: true
    creationDate?: true
  }

  export type CurrenciesMaxAggregateInputType = {
    currencyId?: true
    name?: true
    creationDate?: true
  }

  export type CurrenciesCountAggregateInputType = {
    currencyId?: true
    name?: true
    creationDate?: true
    _all?: true
  }

  export type CurrenciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currencies to aggregate.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned currencies
    **/
    _count?: true | CurrenciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrenciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrenciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrenciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrenciesMaxAggregateInputType
  }

  export type GetCurrenciesAggregateType<T extends CurrenciesAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrencies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrencies[P]>
      : GetScalarType<T[P], AggregateCurrencies[P]>
  }




  export type currenciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: currenciesWhereInput
    orderBy?: currenciesOrderByWithAggregationInput | currenciesOrderByWithAggregationInput[]
    by: CurrenciesScalarFieldEnum[] | CurrenciesScalarFieldEnum
    having?: currenciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrenciesCountAggregateInputType | true
    _avg?: CurrenciesAvgAggregateInputType
    _sum?: CurrenciesSumAggregateInputType
    _min?: CurrenciesMinAggregateInputType
    _max?: CurrenciesMaxAggregateInputType
  }

  export type CurrenciesGroupByOutputType = {
    currencyId: number
    name: string
    creationDate: Date
    _count: CurrenciesCountAggregateOutputType | null
    _avg: CurrenciesAvgAggregateOutputType | null
    _sum: CurrenciesSumAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  type GetCurrenciesGroupByPayload<T extends currenciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrenciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrenciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
            : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
        }
      >
    >


  export type currenciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    currencyId?: boolean
    name?: boolean
    creationDate?: boolean
    transactions?: boolean | currencies$transactionsArgs<ExtArgs>
    _count?: boolean | CurrenciesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currencies"]>



  export type currenciesSelectScalar = {
    currencyId?: boolean
    name?: boolean
    creationDate?: boolean
  }

  export type currenciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"currencyId" | "name" | "creationDate", ExtArgs["result"]["currencies"]>
  export type currenciesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | currencies$transactionsArgs<ExtArgs>
    _count?: boolean | CurrenciesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $currenciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "currencies"
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      currencyId: number
      name: string
      creationDate: Date
    }, ExtArgs["result"]["currencies"]>
    composites: {}
  }

  type currenciesGetPayload<S extends boolean | null | undefined | currenciesDefaultArgs> = $Result.GetResult<Prisma.$currenciesPayload, S>

  type currenciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<currenciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrenciesCountAggregateInputType | true
    }

  export interface currenciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['currencies'], meta: { name: 'currencies' } }
    /**
     * Find zero or one Currencies that matches the filter.
     * @param {currenciesFindUniqueArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends currenciesFindUniqueArgs>(args: SelectSubset<T, currenciesFindUniqueArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currencies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {currenciesFindUniqueOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends currenciesFindUniqueOrThrowArgs>(args: SelectSubset<T, currenciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesFindFirstArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends currenciesFindFirstArgs>(args?: SelectSubset<T, currenciesFindFirstArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currencies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesFindFirstOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends currenciesFindFirstOrThrowArgs>(args?: SelectSubset<T, currenciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currencies.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currencies.findMany({ take: 10 })
     * 
     * // Only select the `currencyId`
     * const currenciesWithCurrencyIdOnly = await prisma.currencies.findMany({ select: { currencyId: true } })
     * 
     */
    findMany<T extends currenciesFindManyArgs>(args?: SelectSubset<T, currenciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currencies.
     * @param {currenciesCreateArgs} args - Arguments to create a Currencies.
     * @example
     * // Create one Currencies
     * const Currencies = await prisma.currencies.create({
     *   data: {
     *     // ... data to create a Currencies
     *   }
     * })
     * 
     */
    create<T extends currenciesCreateArgs>(args: SelectSubset<T, currenciesCreateArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {currenciesCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currencies = await prisma.currencies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends currenciesCreateManyArgs>(args?: SelectSubset<T, currenciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Currencies.
     * @param {currenciesDeleteArgs} args - Arguments to delete one Currencies.
     * @example
     * // Delete one Currencies
     * const Currencies = await prisma.currencies.delete({
     *   where: {
     *     // ... filter to delete one Currencies
     *   }
     * })
     * 
     */
    delete<T extends currenciesDeleteArgs>(args: SelectSubset<T, currenciesDeleteArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currencies.
     * @param {currenciesUpdateArgs} args - Arguments to update one Currencies.
     * @example
     * // Update one Currencies
     * const currencies = await prisma.currencies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends currenciesUpdateArgs>(args: SelectSubset<T, currenciesUpdateArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {currenciesDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currencies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends currenciesDeleteManyArgs>(args?: SelectSubset<T, currenciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currencies = await prisma.currencies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends currenciesUpdateManyArgs>(args: SelectSubset<T, currenciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currencies.
     * @param {currenciesUpsertArgs} args - Arguments to update or create a Currencies.
     * @example
     * // Update or create a Currencies
     * const currencies = await prisma.currencies.upsert({
     *   create: {
     *     // ... data to create a Currencies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currencies we want to update
     *   }
     * })
     */
    upsert<T extends currenciesUpsertArgs>(args: SelectSubset<T, currenciesUpsertArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currencies.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends currenciesCountArgs>(
      args?: Subset<T, currenciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrenciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrenciesAggregateArgs>(args: Subset<T, CurrenciesAggregateArgs>): Prisma.PrismaPromise<GetCurrenciesAggregateType<T>>

    /**
     * Group by Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {currenciesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends currenciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: currenciesGroupByArgs['orderBy'] }
        : { orderBy?: currenciesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, currenciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrenciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the currencies model
   */
  readonly fields: currenciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for currencies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__currenciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends currencies$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, currencies$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the currencies model
   */
  interface currenciesFieldRefs {
    readonly currencyId: FieldRef<"currencies", 'Int'>
    readonly name: FieldRef<"currencies", 'String'>
    readonly creationDate: FieldRef<"currencies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * currencies findUnique
   */
  export type currenciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies findUniqueOrThrow
   */
  export type currenciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies findFirst
   */
  export type currenciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * currencies findFirstOrThrow
   */
  export type currenciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for currencies.
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * currencies findMany
   */
  export type currenciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter, which currencies to fetch.
     */
    where?: currenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of currencies to fetch.
     */
    orderBy?: currenciesOrderByWithRelationInput | currenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing currencies.
     */
    cursor?: currenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` currencies.
     */
    skip?: number
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * currencies create
   */
  export type currenciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * The data needed to create a currencies.
     */
    data: XOR<currenciesCreateInput, currenciesUncheckedCreateInput>
  }

  /**
   * currencies createMany
   */
  export type currenciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many currencies.
     */
    data: currenciesCreateManyInput | currenciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * currencies update
   */
  export type currenciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * The data needed to update a currencies.
     */
    data: XOR<currenciesUpdateInput, currenciesUncheckedUpdateInput>
    /**
     * Choose, which currencies to update.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies updateMany
   */
  export type currenciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update currencies.
     */
    data: XOR<currenciesUpdateManyMutationInput, currenciesUncheckedUpdateManyInput>
    /**
     * Filter which currencies to update
     */
    where?: currenciesWhereInput
    /**
     * Limit how many currencies to update.
     */
    limit?: number
  }

  /**
   * currencies upsert
   */
  export type currenciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * The filter to search for the currencies to update in case it exists.
     */
    where: currenciesWhereUniqueInput
    /**
     * In case the currencies found by the `where` argument doesn't exist, create a new currencies with this data.
     */
    create: XOR<currenciesCreateInput, currenciesUncheckedCreateInput>
    /**
     * In case the currencies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<currenciesUpdateInput, currenciesUncheckedUpdateInput>
  }

  /**
   * currencies delete
   */
  export type currenciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
    /**
     * Filter which currencies to delete.
     */
    where: currenciesWhereUniqueInput
  }

  /**
   * currencies deleteMany
   */
  export type currenciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which currencies to delete
     */
    where?: currenciesWhereInput
    /**
     * Limit how many currencies to delete.
     */
    limit?: number
  }

  /**
   * currencies.transactions
   */
  export type currencies$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * currencies without action
   */
  export type currenciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the currencies
     */
    select?: currenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the currencies
     */
    omit?: currenciesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: currenciesInclude<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsAvgAggregateOutputType = {
    accountId: number | null
  }

  export type AccountsSumAggregateOutputType = {
    accountId: number | null
  }

  export type AccountsMinAggregateOutputType = {
    accountId: number | null
    name: string | null
    token: string | null
    privateKey: string | null
    creationDate: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    accountId: number | null
    name: string | null
    token: string | null
    privateKey: string | null
    creationDate: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    accountId: number
    name: number
    token: number
    privateKey: number
    creationDate: number
    _all: number
  }


  export type AccountsAvgAggregateInputType = {
    accountId?: true
  }

  export type AccountsSumAggregateInputType = {
    accountId?: true
  }

  export type AccountsMinAggregateInputType = {
    accountId?: true
    name?: true
    token?: true
    privateKey?: true
    creationDate?: true
  }

  export type AccountsMaxAggregateInputType = {
    accountId?: true
    name?: true
    token?: true
    privateKey?: true
    creationDate?: true
  }

  export type AccountsCountAggregateInputType = {
    accountId?: true
    name?: true
    token?: true
    privateKey?: true
    creationDate?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _avg?: AccountsAvgAggregateInputType
    _sum?: AccountsSumAggregateInputType
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    accountId: number
    name: string
    token: string
    privateKey: string
    creationDate: Date
    _count: AccountsCountAggregateOutputType | null
    _avg: AccountsAvgAggregateOutputType | null
    _sum: AccountsSumAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    name?: boolean
    token?: boolean
    privateKey?: boolean
    creationDate?: boolean
    transactions?: boolean | accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>



  export type accountsSelectScalar = {
    accountId?: boolean
    name?: boolean
    token?: boolean
    privateKey?: boolean
    creationDate?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accountId" | "name" | "token" | "privateKey" | "creationDate", ExtArgs["result"]["accounts"]>
  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      accountId: number
      name: string
      token: string
      privateKey: string
      creationDate: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `accountId`
     * const accountsWithAccountIdOnly = await prisma.accounts.findMany({ select: { accountId: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends accounts$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly accountId: FieldRef<"accounts", 'Int'>
    readonly name: FieldRef<"accounts", 'String'>
    readonly token: FieldRef<"accounts", 'String'>
    readonly privateKey: FieldRef<"accounts", 'String'>
    readonly creationDate: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts.transactions
   */
  export type accounts$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model payrollCycleStatus
   */

  export type AggregatePayrollCycleStatus = {
    _count: PayrollCycleStatusCountAggregateOutputType | null
    _avg: PayrollCycleStatusAvgAggregateOutputType | null
    _sum: PayrollCycleStatusSumAggregateOutputType | null
    _min: PayrollCycleStatusMinAggregateOutputType | null
    _max: PayrollCycleStatusMaxAggregateOutputType | null
  }

  export type PayrollCycleStatusAvgAggregateOutputType = {
    payrollCycleStatusId: number | null
  }

  export type PayrollCycleStatusSumAggregateOutputType = {
    payrollCycleStatusId: number | null
  }

  export type PayrollCycleStatusMinAggregateOutputType = {
    payrollCycleStatusId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type PayrollCycleStatusMaxAggregateOutputType = {
    payrollCycleStatusId: number | null
    name: string | null
    creationDate: Date | null
  }

  export type PayrollCycleStatusCountAggregateOutputType = {
    payrollCycleStatusId: number
    name: number
    creationDate: number
    _all: number
  }


  export type PayrollCycleStatusAvgAggregateInputType = {
    payrollCycleStatusId?: true
  }

  export type PayrollCycleStatusSumAggregateInputType = {
    payrollCycleStatusId?: true
  }

  export type PayrollCycleStatusMinAggregateInputType = {
    payrollCycleStatusId?: true
    name?: true
    creationDate?: true
  }

  export type PayrollCycleStatusMaxAggregateInputType = {
    payrollCycleStatusId?: true
    name?: true
    creationDate?: true
  }

  export type PayrollCycleStatusCountAggregateInputType = {
    payrollCycleStatusId?: true
    name?: true
    creationDate?: true
    _all?: true
  }

  export type PayrollCycleStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payrollCycleStatus to aggregate.
     */
    where?: payrollCycleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycleStatuses to fetch.
     */
    orderBy?: payrollCycleStatusOrderByWithRelationInput | payrollCycleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payrollCycleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycleStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payrollCycleStatuses
    **/
    _count?: true | PayrollCycleStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollCycleStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollCycleStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollCycleStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollCycleStatusMaxAggregateInputType
  }

  export type GetPayrollCycleStatusAggregateType<T extends PayrollCycleStatusAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollCycleStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollCycleStatus[P]>
      : GetScalarType<T[P], AggregatePayrollCycleStatus[P]>
  }




  export type payrollCycleStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payrollCycleStatusWhereInput
    orderBy?: payrollCycleStatusOrderByWithAggregationInput | payrollCycleStatusOrderByWithAggregationInput[]
    by: PayrollCycleStatusScalarFieldEnum[] | PayrollCycleStatusScalarFieldEnum
    having?: payrollCycleStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCycleStatusCountAggregateInputType | true
    _avg?: PayrollCycleStatusAvgAggregateInputType
    _sum?: PayrollCycleStatusSumAggregateInputType
    _min?: PayrollCycleStatusMinAggregateInputType
    _max?: PayrollCycleStatusMaxAggregateInputType
  }

  export type PayrollCycleStatusGroupByOutputType = {
    payrollCycleStatusId: number
    name: string
    creationDate: Date
    _count: PayrollCycleStatusCountAggregateOutputType | null
    _avg: PayrollCycleStatusAvgAggregateOutputType | null
    _sum: PayrollCycleStatusSumAggregateOutputType | null
    _min: PayrollCycleStatusMinAggregateOutputType | null
    _max: PayrollCycleStatusMaxAggregateOutputType | null
  }

  type GetPayrollCycleStatusGroupByPayload<T extends payrollCycleStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollCycleStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollCycleStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollCycleStatusGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollCycleStatusGroupByOutputType[P]>
        }
      >
    >


  export type payrollCycleStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payrollCycleStatusId?: boolean
    name?: boolean
    creationDate?: boolean
  }, ExtArgs["result"]["payrollCycleStatus"]>



  export type payrollCycleStatusSelectScalar = {
    payrollCycleStatusId?: boolean
    name?: boolean
    creationDate?: boolean
  }

  export type payrollCycleStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payrollCycleStatusId" | "name" | "creationDate", ExtArgs["result"]["payrollCycleStatus"]>

  export type $payrollCycleStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payrollCycleStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      payrollCycleStatusId: number
      name: string
      creationDate: Date
    }, ExtArgs["result"]["payrollCycleStatus"]>
    composites: {}
  }

  type payrollCycleStatusGetPayload<S extends boolean | null | undefined | payrollCycleStatusDefaultArgs> = $Result.GetResult<Prisma.$payrollCycleStatusPayload, S>

  type payrollCycleStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payrollCycleStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCycleStatusCountAggregateInputType | true
    }

  export interface payrollCycleStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payrollCycleStatus'], meta: { name: 'payrollCycleStatus' } }
    /**
     * Find zero or one PayrollCycleStatus that matches the filter.
     * @param {payrollCycleStatusFindUniqueArgs} args - Arguments to find a PayrollCycleStatus
     * @example
     * // Get one PayrollCycleStatus
     * const payrollCycleStatus = await prisma.payrollCycleStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payrollCycleStatusFindUniqueArgs>(args: SelectSubset<T, payrollCycleStatusFindUniqueArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollCycleStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payrollCycleStatusFindUniqueOrThrowArgs} args - Arguments to find a PayrollCycleStatus
     * @example
     * // Get one PayrollCycleStatus
     * const payrollCycleStatus = await prisma.payrollCycleStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payrollCycleStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, payrollCycleStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollCycleStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCycleStatusFindFirstArgs} args - Arguments to find a PayrollCycleStatus
     * @example
     * // Get one PayrollCycleStatus
     * const payrollCycleStatus = await prisma.payrollCycleStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payrollCycleStatusFindFirstArgs>(args?: SelectSubset<T, payrollCycleStatusFindFirstArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollCycleStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCycleStatusFindFirstOrThrowArgs} args - Arguments to find a PayrollCycleStatus
     * @example
     * // Get one PayrollCycleStatus
     * const payrollCycleStatus = await prisma.payrollCycleStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payrollCycleStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, payrollCycleStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollCycleStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCycleStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollCycleStatuses
     * const payrollCycleStatuses = await prisma.payrollCycleStatus.findMany()
     * 
     * // Get first 10 PayrollCycleStatuses
     * const payrollCycleStatuses = await prisma.payrollCycleStatus.findMany({ take: 10 })
     * 
     * // Only select the `payrollCycleStatusId`
     * const payrollCycleStatusWithPayrollCycleStatusIdOnly = await prisma.payrollCycleStatus.findMany({ select: { payrollCycleStatusId: true } })
     * 
     */
    findMany<T extends payrollCycleStatusFindManyArgs>(args?: SelectSubset<T, payrollCycleStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollCycleStatus.
     * @param {payrollCycleStatusCreateArgs} args - Arguments to create a PayrollCycleStatus.
     * @example
     * // Create one PayrollCycleStatus
     * const PayrollCycleStatus = await prisma.payrollCycleStatus.create({
     *   data: {
     *     // ... data to create a PayrollCycleStatus
     *   }
     * })
     * 
     */
    create<T extends payrollCycleStatusCreateArgs>(args: SelectSubset<T, payrollCycleStatusCreateArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollCycleStatuses.
     * @param {payrollCycleStatusCreateManyArgs} args - Arguments to create many PayrollCycleStatuses.
     * @example
     * // Create many PayrollCycleStatuses
     * const payrollCycleStatus = await prisma.payrollCycleStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payrollCycleStatusCreateManyArgs>(args?: SelectSubset<T, payrollCycleStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayrollCycleStatus.
     * @param {payrollCycleStatusDeleteArgs} args - Arguments to delete one PayrollCycleStatus.
     * @example
     * // Delete one PayrollCycleStatus
     * const PayrollCycleStatus = await prisma.payrollCycleStatus.delete({
     *   where: {
     *     // ... filter to delete one PayrollCycleStatus
     *   }
     * })
     * 
     */
    delete<T extends payrollCycleStatusDeleteArgs>(args: SelectSubset<T, payrollCycleStatusDeleteArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollCycleStatus.
     * @param {payrollCycleStatusUpdateArgs} args - Arguments to update one PayrollCycleStatus.
     * @example
     * // Update one PayrollCycleStatus
     * const payrollCycleStatus = await prisma.payrollCycleStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payrollCycleStatusUpdateArgs>(args: SelectSubset<T, payrollCycleStatusUpdateArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollCycleStatuses.
     * @param {payrollCycleStatusDeleteManyArgs} args - Arguments to filter PayrollCycleStatuses to delete.
     * @example
     * // Delete a few PayrollCycleStatuses
     * const { count } = await prisma.payrollCycleStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payrollCycleStatusDeleteManyArgs>(args?: SelectSubset<T, payrollCycleStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollCycleStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCycleStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollCycleStatuses
     * const payrollCycleStatus = await prisma.payrollCycleStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payrollCycleStatusUpdateManyArgs>(args: SelectSubset<T, payrollCycleStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayrollCycleStatus.
     * @param {payrollCycleStatusUpsertArgs} args - Arguments to update or create a PayrollCycleStatus.
     * @example
     * // Update or create a PayrollCycleStatus
     * const payrollCycleStatus = await prisma.payrollCycleStatus.upsert({
     *   create: {
     *     // ... data to create a PayrollCycleStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollCycleStatus we want to update
     *   }
     * })
     */
    upsert<T extends payrollCycleStatusUpsertArgs>(args: SelectSubset<T, payrollCycleStatusUpsertArgs<ExtArgs>>): Prisma__payrollCycleStatusClient<$Result.GetResult<Prisma.$payrollCycleStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollCycleStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCycleStatusCountArgs} args - Arguments to filter PayrollCycleStatuses to count.
     * @example
     * // Count the number of PayrollCycleStatuses
     * const count = await prisma.payrollCycleStatus.count({
     *   where: {
     *     // ... the filter for the PayrollCycleStatuses we want to count
     *   }
     * })
    **/
    count<T extends payrollCycleStatusCountArgs>(
      args?: Subset<T, payrollCycleStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCycleStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollCycleStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCycleStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayrollCycleStatusAggregateArgs>(args: Subset<T, PayrollCycleStatusAggregateArgs>): Prisma.PrismaPromise<GetPayrollCycleStatusAggregateType<T>>

    /**
     * Group by PayrollCycleStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCycleStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payrollCycleStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payrollCycleStatusGroupByArgs['orderBy'] }
        : { orderBy?: payrollCycleStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payrollCycleStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollCycleStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payrollCycleStatus model
   */
  readonly fields: payrollCycleStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payrollCycleStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payrollCycleStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payrollCycleStatus model
   */
  interface payrollCycleStatusFieldRefs {
    readonly payrollCycleStatusId: FieldRef<"payrollCycleStatus", 'Int'>
    readonly name: FieldRef<"payrollCycleStatus", 'String'>
    readonly creationDate: FieldRef<"payrollCycleStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payrollCycleStatus findUnique
   */
  export type payrollCycleStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * Filter, which payrollCycleStatus to fetch.
     */
    where: payrollCycleStatusWhereUniqueInput
  }

  /**
   * payrollCycleStatus findUniqueOrThrow
   */
  export type payrollCycleStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * Filter, which payrollCycleStatus to fetch.
     */
    where: payrollCycleStatusWhereUniqueInput
  }

  /**
   * payrollCycleStatus findFirst
   */
  export type payrollCycleStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * Filter, which payrollCycleStatus to fetch.
     */
    where?: payrollCycleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycleStatuses to fetch.
     */
    orderBy?: payrollCycleStatusOrderByWithRelationInput | payrollCycleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payrollCycleStatuses.
     */
    cursor?: payrollCycleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycleStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payrollCycleStatuses.
     */
    distinct?: PayrollCycleStatusScalarFieldEnum | PayrollCycleStatusScalarFieldEnum[]
  }

  /**
   * payrollCycleStatus findFirstOrThrow
   */
  export type payrollCycleStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * Filter, which payrollCycleStatus to fetch.
     */
    where?: payrollCycleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycleStatuses to fetch.
     */
    orderBy?: payrollCycleStatusOrderByWithRelationInput | payrollCycleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payrollCycleStatuses.
     */
    cursor?: payrollCycleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycleStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payrollCycleStatuses.
     */
    distinct?: PayrollCycleStatusScalarFieldEnum | PayrollCycleStatusScalarFieldEnum[]
  }

  /**
   * payrollCycleStatus findMany
   */
  export type payrollCycleStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * Filter, which payrollCycleStatuses to fetch.
     */
    where?: payrollCycleStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycleStatuses to fetch.
     */
    orderBy?: payrollCycleStatusOrderByWithRelationInput | payrollCycleStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payrollCycleStatuses.
     */
    cursor?: payrollCycleStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycleStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycleStatuses.
     */
    skip?: number
    distinct?: PayrollCycleStatusScalarFieldEnum | PayrollCycleStatusScalarFieldEnum[]
  }

  /**
   * payrollCycleStatus create
   */
  export type payrollCycleStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a payrollCycleStatus.
     */
    data: XOR<payrollCycleStatusCreateInput, payrollCycleStatusUncheckedCreateInput>
  }

  /**
   * payrollCycleStatus createMany
   */
  export type payrollCycleStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payrollCycleStatuses.
     */
    data: payrollCycleStatusCreateManyInput | payrollCycleStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payrollCycleStatus update
   */
  export type payrollCycleStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a payrollCycleStatus.
     */
    data: XOR<payrollCycleStatusUpdateInput, payrollCycleStatusUncheckedUpdateInput>
    /**
     * Choose, which payrollCycleStatus to update.
     */
    where: payrollCycleStatusWhereUniqueInput
  }

  /**
   * payrollCycleStatus updateMany
   */
  export type payrollCycleStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payrollCycleStatuses.
     */
    data: XOR<payrollCycleStatusUpdateManyMutationInput, payrollCycleStatusUncheckedUpdateManyInput>
    /**
     * Filter which payrollCycleStatuses to update
     */
    where?: payrollCycleStatusWhereInput
    /**
     * Limit how many payrollCycleStatuses to update.
     */
    limit?: number
  }

  /**
   * payrollCycleStatus upsert
   */
  export type payrollCycleStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the payrollCycleStatus to update in case it exists.
     */
    where: payrollCycleStatusWhereUniqueInput
    /**
     * In case the payrollCycleStatus found by the `where` argument doesn't exist, create a new payrollCycleStatus with this data.
     */
    create: XOR<payrollCycleStatusCreateInput, payrollCycleStatusUncheckedCreateInput>
    /**
     * In case the payrollCycleStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payrollCycleStatusUpdateInput, payrollCycleStatusUncheckedUpdateInput>
  }

  /**
   * payrollCycleStatus delete
   */
  export type payrollCycleStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
    /**
     * Filter which payrollCycleStatus to delete.
     */
    where: payrollCycleStatusWhereUniqueInput
  }

  /**
   * payrollCycleStatus deleteMany
   */
  export type payrollCycleStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payrollCycleStatuses to delete
     */
    where?: payrollCycleStatusWhereInput
    /**
     * Limit how many payrollCycleStatuses to delete.
     */
    limit?: number
  }

  /**
   * payrollCycleStatus without action
   */
  export type payrollCycleStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycleStatus
     */
    select?: payrollCycleStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycleStatus
     */
    omit?: payrollCycleStatusOmit<ExtArgs> | null
  }


  /**
   * Model payrollCycles
   */

  export type AggregatePayrollCycles = {
    _count: PayrollCyclesCountAggregateOutputType | null
    _avg: PayrollCyclesAvgAggregateOutputType | null
    _sum: PayrollCyclesSumAggregateOutputType | null
    _min: PayrollCyclesMinAggregateOutputType | null
    _max: PayrollCyclesMaxAggregateOutputType | null
  }

  export type PayrollCyclesAvgAggregateOutputType = {
    payrollCycleId: number | null
    tenantId: number | null
    totalGrossEarning: Decimal | null
    totalNetEarning: Decimal | null
    transactionId: number | null
  }

  export type PayrollCyclesSumAggregateOutputType = {
    payrollCycleId: number | null
    tenantId: number | null
    totalGrossEarning: Decimal | null
    totalNetEarning: Decimal | null
    transactionId: number | null
  }

  export type PayrollCyclesMinAggregateOutputType = {
    payrollCycleId: number | null
    tenantId: number | null
    initDate: Date | null
    endDate: Date | null
    totalGrossEarning: Decimal | null
    totalNetEarning: Decimal | null
    transactionId: number | null
  }

  export type PayrollCyclesMaxAggregateOutputType = {
    payrollCycleId: number | null
    tenantId: number | null
    initDate: Date | null
    endDate: Date | null
    totalGrossEarning: Decimal | null
    totalNetEarning: Decimal | null
    transactionId: number | null
  }

  export type PayrollCyclesCountAggregateOutputType = {
    payrollCycleId: number
    tenantId: number
    initDate: number
    endDate: number
    totalGrossEarning: number
    totalNetEarning: number
    transactionId: number
    _all: number
  }


  export type PayrollCyclesAvgAggregateInputType = {
    payrollCycleId?: true
    tenantId?: true
    totalGrossEarning?: true
    totalNetEarning?: true
    transactionId?: true
  }

  export type PayrollCyclesSumAggregateInputType = {
    payrollCycleId?: true
    tenantId?: true
    totalGrossEarning?: true
    totalNetEarning?: true
    transactionId?: true
  }

  export type PayrollCyclesMinAggregateInputType = {
    payrollCycleId?: true
    tenantId?: true
    initDate?: true
    endDate?: true
    totalGrossEarning?: true
    totalNetEarning?: true
    transactionId?: true
  }

  export type PayrollCyclesMaxAggregateInputType = {
    payrollCycleId?: true
    tenantId?: true
    initDate?: true
    endDate?: true
    totalGrossEarning?: true
    totalNetEarning?: true
    transactionId?: true
  }

  export type PayrollCyclesCountAggregateInputType = {
    payrollCycleId?: true
    tenantId?: true
    initDate?: true
    endDate?: true
    totalGrossEarning?: true
    totalNetEarning?: true
    transactionId?: true
    _all?: true
  }

  export type PayrollCyclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payrollCycles to aggregate.
     */
    where?: payrollCyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycles to fetch.
     */
    orderBy?: payrollCyclesOrderByWithRelationInput | payrollCyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payrollCyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payrollCycles
    **/
    _count?: true | PayrollCyclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollCyclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollCyclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollCyclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollCyclesMaxAggregateInputType
  }

  export type GetPayrollCyclesAggregateType<T extends PayrollCyclesAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollCycles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollCycles[P]>
      : GetScalarType<T[P], AggregatePayrollCycles[P]>
  }




  export type payrollCyclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payrollCyclesWhereInput
    orderBy?: payrollCyclesOrderByWithAggregationInput | payrollCyclesOrderByWithAggregationInput[]
    by: PayrollCyclesScalarFieldEnum[] | PayrollCyclesScalarFieldEnum
    having?: payrollCyclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollCyclesCountAggregateInputType | true
    _avg?: PayrollCyclesAvgAggregateInputType
    _sum?: PayrollCyclesSumAggregateInputType
    _min?: PayrollCyclesMinAggregateInputType
    _max?: PayrollCyclesMaxAggregateInputType
  }

  export type PayrollCyclesGroupByOutputType = {
    payrollCycleId: number
    tenantId: number
    initDate: Date
    endDate: Date
    totalGrossEarning: Decimal
    totalNetEarning: Decimal
    transactionId: number
    _count: PayrollCyclesCountAggregateOutputType | null
    _avg: PayrollCyclesAvgAggregateOutputType | null
    _sum: PayrollCyclesSumAggregateOutputType | null
    _min: PayrollCyclesMinAggregateOutputType | null
    _max: PayrollCyclesMaxAggregateOutputType | null
  }

  type GetPayrollCyclesGroupByPayload<T extends payrollCyclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollCyclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollCyclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollCyclesGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollCyclesGroupByOutputType[P]>
        }
      >
    >


  export type payrollCyclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payrollCycleId?: boolean
    tenantId?: boolean
    initDate?: boolean
    endDate?: boolean
    totalGrossEarning?: boolean
    totalNetEarning?: boolean
    transactionId?: boolean
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    transactions?: boolean | payrollCycles$transactionsArgs<ExtArgs>
    workRecords?: boolean | payrollCycles$workRecordsArgs<ExtArgs>
    _count?: boolean | PayrollCyclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollCycles"]>



  export type payrollCyclesSelectScalar = {
    payrollCycleId?: boolean
    tenantId?: boolean
    initDate?: boolean
    endDate?: boolean
    totalGrossEarning?: boolean
    totalNetEarning?: boolean
    transactionId?: boolean
  }

  export type payrollCyclesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"payrollCycleId" | "tenantId" | "initDate" | "endDate" | "totalGrossEarning" | "totalNetEarning" | "transactionId", ExtArgs["result"]["payrollCycles"]>
  export type payrollCyclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | tenantsDefaultArgs<ExtArgs>
    transactions?: boolean | payrollCycles$transactionsArgs<ExtArgs>
    workRecords?: boolean | payrollCycles$workRecordsArgs<ExtArgs>
    _count?: boolean | PayrollCyclesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $payrollCyclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payrollCycles"
    objects: {
      tenant: Prisma.$tenantsPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
      workRecords: Prisma.$workRecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      payrollCycleId: number
      tenantId: number
      initDate: Date
      endDate: Date
      totalGrossEarning: Prisma.Decimal
      totalNetEarning: Prisma.Decimal
      transactionId: number
    }, ExtArgs["result"]["payrollCycles"]>
    composites: {}
  }

  type payrollCyclesGetPayload<S extends boolean | null | undefined | payrollCyclesDefaultArgs> = $Result.GetResult<Prisma.$payrollCyclesPayload, S>

  type payrollCyclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payrollCyclesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollCyclesCountAggregateInputType | true
    }

  export interface payrollCyclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payrollCycles'], meta: { name: 'payrollCycles' } }
    /**
     * Find zero or one PayrollCycles that matches the filter.
     * @param {payrollCyclesFindUniqueArgs} args - Arguments to find a PayrollCycles
     * @example
     * // Get one PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payrollCyclesFindUniqueArgs>(args: SelectSubset<T, payrollCyclesFindUniqueArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollCycles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payrollCyclesFindUniqueOrThrowArgs} args - Arguments to find a PayrollCycles
     * @example
     * // Get one PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payrollCyclesFindUniqueOrThrowArgs>(args: SelectSubset<T, payrollCyclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollCycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCyclesFindFirstArgs} args - Arguments to find a PayrollCycles
     * @example
     * // Get one PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payrollCyclesFindFirstArgs>(args?: SelectSubset<T, payrollCyclesFindFirstArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollCycles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCyclesFindFirstOrThrowArgs} args - Arguments to find a PayrollCycles
     * @example
     * // Get one PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payrollCyclesFindFirstOrThrowArgs>(args?: SelectSubset<T, payrollCyclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollCycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCyclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.findMany()
     * 
     * // Get first 10 PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.findMany({ take: 10 })
     * 
     * // Only select the `payrollCycleId`
     * const payrollCyclesWithPayrollCycleIdOnly = await prisma.payrollCycles.findMany({ select: { payrollCycleId: true } })
     * 
     */
    findMany<T extends payrollCyclesFindManyArgs>(args?: SelectSubset<T, payrollCyclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollCycles.
     * @param {payrollCyclesCreateArgs} args - Arguments to create a PayrollCycles.
     * @example
     * // Create one PayrollCycles
     * const PayrollCycles = await prisma.payrollCycles.create({
     *   data: {
     *     // ... data to create a PayrollCycles
     *   }
     * })
     * 
     */
    create<T extends payrollCyclesCreateArgs>(args: SelectSubset<T, payrollCyclesCreateArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollCycles.
     * @param {payrollCyclesCreateManyArgs} args - Arguments to create many PayrollCycles.
     * @example
     * // Create many PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payrollCyclesCreateManyArgs>(args?: SelectSubset<T, payrollCyclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PayrollCycles.
     * @param {payrollCyclesDeleteArgs} args - Arguments to delete one PayrollCycles.
     * @example
     * // Delete one PayrollCycles
     * const PayrollCycles = await prisma.payrollCycles.delete({
     *   where: {
     *     // ... filter to delete one PayrollCycles
     *   }
     * })
     * 
     */
    delete<T extends payrollCyclesDeleteArgs>(args: SelectSubset<T, payrollCyclesDeleteArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollCycles.
     * @param {payrollCyclesUpdateArgs} args - Arguments to update one PayrollCycles.
     * @example
     * // Update one PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payrollCyclesUpdateArgs>(args: SelectSubset<T, payrollCyclesUpdateArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollCycles.
     * @param {payrollCyclesDeleteManyArgs} args - Arguments to filter PayrollCycles to delete.
     * @example
     * // Delete a few PayrollCycles
     * const { count } = await prisma.payrollCycles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payrollCyclesDeleteManyArgs>(args?: SelectSubset<T, payrollCyclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCyclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payrollCyclesUpdateManyArgs>(args: SelectSubset<T, payrollCyclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PayrollCycles.
     * @param {payrollCyclesUpsertArgs} args - Arguments to update or create a PayrollCycles.
     * @example
     * // Update or create a PayrollCycles
     * const payrollCycles = await prisma.payrollCycles.upsert({
     *   create: {
     *     // ... data to create a PayrollCycles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollCycles we want to update
     *   }
     * })
     */
    upsert<T extends payrollCyclesUpsertArgs>(args: SelectSubset<T, payrollCyclesUpsertArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCyclesCountArgs} args - Arguments to filter PayrollCycles to count.
     * @example
     * // Count the number of PayrollCycles
     * const count = await prisma.payrollCycles.count({
     *   where: {
     *     // ... the filter for the PayrollCycles we want to count
     *   }
     * })
    **/
    count<T extends payrollCyclesCountArgs>(
      args?: Subset<T, payrollCyclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollCyclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollCyclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PayrollCyclesAggregateArgs>(args: Subset<T, PayrollCyclesAggregateArgs>): Prisma.PrismaPromise<GetPayrollCyclesAggregateType<T>>

    /**
     * Group by PayrollCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payrollCyclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends payrollCyclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payrollCyclesGroupByArgs['orderBy'] }
        : { orderBy?: payrollCyclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, payrollCyclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollCyclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payrollCycles model
   */
  readonly fields: payrollCyclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payrollCycles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payrollCyclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends tenantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tenantsDefaultArgs<ExtArgs>>): Prisma__tenantsClient<$Result.GetResult<Prisma.$tenantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends payrollCycles$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, payrollCycles$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workRecords<T extends payrollCycles$workRecordsArgs<ExtArgs> = {}>(args?: Subset<T, payrollCycles$workRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the payrollCycles model
   */
  interface payrollCyclesFieldRefs {
    readonly payrollCycleId: FieldRef<"payrollCycles", 'Int'>
    readonly tenantId: FieldRef<"payrollCycles", 'Int'>
    readonly initDate: FieldRef<"payrollCycles", 'DateTime'>
    readonly endDate: FieldRef<"payrollCycles", 'DateTime'>
    readonly totalGrossEarning: FieldRef<"payrollCycles", 'Decimal'>
    readonly totalNetEarning: FieldRef<"payrollCycles", 'Decimal'>
    readonly transactionId: FieldRef<"payrollCycles", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * payrollCycles findUnique
   */
  export type payrollCyclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * Filter, which payrollCycles to fetch.
     */
    where: payrollCyclesWhereUniqueInput
  }

  /**
   * payrollCycles findUniqueOrThrow
   */
  export type payrollCyclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * Filter, which payrollCycles to fetch.
     */
    where: payrollCyclesWhereUniqueInput
  }

  /**
   * payrollCycles findFirst
   */
  export type payrollCyclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * Filter, which payrollCycles to fetch.
     */
    where?: payrollCyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycles to fetch.
     */
    orderBy?: payrollCyclesOrderByWithRelationInput | payrollCyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payrollCycles.
     */
    cursor?: payrollCyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payrollCycles.
     */
    distinct?: PayrollCyclesScalarFieldEnum | PayrollCyclesScalarFieldEnum[]
  }

  /**
   * payrollCycles findFirstOrThrow
   */
  export type payrollCyclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * Filter, which payrollCycles to fetch.
     */
    where?: payrollCyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycles to fetch.
     */
    orderBy?: payrollCyclesOrderByWithRelationInput | payrollCyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payrollCycles.
     */
    cursor?: payrollCyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payrollCycles.
     */
    distinct?: PayrollCyclesScalarFieldEnum | PayrollCyclesScalarFieldEnum[]
  }

  /**
   * payrollCycles findMany
   */
  export type payrollCyclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * Filter, which payrollCycles to fetch.
     */
    where?: payrollCyclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payrollCycles to fetch.
     */
    orderBy?: payrollCyclesOrderByWithRelationInput | payrollCyclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payrollCycles.
     */
    cursor?: payrollCyclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payrollCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payrollCycles.
     */
    skip?: number
    distinct?: PayrollCyclesScalarFieldEnum | PayrollCyclesScalarFieldEnum[]
  }

  /**
   * payrollCycles create
   */
  export type payrollCyclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * The data needed to create a payrollCycles.
     */
    data: XOR<payrollCyclesCreateInput, payrollCyclesUncheckedCreateInput>
  }

  /**
   * payrollCycles createMany
   */
  export type payrollCyclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payrollCycles.
     */
    data: payrollCyclesCreateManyInput | payrollCyclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payrollCycles update
   */
  export type payrollCyclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * The data needed to update a payrollCycles.
     */
    data: XOR<payrollCyclesUpdateInput, payrollCyclesUncheckedUpdateInput>
    /**
     * Choose, which payrollCycles to update.
     */
    where: payrollCyclesWhereUniqueInput
  }

  /**
   * payrollCycles updateMany
   */
  export type payrollCyclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payrollCycles.
     */
    data: XOR<payrollCyclesUpdateManyMutationInput, payrollCyclesUncheckedUpdateManyInput>
    /**
     * Filter which payrollCycles to update
     */
    where?: payrollCyclesWhereInput
    /**
     * Limit how many payrollCycles to update.
     */
    limit?: number
  }

  /**
   * payrollCycles upsert
   */
  export type payrollCyclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * The filter to search for the payrollCycles to update in case it exists.
     */
    where: payrollCyclesWhereUniqueInput
    /**
     * In case the payrollCycles found by the `where` argument doesn't exist, create a new payrollCycles with this data.
     */
    create: XOR<payrollCyclesCreateInput, payrollCyclesUncheckedCreateInput>
    /**
     * In case the payrollCycles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payrollCyclesUpdateInput, payrollCyclesUncheckedUpdateInput>
  }

  /**
   * payrollCycles delete
   */
  export type payrollCyclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
    /**
     * Filter which payrollCycles to delete.
     */
    where: payrollCyclesWhereUniqueInput
  }

  /**
   * payrollCycles deleteMany
   */
  export type payrollCyclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payrollCycles to delete
     */
    where?: payrollCyclesWhereInput
    /**
     * Limit how many payrollCycles to delete.
     */
    limit?: number
  }

  /**
   * payrollCycles.transactions
   */
  export type payrollCycles$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * payrollCycles.workRecords
   */
  export type payrollCycles$workRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    where?: workRecordsWhereInput
    orderBy?: workRecordsOrderByWithRelationInput | workRecordsOrderByWithRelationInput[]
    cursor?: workRecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkRecordsScalarFieldEnum | WorkRecordsScalarFieldEnum[]
  }

  /**
   * payrollCycles without action
   */
  export type payrollCyclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payrollCycles
     */
    select?: payrollCyclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payrollCycles
     */
    omit?: payrollCyclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payrollCyclesInclude<ExtArgs> | null
  }


  /**
   * Model workRecords
   */

  export type AggregateWorkRecords = {
    _count: WorkRecordsCountAggregateOutputType | null
    _avg: WorkRecordsAvgAggregateOutputType | null
    _sum: WorkRecordsSumAggregateOutputType | null
    _min: WorkRecordsMinAggregateOutputType | null
    _max: WorkRecordsMaxAggregateOutputType | null
  }

  export type WorkRecordsAvgAggregateOutputType = {
    workRecordId: number | null
    payrollCycleId: number | null
    userId: number | null
    totalHoursWorked: Decimal | null
    grossEarning: Decimal | null
    netEarning: Decimal | null
  }

  export type WorkRecordsSumAggregateOutputType = {
    workRecordId: number | null
    payrollCycleId: number | null
    userId: number | null
    totalHoursWorked: Decimal | null
    grossEarning: Decimal | null
    netEarning: Decimal | null
  }

  export type WorkRecordsMinAggregateOutputType = {
    workRecordId: number | null
    payrollCycleId: number | null
    userId: number | null
    startTime: Date | null
    endTime: Date | null
    totalHoursWorked: Decimal | null
    grossEarning: Decimal | null
    netEarning: Decimal | null
  }

  export type WorkRecordsMaxAggregateOutputType = {
    workRecordId: number | null
    payrollCycleId: number | null
    userId: number | null
    startTime: Date | null
    endTime: Date | null
    totalHoursWorked: Decimal | null
    grossEarning: Decimal | null
    netEarning: Decimal | null
  }

  export type WorkRecordsCountAggregateOutputType = {
    workRecordId: number
    payrollCycleId: number
    userId: number
    startTime: number
    endTime: number
    totalHoursWorked: number
    grossEarning: number
    netEarning: number
    _all: number
  }


  export type WorkRecordsAvgAggregateInputType = {
    workRecordId?: true
    payrollCycleId?: true
    userId?: true
    totalHoursWorked?: true
    grossEarning?: true
    netEarning?: true
  }

  export type WorkRecordsSumAggregateInputType = {
    workRecordId?: true
    payrollCycleId?: true
    userId?: true
    totalHoursWorked?: true
    grossEarning?: true
    netEarning?: true
  }

  export type WorkRecordsMinAggregateInputType = {
    workRecordId?: true
    payrollCycleId?: true
    userId?: true
    startTime?: true
    endTime?: true
    totalHoursWorked?: true
    grossEarning?: true
    netEarning?: true
  }

  export type WorkRecordsMaxAggregateInputType = {
    workRecordId?: true
    payrollCycleId?: true
    userId?: true
    startTime?: true
    endTime?: true
    totalHoursWorked?: true
    grossEarning?: true
    netEarning?: true
  }

  export type WorkRecordsCountAggregateInputType = {
    workRecordId?: true
    payrollCycleId?: true
    userId?: true
    startTime?: true
    endTime?: true
    totalHoursWorked?: true
    grossEarning?: true
    netEarning?: true
    _all?: true
  }

  export type WorkRecordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workRecords to aggregate.
     */
    where?: workRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workRecords to fetch.
     */
    orderBy?: workRecordsOrderByWithRelationInput | workRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workRecords
    **/
    _count?: true | WorkRecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkRecordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkRecordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkRecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkRecordsMaxAggregateInputType
  }

  export type GetWorkRecordsAggregateType<T extends WorkRecordsAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkRecords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkRecords[P]>
      : GetScalarType<T[P], AggregateWorkRecords[P]>
  }




  export type workRecordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workRecordsWhereInput
    orderBy?: workRecordsOrderByWithAggregationInput | workRecordsOrderByWithAggregationInput[]
    by: WorkRecordsScalarFieldEnum[] | WorkRecordsScalarFieldEnum
    having?: workRecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkRecordsCountAggregateInputType | true
    _avg?: WorkRecordsAvgAggregateInputType
    _sum?: WorkRecordsSumAggregateInputType
    _min?: WorkRecordsMinAggregateInputType
    _max?: WorkRecordsMaxAggregateInputType
  }

  export type WorkRecordsGroupByOutputType = {
    workRecordId: number
    payrollCycleId: number
    userId: number
    startTime: Date | null
    endTime: Date | null
    totalHoursWorked: Decimal
    grossEarning: Decimal
    netEarning: Decimal
    _count: WorkRecordsCountAggregateOutputType | null
    _avg: WorkRecordsAvgAggregateOutputType | null
    _sum: WorkRecordsSumAggregateOutputType | null
    _min: WorkRecordsMinAggregateOutputType | null
    _max: WorkRecordsMaxAggregateOutputType | null
  }

  type GetWorkRecordsGroupByPayload<T extends workRecordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkRecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkRecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkRecordsGroupByOutputType[P]>
            : GetScalarType<T[P], WorkRecordsGroupByOutputType[P]>
        }
      >
    >


  export type workRecordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workRecordId?: boolean
    payrollCycleId?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalHoursWorked?: boolean
    grossEarning?: boolean
    netEarning?: boolean
    payrollCycle?: boolean | payrollCyclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workRecords"]>



  export type workRecordsSelectScalar = {
    workRecordId?: boolean
    payrollCycleId?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalHoursWorked?: boolean
    grossEarning?: boolean
    netEarning?: boolean
  }

  export type workRecordsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workRecordId" | "payrollCycleId" | "userId" | "startTime" | "endTime" | "totalHoursWorked" | "grossEarning" | "netEarning", ExtArgs["result"]["workRecords"]>
  export type workRecordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payrollCycle?: boolean | payrollCyclesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $workRecordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workRecords"
    objects: {
      payrollCycle: Prisma.$payrollCyclesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workRecordId: number
      payrollCycleId: number
      userId: number
      startTime: Date | null
      endTime: Date | null
      totalHoursWorked: Prisma.Decimal
      grossEarning: Prisma.Decimal
      netEarning: Prisma.Decimal
    }, ExtArgs["result"]["workRecords"]>
    composites: {}
  }

  type workRecordsGetPayload<S extends boolean | null | undefined | workRecordsDefaultArgs> = $Result.GetResult<Prisma.$workRecordsPayload, S>

  type workRecordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workRecordsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkRecordsCountAggregateInputType | true
    }

  export interface workRecordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workRecords'], meta: { name: 'workRecords' } }
    /**
     * Find zero or one WorkRecords that matches the filter.
     * @param {workRecordsFindUniqueArgs} args - Arguments to find a WorkRecords
     * @example
     * // Get one WorkRecords
     * const workRecords = await prisma.workRecords.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workRecordsFindUniqueArgs>(args: SelectSubset<T, workRecordsFindUniqueArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkRecords that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workRecordsFindUniqueOrThrowArgs} args - Arguments to find a WorkRecords
     * @example
     * // Get one WorkRecords
     * const workRecords = await prisma.workRecords.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workRecordsFindUniqueOrThrowArgs>(args: SelectSubset<T, workRecordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workRecordsFindFirstArgs} args - Arguments to find a WorkRecords
     * @example
     * // Get one WorkRecords
     * const workRecords = await prisma.workRecords.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workRecordsFindFirstArgs>(args?: SelectSubset<T, workRecordsFindFirstArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkRecords that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workRecordsFindFirstOrThrowArgs} args - Arguments to find a WorkRecords
     * @example
     * // Get one WorkRecords
     * const workRecords = await prisma.workRecords.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workRecordsFindFirstOrThrowArgs>(args?: SelectSubset<T, workRecordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workRecordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkRecords
     * const workRecords = await prisma.workRecords.findMany()
     * 
     * // Get first 10 WorkRecords
     * const workRecords = await prisma.workRecords.findMany({ take: 10 })
     * 
     * // Only select the `workRecordId`
     * const workRecordsWithWorkRecordIdOnly = await prisma.workRecords.findMany({ select: { workRecordId: true } })
     * 
     */
    findMany<T extends workRecordsFindManyArgs>(args?: SelectSubset<T, workRecordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkRecords.
     * @param {workRecordsCreateArgs} args - Arguments to create a WorkRecords.
     * @example
     * // Create one WorkRecords
     * const WorkRecords = await prisma.workRecords.create({
     *   data: {
     *     // ... data to create a WorkRecords
     *   }
     * })
     * 
     */
    create<T extends workRecordsCreateArgs>(args: SelectSubset<T, workRecordsCreateArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkRecords.
     * @param {workRecordsCreateManyArgs} args - Arguments to create many WorkRecords.
     * @example
     * // Create many WorkRecords
     * const workRecords = await prisma.workRecords.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workRecordsCreateManyArgs>(args?: SelectSubset<T, workRecordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkRecords.
     * @param {workRecordsDeleteArgs} args - Arguments to delete one WorkRecords.
     * @example
     * // Delete one WorkRecords
     * const WorkRecords = await prisma.workRecords.delete({
     *   where: {
     *     // ... filter to delete one WorkRecords
     *   }
     * })
     * 
     */
    delete<T extends workRecordsDeleteArgs>(args: SelectSubset<T, workRecordsDeleteArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkRecords.
     * @param {workRecordsUpdateArgs} args - Arguments to update one WorkRecords.
     * @example
     * // Update one WorkRecords
     * const workRecords = await prisma.workRecords.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workRecordsUpdateArgs>(args: SelectSubset<T, workRecordsUpdateArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkRecords.
     * @param {workRecordsDeleteManyArgs} args - Arguments to filter WorkRecords to delete.
     * @example
     * // Delete a few WorkRecords
     * const { count } = await prisma.workRecords.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workRecordsDeleteManyArgs>(args?: SelectSubset<T, workRecordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workRecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkRecords
     * const workRecords = await prisma.workRecords.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workRecordsUpdateManyArgs>(args: SelectSubset<T, workRecordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkRecords.
     * @param {workRecordsUpsertArgs} args - Arguments to update or create a WorkRecords.
     * @example
     * // Update or create a WorkRecords
     * const workRecords = await prisma.workRecords.upsert({
     *   create: {
     *     // ... data to create a WorkRecords
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkRecords we want to update
     *   }
     * })
     */
    upsert<T extends workRecordsUpsertArgs>(args: SelectSubset<T, workRecordsUpsertArgs<ExtArgs>>): Prisma__workRecordsClient<$Result.GetResult<Prisma.$workRecordsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workRecordsCountArgs} args - Arguments to filter WorkRecords to count.
     * @example
     * // Count the number of WorkRecords
     * const count = await prisma.workRecords.count({
     *   where: {
     *     // ... the filter for the WorkRecords we want to count
     *   }
     * })
    **/
    count<T extends workRecordsCountArgs>(
      args?: Subset<T, workRecordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkRecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkRecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkRecordsAggregateArgs>(args: Subset<T, WorkRecordsAggregateArgs>): Prisma.PrismaPromise<GetWorkRecordsAggregateType<T>>

    /**
     * Group by WorkRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workRecordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workRecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workRecordsGroupByArgs['orderBy'] }
        : { orderBy?: workRecordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workRecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkRecordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workRecords model
   */
  readonly fields: workRecordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workRecords.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workRecordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payrollCycle<T extends payrollCyclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, payrollCyclesDefaultArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workRecords model
   */
  interface workRecordsFieldRefs {
    readonly workRecordId: FieldRef<"workRecords", 'Int'>
    readonly payrollCycleId: FieldRef<"workRecords", 'Int'>
    readonly userId: FieldRef<"workRecords", 'Int'>
    readonly startTime: FieldRef<"workRecords", 'DateTime'>
    readonly endTime: FieldRef<"workRecords", 'DateTime'>
    readonly totalHoursWorked: FieldRef<"workRecords", 'Decimal'>
    readonly grossEarning: FieldRef<"workRecords", 'Decimal'>
    readonly netEarning: FieldRef<"workRecords", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * workRecords findUnique
   */
  export type workRecordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * Filter, which workRecords to fetch.
     */
    where: workRecordsWhereUniqueInput
  }

  /**
   * workRecords findUniqueOrThrow
   */
  export type workRecordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * Filter, which workRecords to fetch.
     */
    where: workRecordsWhereUniqueInput
  }

  /**
   * workRecords findFirst
   */
  export type workRecordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * Filter, which workRecords to fetch.
     */
    where?: workRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workRecords to fetch.
     */
    orderBy?: workRecordsOrderByWithRelationInput | workRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workRecords.
     */
    cursor?: workRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workRecords.
     */
    distinct?: WorkRecordsScalarFieldEnum | WorkRecordsScalarFieldEnum[]
  }

  /**
   * workRecords findFirstOrThrow
   */
  export type workRecordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * Filter, which workRecords to fetch.
     */
    where?: workRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workRecords to fetch.
     */
    orderBy?: workRecordsOrderByWithRelationInput | workRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workRecords.
     */
    cursor?: workRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workRecords.
     */
    distinct?: WorkRecordsScalarFieldEnum | WorkRecordsScalarFieldEnum[]
  }

  /**
   * workRecords findMany
   */
  export type workRecordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * Filter, which workRecords to fetch.
     */
    where?: workRecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workRecords to fetch.
     */
    orderBy?: workRecordsOrderByWithRelationInput | workRecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workRecords.
     */
    cursor?: workRecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workRecords.
     */
    skip?: number
    distinct?: WorkRecordsScalarFieldEnum | WorkRecordsScalarFieldEnum[]
  }

  /**
   * workRecords create
   */
  export type workRecordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * The data needed to create a workRecords.
     */
    data: XOR<workRecordsCreateInput, workRecordsUncheckedCreateInput>
  }

  /**
   * workRecords createMany
   */
  export type workRecordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workRecords.
     */
    data: workRecordsCreateManyInput | workRecordsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workRecords update
   */
  export type workRecordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * The data needed to update a workRecords.
     */
    data: XOR<workRecordsUpdateInput, workRecordsUncheckedUpdateInput>
    /**
     * Choose, which workRecords to update.
     */
    where: workRecordsWhereUniqueInput
  }

  /**
   * workRecords updateMany
   */
  export type workRecordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workRecords.
     */
    data: XOR<workRecordsUpdateManyMutationInput, workRecordsUncheckedUpdateManyInput>
    /**
     * Filter which workRecords to update
     */
    where?: workRecordsWhereInput
    /**
     * Limit how many workRecords to update.
     */
    limit?: number
  }

  /**
   * workRecords upsert
   */
  export type workRecordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * The filter to search for the workRecords to update in case it exists.
     */
    where: workRecordsWhereUniqueInput
    /**
     * In case the workRecords found by the `where` argument doesn't exist, create a new workRecords with this data.
     */
    create: XOR<workRecordsCreateInput, workRecordsUncheckedCreateInput>
    /**
     * In case the workRecords was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workRecordsUpdateInput, workRecordsUncheckedUpdateInput>
  }

  /**
   * workRecords delete
   */
  export type workRecordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
    /**
     * Filter which workRecords to delete.
     */
    where: workRecordsWhereUniqueInput
  }

  /**
   * workRecords deleteMany
   */
  export type workRecordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workRecords to delete
     */
    where?: workRecordsWhereInput
    /**
     * Limit how many workRecords to delete.
     */
    limit?: number
  }

  /**
   * workRecords without action
   */
  export type workRecordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workRecords
     */
    select?: workRecordsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workRecords
     */
    omit?: workRecordsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workRecordsInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    transactionId: number | null
    accountId: number | null
    requestedAmount: Decimal | null
    currencyId: number | null
    bankAccountId: number | null
    transactionStatusId: number | null
    payrollCycleId: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    transactionId: number | null
    accountId: number | null
    requestedAmount: Decimal | null
    currencyId: number | null
    bankAccountId: number | null
    transactionStatusId: number | null
    payrollCycleId: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    transactionId: number | null
    accountId: number | null
    requestedAmount: Decimal | null
    currencyId: number | null
    bankAccountId: number | null
    transactionStatusId: number | null
    creationDate: Date | null
    payrollCycleId: number | null
  }

  export type TransactionsMaxAggregateOutputType = {
    transactionId: number | null
    accountId: number | null
    requestedAmount: Decimal | null
    currencyId: number | null
    bankAccountId: number | null
    transactionStatusId: number | null
    creationDate: Date | null
    payrollCycleId: number | null
  }

  export type TransactionsCountAggregateOutputType = {
    transactionId: number
    accountId: number
    requestedAmount: number
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate: number
    payrollCycleId: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    transactionId?: true
    accountId?: true
    requestedAmount?: true
    currencyId?: true
    bankAccountId?: true
    transactionStatusId?: true
    payrollCycleId?: true
  }

  export type TransactionsSumAggregateInputType = {
    transactionId?: true
    accountId?: true
    requestedAmount?: true
    currencyId?: true
    bankAccountId?: true
    transactionStatusId?: true
    payrollCycleId?: true
  }

  export type TransactionsMinAggregateInputType = {
    transactionId?: true
    accountId?: true
    requestedAmount?: true
    currencyId?: true
    bankAccountId?: true
    transactionStatusId?: true
    creationDate?: true
    payrollCycleId?: true
  }

  export type TransactionsMaxAggregateInputType = {
    transactionId?: true
    accountId?: true
    requestedAmount?: true
    currencyId?: true
    bankAccountId?: true
    transactionStatusId?: true
    creationDate?: true
    payrollCycleId?: true
  }

  export type TransactionsCountAggregateInputType = {
    transactionId?: true
    accountId?: true
    requestedAmount?: true
    currencyId?: true
    bankAccountId?: true
    transactionStatusId?: true
    creationDate?: true
    payrollCycleId?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    transactionId: number
    accountId: number
    requestedAmount: Decimal
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate: Date
    payrollCycleId: number
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    accountId?: boolean
    requestedAmount?: boolean
    currencyId?: boolean
    bankAccountId?: boolean
    transactionStatusId?: boolean
    creationDate?: boolean
    payrollCycleId?: boolean
    account?: boolean | accountsDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
    bankAccount?: boolean | bankAccountsDefaultArgs<ExtArgs>
    transactionStatus?: boolean | transactionStatusDefaultArgs<ExtArgs>
    payrollCycle?: boolean | payrollCyclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>



  export type transactionsSelectScalar = {
    transactionId?: boolean
    accountId?: boolean
    requestedAmount?: boolean
    currencyId?: boolean
    bankAccountId?: boolean
    transactionStatusId?: boolean
    creationDate?: boolean
    payrollCycleId?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transactionId" | "accountId" | "requestedAmount" | "currencyId" | "bankAccountId" | "transactionStatusId" | "creationDate" | "payrollCycleId", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountsDefaultArgs<ExtArgs>
    currency?: boolean | currenciesDefaultArgs<ExtArgs>
    bankAccount?: boolean | bankAccountsDefaultArgs<ExtArgs>
    transactionStatus?: boolean | transactionStatusDefaultArgs<ExtArgs>
    payrollCycle?: boolean | payrollCyclesDefaultArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      account: Prisma.$accountsPayload<ExtArgs>
      currency: Prisma.$currenciesPayload<ExtArgs>
      bankAccount: Prisma.$bankAccountsPayload<ExtArgs>
      transactionStatus: Prisma.$transactionStatusPayload<ExtArgs>
      payrollCycle: Prisma.$payrollCyclesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      transactionId: number
      accountId: number
      requestedAmount: Prisma.Decimal
      currencyId: number
      bankAccountId: number
      transactionStatusId: number
      creationDate: Date
      payrollCycleId: number
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `transactionId`
     * const transactionsWithTransactionIdOnly = await prisma.transactions.findMany({ select: { transactionId: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    currency<T extends currenciesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, currenciesDefaultArgs<ExtArgs>>): Prisma__currenciesClient<$Result.GetResult<Prisma.$currenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bankAccount<T extends bankAccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bankAccountsDefaultArgs<ExtArgs>>): Prisma__bankAccountsClient<$Result.GetResult<Prisma.$bankAccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactionStatus<T extends transactionStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionStatusDefaultArgs<ExtArgs>>): Prisma__transactionStatusClient<$Result.GetResult<Prisma.$transactionStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payrollCycle<T extends payrollCyclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, payrollCyclesDefaultArgs<ExtArgs>>): Prisma__payrollCyclesClient<$Result.GetResult<Prisma.$payrollCyclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly transactionId: FieldRef<"transactions", 'Int'>
    readonly accountId: FieldRef<"transactions", 'Int'>
    readonly requestedAmount: FieldRef<"transactions", 'Decimal'>
    readonly currencyId: FieldRef<"transactions", 'Int'>
    readonly bankAccountId: FieldRef<"transactions", 'Int'>
    readonly transactionStatusId: FieldRef<"transactions", 'Int'>
    readonly creationDate: FieldRef<"transactions", 'DateTime'>
    readonly payrollCycleId: FieldRef<"transactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TenantsScalarFieldEnum: {
    tenantId: 'tenantId',
    companyName: 'companyName',
    phoneNumber: 'phoneNumber',
    address: 'address',
    employees: 'employees',
    creationDate: 'creationDate'
  };

  export type TenantsScalarFieldEnum = (typeof TenantsScalarFieldEnum)[keyof typeof TenantsScalarFieldEnum]


  export const DocumentTypesScalarFieldEnum: {
    documentTypeId: 'documentTypeId',
    name: 'name',
    code: 'code',
    creationDate: 'creationDate'
  };

  export type DocumentTypesScalarFieldEnum = (typeof DocumentTypesScalarFieldEnum)[keyof typeof DocumentTypesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    documentNumber: 'documentNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    activated: 'activated',
    tenantId: 'tenantId',
    documentTypeId: 'documentTypeId',
    wageRate: 'wageRate',
    grossCompensation: 'grossCompensation',
    netCompensation: 'netCompensation',
    creationDate: 'creationDate'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BankAccountTypesScalarFieldEnum: {
    bankAccountTypeId: 'bankAccountTypeId',
    name: 'name',
    creationDate: 'creationDate'
  };

  export type BankAccountTypesScalarFieldEnum = (typeof BankAccountTypesScalarFieldEnum)[keyof typeof BankAccountTypesScalarFieldEnum]


  export const BanksScalarFieldEnum: {
    bankId: 'bankId',
    code: 'code',
    name: 'name',
    creationDate: 'creationDate'
  };

  export type BanksScalarFieldEnum = (typeof BanksScalarFieldEnum)[keyof typeof BanksScalarFieldEnum]


  export const BankAccountsScalarFieldEnum: {
    bankAccountId: 'bankAccountId',
    number: 'number',
    bankAccountTypeId: 'bankAccountTypeId',
    creationDate: 'creationDate',
    userId: 'userId',
    bankId: 'bankId'
  };

  export type BankAccountsScalarFieldEnum = (typeof BankAccountsScalarFieldEnum)[keyof typeof BankAccountsScalarFieldEnum]


  export const TransactionStatusScalarFieldEnum: {
    transactionStatusId: 'transactionStatusId',
    name: 'name',
    creationDate: 'creationDate'
  };

  export type TransactionStatusScalarFieldEnum = (typeof TransactionStatusScalarFieldEnum)[keyof typeof TransactionStatusScalarFieldEnum]


  export const CurrenciesScalarFieldEnum: {
    currencyId: 'currencyId',
    name: 'name',
    creationDate: 'creationDate'
  };

  export type CurrenciesScalarFieldEnum = (typeof CurrenciesScalarFieldEnum)[keyof typeof CurrenciesScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    accountId: 'accountId',
    name: 'name',
    token: 'token',
    privateKey: 'privateKey',
    creationDate: 'creationDate'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const PayrollCycleStatusScalarFieldEnum: {
    payrollCycleStatusId: 'payrollCycleStatusId',
    name: 'name',
    creationDate: 'creationDate'
  };

  export type PayrollCycleStatusScalarFieldEnum = (typeof PayrollCycleStatusScalarFieldEnum)[keyof typeof PayrollCycleStatusScalarFieldEnum]


  export const PayrollCyclesScalarFieldEnum: {
    payrollCycleId: 'payrollCycleId',
    tenantId: 'tenantId',
    initDate: 'initDate',
    endDate: 'endDate',
    totalGrossEarning: 'totalGrossEarning',
    totalNetEarning: 'totalNetEarning',
    transactionId: 'transactionId'
  };

  export type PayrollCyclesScalarFieldEnum = (typeof PayrollCyclesScalarFieldEnum)[keyof typeof PayrollCyclesScalarFieldEnum]


  export const WorkRecordsScalarFieldEnum: {
    workRecordId: 'workRecordId',
    payrollCycleId: 'payrollCycleId',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    totalHoursWorked: 'totalHoursWorked',
    grossEarning: 'grossEarning',
    netEarning: 'netEarning'
  };

  export type WorkRecordsScalarFieldEnum = (typeof WorkRecordsScalarFieldEnum)[keyof typeof WorkRecordsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    transactionId: 'transactionId',
    accountId: 'accountId',
    requestedAmount: 'requestedAmount',
    currencyId: 'currencyId',
    bankAccountId: 'bankAccountId',
    transactionStatusId: 'transactionStatusId',
    creationDate: 'creationDate',
    payrollCycleId: 'payrollCycleId'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const tenantsOrderByRelevanceFieldEnum: {
    companyName: 'companyName',
    phoneNumber: 'phoneNumber',
    address: 'address'
  };

  export type tenantsOrderByRelevanceFieldEnum = (typeof tenantsOrderByRelevanceFieldEnum)[keyof typeof tenantsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const documentTypesOrderByRelevanceFieldEnum: {
    name: 'name',
    code: 'code'
  };

  export type documentTypesOrderByRelevanceFieldEnum = (typeof documentTypesOrderByRelevanceFieldEnum)[keyof typeof documentTypesOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    documentNumber: 'documentNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const bankAccountTypesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type bankAccountTypesOrderByRelevanceFieldEnum = (typeof bankAccountTypesOrderByRelevanceFieldEnum)[keyof typeof bankAccountTypesOrderByRelevanceFieldEnum]


  export const banksOrderByRelevanceFieldEnum: {
    code: 'code',
    name: 'name'
  };

  export type banksOrderByRelevanceFieldEnum = (typeof banksOrderByRelevanceFieldEnum)[keyof typeof banksOrderByRelevanceFieldEnum]


  export const bankAccountsOrderByRelevanceFieldEnum: {
    number: 'number'
  };

  export type bankAccountsOrderByRelevanceFieldEnum = (typeof bankAccountsOrderByRelevanceFieldEnum)[keyof typeof bankAccountsOrderByRelevanceFieldEnum]


  export const transactionStatusOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type transactionStatusOrderByRelevanceFieldEnum = (typeof transactionStatusOrderByRelevanceFieldEnum)[keyof typeof transactionStatusOrderByRelevanceFieldEnum]


  export const currenciesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type currenciesOrderByRelevanceFieldEnum = (typeof currenciesOrderByRelevanceFieldEnum)[keyof typeof currenciesOrderByRelevanceFieldEnum]


  export const accountsOrderByRelevanceFieldEnum: {
    name: 'name',
    token: 'token',
    privateKey: 'privateKey'
  };

  export type accountsOrderByRelevanceFieldEnum = (typeof accountsOrderByRelevanceFieldEnum)[keyof typeof accountsOrderByRelevanceFieldEnum]


  export const payrollCycleStatusOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type payrollCycleStatusOrderByRelevanceFieldEnum = (typeof payrollCycleStatusOrderByRelevanceFieldEnum)[keyof typeof payrollCycleStatusOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tenantsWhereInput = {
    AND?: tenantsWhereInput | tenantsWhereInput[]
    OR?: tenantsWhereInput[]
    NOT?: tenantsWhereInput | tenantsWhereInput[]
    tenantId?: IntFilter<"tenants"> | number
    companyName?: StringFilter<"tenants"> | string
    phoneNumber?: StringFilter<"tenants"> | string
    address?: StringFilter<"tenants"> | string
    employees?: IntFilter<"tenants"> | number
    creationDate?: DateTimeFilter<"tenants"> | Date | string
    Users?: UsersListRelationFilter
    payrollCycles?: PayrollCyclesListRelationFilter
  }

  export type tenantsOrderByWithRelationInput = {
    tenantId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    employees?: SortOrder
    creationDate?: SortOrder
    Users?: usersOrderByRelationAggregateInput
    payrollCycles?: payrollCyclesOrderByRelationAggregateInput
    _relevance?: tenantsOrderByRelevanceInput
  }

  export type tenantsWhereUniqueInput = Prisma.AtLeast<{
    tenantId?: number
    companyName?: string
    AND?: tenantsWhereInput | tenantsWhereInput[]
    OR?: tenantsWhereInput[]
    NOT?: tenantsWhereInput | tenantsWhereInput[]
    phoneNumber?: StringFilter<"tenants"> | string
    address?: StringFilter<"tenants"> | string
    employees?: IntFilter<"tenants"> | number
    creationDate?: DateTimeFilter<"tenants"> | Date | string
    Users?: UsersListRelationFilter
    payrollCycles?: PayrollCyclesListRelationFilter
  }, "tenantId" | "companyName">

  export type tenantsOrderByWithAggregationInput = {
    tenantId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    employees?: SortOrder
    creationDate?: SortOrder
    _count?: tenantsCountOrderByAggregateInput
    _avg?: tenantsAvgOrderByAggregateInput
    _max?: tenantsMaxOrderByAggregateInput
    _min?: tenantsMinOrderByAggregateInput
    _sum?: tenantsSumOrderByAggregateInput
  }

  export type tenantsScalarWhereWithAggregatesInput = {
    AND?: tenantsScalarWhereWithAggregatesInput | tenantsScalarWhereWithAggregatesInput[]
    OR?: tenantsScalarWhereWithAggregatesInput[]
    NOT?: tenantsScalarWhereWithAggregatesInput | tenantsScalarWhereWithAggregatesInput[]
    tenantId?: IntWithAggregatesFilter<"tenants"> | number
    companyName?: StringWithAggregatesFilter<"tenants"> | string
    phoneNumber?: StringWithAggregatesFilter<"tenants"> | string
    address?: StringWithAggregatesFilter<"tenants"> | string
    employees?: IntWithAggregatesFilter<"tenants"> | number
    creationDate?: DateTimeWithAggregatesFilter<"tenants"> | Date | string
  }

  export type documentTypesWhereInput = {
    AND?: documentTypesWhereInput | documentTypesWhereInput[]
    OR?: documentTypesWhereInput[]
    NOT?: documentTypesWhereInput | documentTypesWhereInput[]
    documentTypeId?: IntFilter<"documentTypes"> | number
    name?: StringFilter<"documentTypes"> | string
    code?: StringNullableFilter<"documentTypes"> | string | null
    creationDate?: DateTimeFilter<"documentTypes"> | Date | string
    Users?: UsersListRelationFilter
  }

  export type documentTypesOrderByWithRelationInput = {
    documentTypeId?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    creationDate?: SortOrder
    Users?: usersOrderByRelationAggregateInput
    _relevance?: documentTypesOrderByRelevanceInput
  }

  export type documentTypesWhereUniqueInput = Prisma.AtLeast<{
    documentTypeId?: number
    AND?: documentTypesWhereInput | documentTypesWhereInput[]
    OR?: documentTypesWhereInput[]
    NOT?: documentTypesWhereInput | documentTypesWhereInput[]
    name?: StringFilter<"documentTypes"> | string
    code?: StringNullableFilter<"documentTypes"> | string | null
    creationDate?: DateTimeFilter<"documentTypes"> | Date | string
    Users?: UsersListRelationFilter
  }, "documentTypeId">

  export type documentTypesOrderByWithAggregationInput = {
    documentTypeId?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    creationDate?: SortOrder
    _count?: documentTypesCountOrderByAggregateInput
    _avg?: documentTypesAvgOrderByAggregateInput
    _max?: documentTypesMaxOrderByAggregateInput
    _min?: documentTypesMinOrderByAggregateInput
    _sum?: documentTypesSumOrderByAggregateInput
  }

  export type documentTypesScalarWhereWithAggregatesInput = {
    AND?: documentTypesScalarWhereWithAggregatesInput | documentTypesScalarWhereWithAggregatesInput[]
    OR?: documentTypesScalarWhereWithAggregatesInput[]
    NOT?: documentTypesScalarWhereWithAggregatesInput | documentTypesScalarWhereWithAggregatesInput[]
    documentTypeId?: IntWithAggregatesFilter<"documentTypes"> | number
    name?: StringWithAggregatesFilter<"documentTypes"> | string
    code?: StringNullableWithAggregatesFilter<"documentTypes"> | string | null
    creationDate?: DateTimeWithAggregatesFilter<"documentTypes"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    userId?: IntFilter<"users"> | number
    documentNumber?: StringFilter<"users"> | string
    firstName?: StringFilter<"users"> | string
    lastName?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    phoneNumber?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    activated?: BoolFilter<"users"> | boolean
    tenantId?: IntFilter<"users"> | number
    documentTypeId?: IntFilter<"users"> | number
    wageRate?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFilter<"users"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    documentType?: XOR<DocumentTypesScalarRelationFilter, documentTypesWhereInput>
    bankAccounts?: BankAccountsListRelationFilter
    workRecords?: WorkRecordsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    userId?: SortOrder
    documentNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    activated?: SortOrder
    tenantId?: SortOrder
    documentTypeId?: SortOrder
    wageRate?: SortOrder
    grossCompensation?: SortOrder
    netCompensation?: SortOrder
    creationDate?: SortOrder
    tenant?: tenantsOrderByWithRelationInput
    documentType?: documentTypesOrderByWithRelationInput
    bankAccounts?: bankAccountsOrderByRelationAggregateInput
    workRecords?: workRecordsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    documentNumber?: StringFilter<"users"> | string
    firstName?: StringFilter<"users"> | string
    lastName?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    phoneNumber?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    activated?: BoolFilter<"users"> | boolean
    tenantId?: IntFilter<"users"> | number
    documentTypeId?: IntFilter<"users"> | number
    wageRate?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFilter<"users"> | Date | string
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    documentType?: XOR<DocumentTypesScalarRelationFilter, documentTypesWhereInput>
    bankAccounts?: BankAccountsListRelationFilter
    workRecords?: WorkRecordsListRelationFilter
  }, "userId">

  export type usersOrderByWithAggregationInput = {
    userId?: SortOrder
    documentNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    activated?: SortOrder
    tenantId?: SortOrder
    documentTypeId?: SortOrder
    wageRate?: SortOrder
    grossCompensation?: SortOrder
    netCompensation?: SortOrder
    creationDate?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"users"> | number
    documentNumber?: StringWithAggregatesFilter<"users"> | string
    firstName?: StringWithAggregatesFilter<"users"> | string
    lastName?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    activated?: BoolWithAggregatesFilter<"users"> | boolean
    tenantId?: IntWithAggregatesFilter<"users"> | number
    documentTypeId?: IntWithAggregatesFilter<"users"> | number
    wageRate?: DecimalWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalWithAggregatesFilter<"users"> | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type bankAccountTypesWhereInput = {
    AND?: bankAccountTypesWhereInput | bankAccountTypesWhereInput[]
    OR?: bankAccountTypesWhereInput[]
    NOT?: bankAccountTypesWhereInput | bankAccountTypesWhereInput[]
    bankAccountTypeId?: IntFilter<"bankAccountTypes"> | number
    name?: StringFilter<"bankAccountTypes"> | string
    creationDate?: DateTimeFilter<"bankAccountTypes"> | Date | string
    bankAccounts?: BankAccountsListRelationFilter
  }

  export type bankAccountTypesOrderByWithRelationInput = {
    bankAccountTypeId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    bankAccounts?: bankAccountsOrderByRelationAggregateInput
    _relevance?: bankAccountTypesOrderByRelevanceInput
  }

  export type bankAccountTypesWhereUniqueInput = Prisma.AtLeast<{
    bankAccountTypeId?: number
    AND?: bankAccountTypesWhereInput | bankAccountTypesWhereInput[]
    OR?: bankAccountTypesWhereInput[]
    NOT?: bankAccountTypesWhereInput | bankAccountTypesWhereInput[]
    name?: StringFilter<"bankAccountTypes"> | string
    creationDate?: DateTimeFilter<"bankAccountTypes"> | Date | string
    bankAccounts?: BankAccountsListRelationFilter
  }, "bankAccountTypeId">

  export type bankAccountTypesOrderByWithAggregationInput = {
    bankAccountTypeId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    _count?: bankAccountTypesCountOrderByAggregateInput
    _avg?: bankAccountTypesAvgOrderByAggregateInput
    _max?: bankAccountTypesMaxOrderByAggregateInput
    _min?: bankAccountTypesMinOrderByAggregateInput
    _sum?: bankAccountTypesSumOrderByAggregateInput
  }

  export type bankAccountTypesScalarWhereWithAggregatesInput = {
    AND?: bankAccountTypesScalarWhereWithAggregatesInput | bankAccountTypesScalarWhereWithAggregatesInput[]
    OR?: bankAccountTypesScalarWhereWithAggregatesInput[]
    NOT?: bankAccountTypesScalarWhereWithAggregatesInput | bankAccountTypesScalarWhereWithAggregatesInput[]
    bankAccountTypeId?: IntWithAggregatesFilter<"bankAccountTypes"> | number
    name?: StringWithAggregatesFilter<"bankAccountTypes"> | string
    creationDate?: DateTimeWithAggregatesFilter<"bankAccountTypes"> | Date | string
  }

  export type banksWhereInput = {
    AND?: banksWhereInput | banksWhereInput[]
    OR?: banksWhereInput[]
    NOT?: banksWhereInput | banksWhereInput[]
    bankId?: IntFilter<"banks"> | number
    code?: StringFilter<"banks"> | string
    name?: StringFilter<"banks"> | string
    creationDate?: DateTimeFilter<"banks"> | Date | string
    bankAccounts?: BankAccountsListRelationFilter
  }

  export type banksOrderByWithRelationInput = {
    bankId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    bankAccounts?: bankAccountsOrderByRelationAggregateInput
    _relevance?: banksOrderByRelevanceInput
  }

  export type banksWhereUniqueInput = Prisma.AtLeast<{
    bankId?: number
    AND?: banksWhereInput | banksWhereInput[]
    OR?: banksWhereInput[]
    NOT?: banksWhereInput | banksWhereInput[]
    code?: StringFilter<"banks"> | string
    name?: StringFilter<"banks"> | string
    creationDate?: DateTimeFilter<"banks"> | Date | string
    bankAccounts?: BankAccountsListRelationFilter
  }, "bankId">

  export type banksOrderByWithAggregationInput = {
    bankId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    _count?: banksCountOrderByAggregateInput
    _avg?: banksAvgOrderByAggregateInput
    _max?: banksMaxOrderByAggregateInput
    _min?: banksMinOrderByAggregateInput
    _sum?: banksSumOrderByAggregateInput
  }

  export type banksScalarWhereWithAggregatesInput = {
    AND?: banksScalarWhereWithAggregatesInput | banksScalarWhereWithAggregatesInput[]
    OR?: banksScalarWhereWithAggregatesInput[]
    NOT?: banksScalarWhereWithAggregatesInput | banksScalarWhereWithAggregatesInput[]
    bankId?: IntWithAggregatesFilter<"banks"> | number
    code?: StringWithAggregatesFilter<"banks"> | string
    name?: StringWithAggregatesFilter<"banks"> | string
    creationDate?: DateTimeWithAggregatesFilter<"banks"> | Date | string
  }

  export type bankAccountsWhereInput = {
    AND?: bankAccountsWhereInput | bankAccountsWhereInput[]
    OR?: bankAccountsWhereInput[]
    NOT?: bankAccountsWhereInput | bankAccountsWhereInput[]
    bankAccountId?: IntFilter<"bankAccounts"> | number
    number?: StringFilter<"bankAccounts"> | string
    bankAccountTypeId?: IntFilter<"bankAccounts"> | number
    creationDate?: DateTimeFilter<"bankAccounts"> | Date | string
    userId?: IntFilter<"bankAccounts"> | number
    bankId?: IntFilter<"bankAccounts"> | number
    bankAccountType?: XOR<BankAccountTypesScalarRelationFilter, bankAccountTypesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    bank?: XOR<BanksScalarRelationFilter, banksWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type bankAccountsOrderByWithRelationInput = {
    bankAccountId?: SortOrder
    number?: SortOrder
    bankAccountTypeId?: SortOrder
    creationDate?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
    bankAccountType?: bankAccountTypesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
    bank?: banksOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
    _relevance?: bankAccountsOrderByRelevanceInput
  }

  export type bankAccountsWhereUniqueInput = Prisma.AtLeast<{
    bankAccountId?: number
    AND?: bankAccountsWhereInput | bankAccountsWhereInput[]
    OR?: bankAccountsWhereInput[]
    NOT?: bankAccountsWhereInput | bankAccountsWhereInput[]
    number?: StringFilter<"bankAccounts"> | string
    bankAccountTypeId?: IntFilter<"bankAccounts"> | number
    creationDate?: DateTimeFilter<"bankAccounts"> | Date | string
    userId?: IntFilter<"bankAccounts"> | number
    bankId?: IntFilter<"bankAccounts"> | number
    bankAccountType?: XOR<BankAccountTypesScalarRelationFilter, bankAccountTypesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    bank?: XOR<BanksScalarRelationFilter, banksWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "bankAccountId">

  export type bankAccountsOrderByWithAggregationInput = {
    bankAccountId?: SortOrder
    number?: SortOrder
    bankAccountTypeId?: SortOrder
    creationDate?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
    _count?: bankAccountsCountOrderByAggregateInput
    _avg?: bankAccountsAvgOrderByAggregateInput
    _max?: bankAccountsMaxOrderByAggregateInput
    _min?: bankAccountsMinOrderByAggregateInput
    _sum?: bankAccountsSumOrderByAggregateInput
  }

  export type bankAccountsScalarWhereWithAggregatesInput = {
    AND?: bankAccountsScalarWhereWithAggregatesInput | bankAccountsScalarWhereWithAggregatesInput[]
    OR?: bankAccountsScalarWhereWithAggregatesInput[]
    NOT?: bankAccountsScalarWhereWithAggregatesInput | bankAccountsScalarWhereWithAggregatesInput[]
    bankAccountId?: IntWithAggregatesFilter<"bankAccounts"> | number
    number?: StringWithAggregatesFilter<"bankAccounts"> | string
    bankAccountTypeId?: IntWithAggregatesFilter<"bankAccounts"> | number
    creationDate?: DateTimeWithAggregatesFilter<"bankAccounts"> | Date | string
    userId?: IntWithAggregatesFilter<"bankAccounts"> | number
    bankId?: IntWithAggregatesFilter<"bankAccounts"> | number
  }

  export type transactionStatusWhereInput = {
    AND?: transactionStatusWhereInput | transactionStatusWhereInput[]
    OR?: transactionStatusWhereInput[]
    NOT?: transactionStatusWhereInput | transactionStatusWhereInput[]
    transactionStatusId?: IntFilter<"transactionStatus"> | number
    name?: StringFilter<"transactionStatus"> | string
    creationDate?: DateTimeFilter<"transactionStatus"> | Date | string
    transactions?: TransactionsListRelationFilter
  }

  export type transactionStatusOrderByWithRelationInput = {
    transactionStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    transactions?: transactionsOrderByRelationAggregateInput
    _relevance?: transactionStatusOrderByRelevanceInput
  }

  export type transactionStatusWhereUniqueInput = Prisma.AtLeast<{
    transactionStatusId?: number
    AND?: transactionStatusWhereInput | transactionStatusWhereInput[]
    OR?: transactionStatusWhereInput[]
    NOT?: transactionStatusWhereInput | transactionStatusWhereInput[]
    name?: StringFilter<"transactionStatus"> | string
    creationDate?: DateTimeFilter<"transactionStatus"> | Date | string
    transactions?: TransactionsListRelationFilter
  }, "transactionStatusId">

  export type transactionStatusOrderByWithAggregationInput = {
    transactionStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    _count?: transactionStatusCountOrderByAggregateInput
    _avg?: transactionStatusAvgOrderByAggregateInput
    _max?: transactionStatusMaxOrderByAggregateInput
    _min?: transactionStatusMinOrderByAggregateInput
    _sum?: transactionStatusSumOrderByAggregateInput
  }

  export type transactionStatusScalarWhereWithAggregatesInput = {
    AND?: transactionStatusScalarWhereWithAggregatesInput | transactionStatusScalarWhereWithAggregatesInput[]
    OR?: transactionStatusScalarWhereWithAggregatesInput[]
    NOT?: transactionStatusScalarWhereWithAggregatesInput | transactionStatusScalarWhereWithAggregatesInput[]
    transactionStatusId?: IntWithAggregatesFilter<"transactionStatus"> | number
    name?: StringWithAggregatesFilter<"transactionStatus"> | string
    creationDate?: DateTimeWithAggregatesFilter<"transactionStatus"> | Date | string
  }

  export type currenciesWhereInput = {
    AND?: currenciesWhereInput | currenciesWhereInput[]
    OR?: currenciesWhereInput[]
    NOT?: currenciesWhereInput | currenciesWhereInput[]
    currencyId?: IntFilter<"currencies"> | number
    name?: StringFilter<"currencies"> | string
    creationDate?: DateTimeFilter<"currencies"> | Date | string
    transactions?: TransactionsListRelationFilter
  }

  export type currenciesOrderByWithRelationInput = {
    currencyId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    transactions?: transactionsOrderByRelationAggregateInput
    _relevance?: currenciesOrderByRelevanceInput
  }

  export type currenciesWhereUniqueInput = Prisma.AtLeast<{
    currencyId?: number
    AND?: currenciesWhereInput | currenciesWhereInput[]
    OR?: currenciesWhereInput[]
    NOT?: currenciesWhereInput | currenciesWhereInput[]
    name?: StringFilter<"currencies"> | string
    creationDate?: DateTimeFilter<"currencies"> | Date | string
    transactions?: TransactionsListRelationFilter
  }, "currencyId">

  export type currenciesOrderByWithAggregationInput = {
    currencyId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    _count?: currenciesCountOrderByAggregateInput
    _avg?: currenciesAvgOrderByAggregateInput
    _max?: currenciesMaxOrderByAggregateInput
    _min?: currenciesMinOrderByAggregateInput
    _sum?: currenciesSumOrderByAggregateInput
  }

  export type currenciesScalarWhereWithAggregatesInput = {
    AND?: currenciesScalarWhereWithAggregatesInput | currenciesScalarWhereWithAggregatesInput[]
    OR?: currenciesScalarWhereWithAggregatesInput[]
    NOT?: currenciesScalarWhereWithAggregatesInput | currenciesScalarWhereWithAggregatesInput[]
    currencyId?: IntWithAggregatesFilter<"currencies"> | number
    name?: StringWithAggregatesFilter<"currencies"> | string
    creationDate?: DateTimeWithAggregatesFilter<"currencies"> | Date | string
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    accountId?: IntFilter<"accounts"> | number
    name?: StringFilter<"accounts"> | string
    token?: StringFilter<"accounts"> | string
    privateKey?: StringFilter<"accounts"> | string
    creationDate?: DateTimeFilter<"accounts"> | Date | string
    transactions?: TransactionsListRelationFilter
  }

  export type accountsOrderByWithRelationInput = {
    accountId?: SortOrder
    name?: SortOrder
    token?: SortOrder
    privateKey?: SortOrder
    creationDate?: SortOrder
    transactions?: transactionsOrderByRelationAggregateInput
    _relevance?: accountsOrderByRelevanceInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    accountId?: number
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    name?: StringFilter<"accounts"> | string
    token?: StringFilter<"accounts"> | string
    privateKey?: StringFilter<"accounts"> | string
    creationDate?: DateTimeFilter<"accounts"> | Date | string
    transactions?: TransactionsListRelationFilter
  }, "accountId">

  export type accountsOrderByWithAggregationInput = {
    accountId?: SortOrder
    name?: SortOrder
    token?: SortOrder
    privateKey?: SortOrder
    creationDate?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _avg?: accountsAvgOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
    _sum?: accountsSumOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    accountId?: IntWithAggregatesFilter<"accounts"> | number
    name?: StringWithAggregatesFilter<"accounts"> | string
    token?: StringWithAggregatesFilter<"accounts"> | string
    privateKey?: StringWithAggregatesFilter<"accounts"> | string
    creationDate?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
  }

  export type payrollCycleStatusWhereInput = {
    AND?: payrollCycleStatusWhereInput | payrollCycleStatusWhereInput[]
    OR?: payrollCycleStatusWhereInput[]
    NOT?: payrollCycleStatusWhereInput | payrollCycleStatusWhereInput[]
    payrollCycleStatusId?: IntFilter<"payrollCycleStatus"> | number
    name?: StringFilter<"payrollCycleStatus"> | string
    creationDate?: DateTimeFilter<"payrollCycleStatus"> | Date | string
  }

  export type payrollCycleStatusOrderByWithRelationInput = {
    payrollCycleStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    _relevance?: payrollCycleStatusOrderByRelevanceInput
  }

  export type payrollCycleStatusWhereUniqueInput = Prisma.AtLeast<{
    payrollCycleStatusId?: number
    AND?: payrollCycleStatusWhereInput | payrollCycleStatusWhereInput[]
    OR?: payrollCycleStatusWhereInput[]
    NOT?: payrollCycleStatusWhereInput | payrollCycleStatusWhereInput[]
    name?: StringFilter<"payrollCycleStatus"> | string
    creationDate?: DateTimeFilter<"payrollCycleStatus"> | Date | string
  }, "payrollCycleStatusId">

  export type payrollCycleStatusOrderByWithAggregationInput = {
    payrollCycleStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
    _count?: payrollCycleStatusCountOrderByAggregateInput
    _avg?: payrollCycleStatusAvgOrderByAggregateInput
    _max?: payrollCycleStatusMaxOrderByAggregateInput
    _min?: payrollCycleStatusMinOrderByAggregateInput
    _sum?: payrollCycleStatusSumOrderByAggregateInput
  }

  export type payrollCycleStatusScalarWhereWithAggregatesInput = {
    AND?: payrollCycleStatusScalarWhereWithAggregatesInput | payrollCycleStatusScalarWhereWithAggregatesInput[]
    OR?: payrollCycleStatusScalarWhereWithAggregatesInput[]
    NOT?: payrollCycleStatusScalarWhereWithAggregatesInput | payrollCycleStatusScalarWhereWithAggregatesInput[]
    payrollCycleStatusId?: IntWithAggregatesFilter<"payrollCycleStatus"> | number
    name?: StringWithAggregatesFilter<"payrollCycleStatus"> | string
    creationDate?: DateTimeWithAggregatesFilter<"payrollCycleStatus"> | Date | string
  }

  export type payrollCyclesWhereInput = {
    AND?: payrollCyclesWhereInput | payrollCyclesWhereInput[]
    OR?: payrollCyclesWhereInput[]
    NOT?: payrollCyclesWhereInput | payrollCyclesWhereInput[]
    payrollCycleId?: IntFilter<"payrollCycles"> | number
    tenantId?: IntFilter<"payrollCycles"> | number
    initDate?: DateTimeFilter<"payrollCycles"> | Date | string
    endDate?: DateTimeFilter<"payrollCycles"> | Date | string
    totalGrossEarning?: DecimalFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    transactionId?: IntFilter<"payrollCycles"> | number
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    transactions?: TransactionsListRelationFilter
    workRecords?: WorkRecordsListRelationFilter
  }

  export type payrollCyclesOrderByWithRelationInput = {
    payrollCycleId?: SortOrder
    tenantId?: SortOrder
    initDate?: SortOrder
    endDate?: SortOrder
    totalGrossEarning?: SortOrder
    totalNetEarning?: SortOrder
    transactionId?: SortOrder
    tenant?: tenantsOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
    workRecords?: workRecordsOrderByRelationAggregateInput
  }

  export type payrollCyclesWhereUniqueInput = Prisma.AtLeast<{
    payrollCycleId?: number
    AND?: payrollCyclesWhereInput | payrollCyclesWhereInput[]
    OR?: payrollCyclesWhereInput[]
    NOT?: payrollCyclesWhereInput | payrollCyclesWhereInput[]
    tenantId?: IntFilter<"payrollCycles"> | number
    initDate?: DateTimeFilter<"payrollCycles"> | Date | string
    endDate?: DateTimeFilter<"payrollCycles"> | Date | string
    totalGrossEarning?: DecimalFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    transactionId?: IntFilter<"payrollCycles"> | number
    tenant?: XOR<TenantsScalarRelationFilter, tenantsWhereInput>
    transactions?: TransactionsListRelationFilter
    workRecords?: WorkRecordsListRelationFilter
  }, "payrollCycleId">

  export type payrollCyclesOrderByWithAggregationInput = {
    payrollCycleId?: SortOrder
    tenantId?: SortOrder
    initDate?: SortOrder
    endDate?: SortOrder
    totalGrossEarning?: SortOrder
    totalNetEarning?: SortOrder
    transactionId?: SortOrder
    _count?: payrollCyclesCountOrderByAggregateInput
    _avg?: payrollCyclesAvgOrderByAggregateInput
    _max?: payrollCyclesMaxOrderByAggregateInput
    _min?: payrollCyclesMinOrderByAggregateInput
    _sum?: payrollCyclesSumOrderByAggregateInput
  }

  export type payrollCyclesScalarWhereWithAggregatesInput = {
    AND?: payrollCyclesScalarWhereWithAggregatesInput | payrollCyclesScalarWhereWithAggregatesInput[]
    OR?: payrollCyclesScalarWhereWithAggregatesInput[]
    NOT?: payrollCyclesScalarWhereWithAggregatesInput | payrollCyclesScalarWhereWithAggregatesInput[]
    payrollCycleId?: IntWithAggregatesFilter<"payrollCycles"> | number
    tenantId?: IntWithAggregatesFilter<"payrollCycles"> | number
    initDate?: DateTimeWithAggregatesFilter<"payrollCycles"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"payrollCycles"> | Date | string
    totalGrossEarning?: DecimalWithAggregatesFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalWithAggregatesFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    transactionId?: IntWithAggregatesFilter<"payrollCycles"> | number
  }

  export type workRecordsWhereInput = {
    AND?: workRecordsWhereInput | workRecordsWhereInput[]
    OR?: workRecordsWhereInput[]
    NOT?: workRecordsWhereInput | workRecordsWhereInput[]
    workRecordId?: IntFilter<"workRecords"> | number
    payrollCycleId?: IntFilter<"workRecords"> | number
    userId?: IntFilter<"workRecords"> | number
    startTime?: DateTimeNullableFilter<"workRecords"> | Date | string | null
    endTime?: DateTimeNullableFilter<"workRecords"> | Date | string | null
    totalHoursWorked?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    payrollCycle?: XOR<PayrollCyclesScalarRelationFilter, payrollCyclesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type workRecordsOrderByWithRelationInput = {
    workRecordId?: SortOrder
    payrollCycleId?: SortOrder
    userId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    totalHoursWorked?: SortOrder
    grossEarning?: SortOrder
    netEarning?: SortOrder
    payrollCycle?: payrollCyclesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type workRecordsWhereUniqueInput = Prisma.AtLeast<{
    workRecordId?: number
    AND?: workRecordsWhereInput | workRecordsWhereInput[]
    OR?: workRecordsWhereInput[]
    NOT?: workRecordsWhereInput | workRecordsWhereInput[]
    payrollCycleId?: IntFilter<"workRecords"> | number
    userId?: IntFilter<"workRecords"> | number
    startTime?: DateTimeNullableFilter<"workRecords"> | Date | string | null
    endTime?: DateTimeNullableFilter<"workRecords"> | Date | string | null
    totalHoursWorked?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    payrollCycle?: XOR<PayrollCyclesScalarRelationFilter, payrollCyclesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "workRecordId">

  export type workRecordsOrderByWithAggregationInput = {
    workRecordId?: SortOrder
    payrollCycleId?: SortOrder
    userId?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    totalHoursWorked?: SortOrder
    grossEarning?: SortOrder
    netEarning?: SortOrder
    _count?: workRecordsCountOrderByAggregateInput
    _avg?: workRecordsAvgOrderByAggregateInput
    _max?: workRecordsMaxOrderByAggregateInput
    _min?: workRecordsMinOrderByAggregateInput
    _sum?: workRecordsSumOrderByAggregateInput
  }

  export type workRecordsScalarWhereWithAggregatesInput = {
    AND?: workRecordsScalarWhereWithAggregatesInput | workRecordsScalarWhereWithAggregatesInput[]
    OR?: workRecordsScalarWhereWithAggregatesInput[]
    NOT?: workRecordsScalarWhereWithAggregatesInput | workRecordsScalarWhereWithAggregatesInput[]
    workRecordId?: IntWithAggregatesFilter<"workRecords"> | number
    payrollCycleId?: IntWithAggregatesFilter<"workRecords"> | number
    userId?: IntWithAggregatesFilter<"workRecords"> | number
    startTime?: DateTimeNullableWithAggregatesFilter<"workRecords"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"workRecords"> | Date | string | null
    totalHoursWorked?: DecimalWithAggregatesFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalWithAggregatesFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalWithAggregatesFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    transactionId?: IntFilter<"transactions"> | number
    accountId?: IntFilter<"transactions"> | number
    requestedAmount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    currencyId?: IntFilter<"transactions"> | number
    bankAccountId?: IntFilter<"transactions"> | number
    transactionStatusId?: IntFilter<"transactions"> | number
    creationDate?: DateTimeFilter<"transactions"> | Date | string
    payrollCycleId?: IntFilter<"transactions"> | number
    account?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
    currency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
    bankAccount?: XOR<BankAccountsScalarRelationFilter, bankAccountsWhereInput>
    transactionStatus?: XOR<TransactionStatusScalarRelationFilter, transactionStatusWhereInput>
    payrollCycle?: XOR<PayrollCyclesScalarRelationFilter, payrollCyclesWhereInput>
  }

  export type transactionsOrderByWithRelationInput = {
    transactionId?: SortOrder
    accountId?: SortOrder
    requestedAmount?: SortOrder
    currencyId?: SortOrder
    bankAccountId?: SortOrder
    transactionStatusId?: SortOrder
    creationDate?: SortOrder
    payrollCycleId?: SortOrder
    account?: accountsOrderByWithRelationInput
    currency?: currenciesOrderByWithRelationInput
    bankAccount?: bankAccountsOrderByWithRelationInput
    transactionStatus?: transactionStatusOrderByWithRelationInput
    payrollCycle?: payrollCyclesOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    transactionId?: number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    accountId?: IntFilter<"transactions"> | number
    requestedAmount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    currencyId?: IntFilter<"transactions"> | number
    bankAccountId?: IntFilter<"transactions"> | number
    transactionStatusId?: IntFilter<"transactions"> | number
    creationDate?: DateTimeFilter<"transactions"> | Date | string
    payrollCycleId?: IntFilter<"transactions"> | number
    account?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
    currency?: XOR<CurrenciesScalarRelationFilter, currenciesWhereInput>
    bankAccount?: XOR<BankAccountsScalarRelationFilter, bankAccountsWhereInput>
    transactionStatus?: XOR<TransactionStatusScalarRelationFilter, transactionStatusWhereInput>
    payrollCycle?: XOR<PayrollCyclesScalarRelationFilter, payrollCyclesWhereInput>
  }, "transactionId">

  export type transactionsOrderByWithAggregationInput = {
    transactionId?: SortOrder
    accountId?: SortOrder
    requestedAmount?: SortOrder
    currencyId?: SortOrder
    bankAccountId?: SortOrder
    transactionStatusId?: SortOrder
    creationDate?: SortOrder
    payrollCycleId?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    transactionId?: IntWithAggregatesFilter<"transactions"> | number
    accountId?: IntWithAggregatesFilter<"transactions"> | number
    requestedAmount?: DecimalWithAggregatesFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    currencyId?: IntWithAggregatesFilter<"transactions"> | number
    bankAccountId?: IntWithAggregatesFilter<"transactions"> | number
    transactionStatusId?: IntWithAggregatesFilter<"transactions"> | number
    creationDate?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    payrollCycleId?: IntWithAggregatesFilter<"transactions"> | number
  }

  export type tenantsCreateInput = {
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate?: Date | string
    Users?: usersCreateNestedManyWithoutTenantInput
    payrollCycles?: payrollCyclesCreateNestedManyWithoutTenantInput
  }

  export type tenantsUncheckedCreateInput = {
    tenantId?: number
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate?: Date | string
    Users?: usersUncheckedCreateNestedManyWithoutTenantInput
    payrollCycles?: payrollCyclesUncheckedCreateNestedManyWithoutTenantInput
  }

  export type tenantsUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUpdateManyWithoutTenantNestedInput
    payrollCycles?: payrollCyclesUpdateManyWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateInput = {
    tenantId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUncheckedUpdateManyWithoutTenantNestedInput
    payrollCycles?: payrollCyclesUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type tenantsCreateManyInput = {
    tenantId?: number
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate?: Date | string
  }

  export type tenantsUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tenantsUncheckedUpdateManyInput = {
    tenantId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentTypesCreateInput = {
    name: string
    code?: string | null
    creationDate?: Date | string
    Users?: usersCreateNestedManyWithoutDocumentTypeInput
  }

  export type documentTypesUncheckedCreateInput = {
    documentTypeId?: number
    name: string
    code?: string | null
    creationDate?: Date | string
    Users?: usersUncheckedCreateNestedManyWithoutDocumentTypeInput
  }

  export type documentTypesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUpdateManyWithoutDocumentTypeNestedInput
  }

  export type documentTypesUncheckedUpdateInput = {
    documentTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUncheckedUpdateManyWithoutDocumentTypeNestedInput
  }

  export type documentTypesCreateManyInput = {
    documentTypeId?: number
    name: string
    code?: string | null
    creationDate?: Date | string
  }

  export type documentTypesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentTypesUncheckedUpdateManyInput = {
    documentTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    tenant: tenantsCreateNestedOneWithoutUsersInput
    documentType: documentTypesCreateNestedOneWithoutUsersInput
    bankAccounts?: bankAccountsCreateNestedManyWithoutUserInput
    workRecords?: workRecordsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    tenantId: number
    documentTypeId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    bankAccounts?: bankAccountsUncheckedCreateNestedManyWithoutUserInput
    workRecords?: workRecordsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutUsersNestedInput
    documentType?: documentTypesUpdateOneRequiredWithoutUsersNestedInput
    bankAccounts?: bankAccountsUpdateManyWithoutUserNestedInput
    workRecords?: workRecordsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUncheckedUpdateManyWithoutUserNestedInput
    workRecords?: workRecordsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    tenantId: number
    documentTypeId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountTypesCreateInput = {
    name: string
    creationDate?: Date | string
    bankAccounts?: bankAccountsCreateNestedManyWithoutBankAccountTypeInput
  }

  export type bankAccountTypesUncheckedCreateInput = {
    bankAccountTypeId?: number
    name: string
    creationDate?: Date | string
    bankAccounts?: bankAccountsUncheckedCreateNestedManyWithoutBankAccountTypeInput
  }

  export type bankAccountTypesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUpdateManyWithoutBankAccountTypeNestedInput
  }

  export type bankAccountTypesUncheckedUpdateInput = {
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUncheckedUpdateManyWithoutBankAccountTypeNestedInput
  }

  export type bankAccountTypesCreateManyInput = {
    bankAccountTypeId?: number
    name: string
    creationDate?: Date | string
  }

  export type bankAccountTypesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountTypesUncheckedUpdateManyInput = {
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type banksCreateInput = {
    code: string
    name: string
    creationDate?: Date | string
    bankAccounts?: bankAccountsCreateNestedManyWithoutBankInput
  }

  export type banksUncheckedCreateInput = {
    bankId?: number
    code: string
    name: string
    creationDate?: Date | string
    bankAccounts?: bankAccountsUncheckedCreateNestedManyWithoutBankInput
  }

  export type banksUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUpdateManyWithoutBankNestedInput
  }

  export type banksUncheckedUpdateInput = {
    bankId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUncheckedUpdateManyWithoutBankNestedInput
  }

  export type banksCreateManyInput = {
    bankId?: number
    code: string
    name: string
    creationDate?: Date | string
  }

  export type banksUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type banksUncheckedUpdateManyInput = {
    bankId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountsCreateInput = {
    number: string
    creationDate?: Date | string
    bankAccountType: bankAccountTypesCreateNestedOneWithoutBankAccountsInput
    user: usersCreateNestedOneWithoutBankAccountsInput
    bank: banksCreateNestedOneWithoutBankAccountsInput
    transactions?: transactionsCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsUncheckedCreateInput = {
    bankAccountId?: number
    number: string
    bankAccountTypeId: number
    creationDate?: Date | string
    userId: number
    bankId: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountType?: bankAccountTypesUpdateOneRequiredWithoutBankAccountsNestedInput
    user?: usersUpdateOneRequiredWithoutBankAccountsNestedInput
    bank?: banksUpdateOneRequiredWithoutBankAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsUncheckedUpdateInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsCreateManyInput = {
    bankAccountId?: number
    number: string
    bankAccountTypeId: number
    creationDate?: Date | string
    userId: number
    bankId: number
  }

  export type bankAccountsUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountsUncheckedUpdateManyInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionStatusCreateInput = {
    name: string
    creationDate?: Date | string
    transactions?: transactionsCreateNestedManyWithoutTransactionStatusInput
  }

  export type transactionStatusUncheckedCreateInput = {
    transactionStatusId?: number
    name: string
    creationDate?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutTransactionStatusInput
  }

  export type transactionStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutTransactionStatusNestedInput
  }

  export type transactionStatusUncheckedUpdateInput = {
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutTransactionStatusNestedInput
  }

  export type transactionStatusCreateManyInput = {
    transactionStatusId?: number
    name: string
    creationDate?: Date | string
  }

  export type transactionStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionStatusUncheckedUpdateManyInput = {
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currenciesCreateInput = {
    name: string
    creationDate?: Date | string
    transactions?: transactionsCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUncheckedCreateInput = {
    currencyId?: number
    name: string
    creationDate?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutCurrencyInput
  }

  export type currenciesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesUncheckedUpdateInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutCurrencyNestedInput
  }

  export type currenciesCreateManyInput = {
    currencyId?: number
    name: string
    creationDate?: Date | string
  }

  export type currenciesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currenciesUncheckedUpdateManyInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateInput = {
    name: string
    token: string
    privateKey: string
    creationDate?: Date | string
    transactions?: transactionsCreateNestedManyWithoutAccountInput
  }

  export type accountsUncheckedCreateInput = {
    accountId?: number
    name: string
    token: string
    privateKey: string
    creationDate?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutAccountNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountsCreateManyInput = {
    accountId?: number
    name: string
    token: string
    privateKey: string
    creationDate?: Date | string
  }

  export type accountsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payrollCycleStatusCreateInput = {
    name: string
    creationDate?: Date | string
  }

  export type payrollCycleStatusUncheckedCreateInput = {
    payrollCycleStatusId?: number
    name: string
    creationDate?: Date | string
  }

  export type payrollCycleStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payrollCycleStatusUncheckedUpdateInput = {
    payrollCycleStatusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payrollCycleStatusCreateManyInput = {
    payrollCycleStatusId?: number
    name: string
    creationDate?: Date | string
  }

  export type payrollCycleStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payrollCycleStatusUncheckedUpdateManyInput = {
    payrollCycleStatusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payrollCyclesCreateInput = {
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    tenant: tenantsCreateNestedOneWithoutPayrollCyclesInput
    transactions?: transactionsCreateNestedManyWithoutPayrollCycleInput
    workRecords?: workRecordsCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesUncheckedCreateInput = {
    payrollCycleId?: number
    tenantId: number
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutPayrollCycleInput
    workRecords?: workRecordsUncheckedCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesUpdateInput = {
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    tenant?: tenantsUpdateOneRequiredWithoutPayrollCyclesNestedInput
    transactions?: transactionsUpdateManyWithoutPayrollCycleNestedInput
    workRecords?: workRecordsUpdateManyWithoutPayrollCycleNestedInput
  }

  export type payrollCyclesUncheckedUpdateInput = {
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutPayrollCycleNestedInput
    workRecords?: workRecordsUncheckedUpdateManyWithoutPayrollCycleNestedInput
  }

  export type payrollCyclesCreateManyInput = {
    payrollCycleId?: number
    tenantId: number
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
  }

  export type payrollCyclesUpdateManyMutationInput = {
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type payrollCyclesUncheckedUpdateManyInput = {
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type workRecordsCreateInput = {
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
    payrollCycle: payrollCyclesCreateNestedOneWithoutWorkRecordsInput
    user: usersCreateNestedOneWithoutWorkRecordsInput
  }

  export type workRecordsUncheckedCreateInput = {
    workRecordId?: number
    payrollCycleId: number
    userId: number
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
  }

  export type workRecordsUpdateInput = {
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payrollCycle?: payrollCyclesUpdateOneRequiredWithoutWorkRecordsNestedInput
    user?: usersUpdateOneRequiredWithoutWorkRecordsNestedInput
  }

  export type workRecordsUncheckedUpdateInput = {
    workRecordId?: IntFieldUpdateOperationsInput | number
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type workRecordsCreateManyInput = {
    workRecordId?: number
    payrollCycleId: number
    userId: number
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
  }

  export type workRecordsUpdateManyMutationInput = {
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type workRecordsUncheckedUpdateManyInput = {
    workRecordId?: IntFieldUpdateOperationsInput | number
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type transactionsCreateInput = {
    requestedAmount: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    account: accountsCreateNestedOneWithoutTransactionsInput
    currency: currenciesCreateNestedOneWithoutTransactionsInput
    bankAccount: bankAccountsCreateNestedOneWithoutTransactionsInput
    transactionStatus: transactionStatusCreateNestedOneWithoutTransactionsInput
    payrollCycle: payrollCyclesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsUpdateInput = {
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountsUpdateOneRequiredWithoutTransactionsNestedInput
    currency?: currenciesUpdateOneRequiredWithoutTransactionsNestedInput
    bankAccount?: bankAccountsUpdateOneRequiredWithoutTransactionsNestedInput
    transactionStatus?: transactionStatusUpdateOneRequiredWithoutTransactionsNestedInput
    payrollCycle?: payrollCyclesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsCreateManyInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsUpdateManyMutationInput = {
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type PayrollCyclesListRelationFilter = {
    every?: payrollCyclesWhereInput
    some?: payrollCyclesWhereInput
    none?: payrollCyclesWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type payrollCyclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tenantsOrderByRelevanceInput = {
    fields: tenantsOrderByRelevanceFieldEnum | tenantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tenantsCountOrderByAggregateInput = {
    tenantId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    employees?: SortOrder
    creationDate?: SortOrder
  }

  export type tenantsAvgOrderByAggregateInput = {
    tenantId?: SortOrder
    employees?: SortOrder
  }

  export type tenantsMaxOrderByAggregateInput = {
    tenantId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    employees?: SortOrder
    creationDate?: SortOrder
  }

  export type tenantsMinOrderByAggregateInput = {
    tenantId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    employees?: SortOrder
    creationDate?: SortOrder
  }

  export type tenantsSumOrderByAggregateInput = {
    tenantId?: SortOrder
    employees?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type documentTypesOrderByRelevanceInput = {
    fields: documentTypesOrderByRelevanceFieldEnum | documentTypesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type documentTypesCountOrderByAggregateInput = {
    documentTypeId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    creationDate?: SortOrder
  }

  export type documentTypesAvgOrderByAggregateInput = {
    documentTypeId?: SortOrder
  }

  export type documentTypesMaxOrderByAggregateInput = {
    documentTypeId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    creationDate?: SortOrder
  }

  export type documentTypesMinOrderByAggregateInput = {
    documentTypeId?: SortOrder
    name?: SortOrder
    code?: SortOrder
    creationDate?: SortOrder
  }

  export type documentTypesSumOrderByAggregateInput = {
    documentTypeId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TenantsScalarRelationFilter = {
    is?: tenantsWhereInput
    isNot?: tenantsWhereInput
  }

  export type DocumentTypesScalarRelationFilter = {
    is?: documentTypesWhereInput
    isNot?: documentTypesWhereInput
  }

  export type BankAccountsListRelationFilter = {
    every?: bankAccountsWhereInput
    some?: bankAccountsWhereInput
    none?: bankAccountsWhereInput
  }

  export type WorkRecordsListRelationFilter = {
    every?: workRecordsWhereInput
    some?: workRecordsWhereInput
    none?: workRecordsWhereInput
  }

  export type bankAccountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workRecordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    userId?: SortOrder
    documentNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    tenantId?: SortOrder
    documentTypeId?: SortOrder
    wageRate?: SortOrder
    grossCompensation?: SortOrder
    netCompensation?: SortOrder
    creationDate?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    userId?: SortOrder
    tenantId?: SortOrder
    documentTypeId?: SortOrder
    wageRate?: SortOrder
    grossCompensation?: SortOrder
    netCompensation?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    userId?: SortOrder
    documentNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    tenantId?: SortOrder
    documentTypeId?: SortOrder
    wageRate?: SortOrder
    grossCompensation?: SortOrder
    netCompensation?: SortOrder
    creationDate?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    userId?: SortOrder
    documentNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    activated?: SortOrder
    tenantId?: SortOrder
    documentTypeId?: SortOrder
    wageRate?: SortOrder
    grossCompensation?: SortOrder
    netCompensation?: SortOrder
    creationDate?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    userId?: SortOrder
    tenantId?: SortOrder
    documentTypeId?: SortOrder
    wageRate?: SortOrder
    grossCompensation?: SortOrder
    netCompensation?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type bankAccountTypesOrderByRelevanceInput = {
    fields: bankAccountTypesOrderByRelevanceFieldEnum | bankAccountTypesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bankAccountTypesCountOrderByAggregateInput = {
    bankAccountTypeId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type bankAccountTypesAvgOrderByAggregateInput = {
    bankAccountTypeId?: SortOrder
  }

  export type bankAccountTypesMaxOrderByAggregateInput = {
    bankAccountTypeId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type bankAccountTypesMinOrderByAggregateInput = {
    bankAccountTypeId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type bankAccountTypesSumOrderByAggregateInput = {
    bankAccountTypeId?: SortOrder
  }

  export type banksOrderByRelevanceInput = {
    fields: banksOrderByRelevanceFieldEnum | banksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type banksCountOrderByAggregateInput = {
    bankId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type banksAvgOrderByAggregateInput = {
    bankId?: SortOrder
  }

  export type banksMaxOrderByAggregateInput = {
    bankId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type banksMinOrderByAggregateInput = {
    bankId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type banksSumOrderByAggregateInput = {
    bankId?: SortOrder
  }

  export type BankAccountTypesScalarRelationFilter = {
    is?: bankAccountTypesWhereInput
    isNot?: bankAccountTypesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type BanksScalarRelationFilter = {
    is?: banksWhereInput
    isNot?: banksWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bankAccountsOrderByRelevanceInput = {
    fields: bankAccountsOrderByRelevanceFieldEnum | bankAccountsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bankAccountsCountOrderByAggregateInput = {
    bankAccountId?: SortOrder
    number?: SortOrder
    bankAccountTypeId?: SortOrder
    creationDate?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
  }

  export type bankAccountsAvgOrderByAggregateInput = {
    bankAccountId?: SortOrder
    bankAccountTypeId?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
  }

  export type bankAccountsMaxOrderByAggregateInput = {
    bankAccountId?: SortOrder
    number?: SortOrder
    bankAccountTypeId?: SortOrder
    creationDate?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
  }

  export type bankAccountsMinOrderByAggregateInput = {
    bankAccountId?: SortOrder
    number?: SortOrder
    bankAccountTypeId?: SortOrder
    creationDate?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
  }

  export type bankAccountsSumOrderByAggregateInput = {
    bankAccountId?: SortOrder
    bankAccountTypeId?: SortOrder
    userId?: SortOrder
    bankId?: SortOrder
  }

  export type transactionStatusOrderByRelevanceInput = {
    fields: transactionStatusOrderByRelevanceFieldEnum | transactionStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transactionStatusCountOrderByAggregateInput = {
    transactionStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type transactionStatusAvgOrderByAggregateInput = {
    transactionStatusId?: SortOrder
  }

  export type transactionStatusMaxOrderByAggregateInput = {
    transactionStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type transactionStatusMinOrderByAggregateInput = {
    transactionStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type transactionStatusSumOrderByAggregateInput = {
    transactionStatusId?: SortOrder
  }

  export type currenciesOrderByRelevanceInput = {
    fields: currenciesOrderByRelevanceFieldEnum | currenciesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type currenciesCountOrderByAggregateInput = {
    currencyId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type currenciesAvgOrderByAggregateInput = {
    currencyId?: SortOrder
  }

  export type currenciesMaxOrderByAggregateInput = {
    currencyId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type currenciesMinOrderByAggregateInput = {
    currencyId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type currenciesSumOrderByAggregateInput = {
    currencyId?: SortOrder
  }

  export type accountsOrderByRelevanceInput = {
    fields: accountsOrderByRelevanceFieldEnum | accountsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type accountsCountOrderByAggregateInput = {
    accountId?: SortOrder
    name?: SortOrder
    token?: SortOrder
    privateKey?: SortOrder
    creationDate?: SortOrder
  }

  export type accountsAvgOrderByAggregateInput = {
    accountId?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    accountId?: SortOrder
    name?: SortOrder
    token?: SortOrder
    privateKey?: SortOrder
    creationDate?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    accountId?: SortOrder
    name?: SortOrder
    token?: SortOrder
    privateKey?: SortOrder
    creationDate?: SortOrder
  }

  export type accountsSumOrderByAggregateInput = {
    accountId?: SortOrder
  }

  export type payrollCycleStatusOrderByRelevanceInput = {
    fields: payrollCycleStatusOrderByRelevanceFieldEnum | payrollCycleStatusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type payrollCycleStatusCountOrderByAggregateInput = {
    payrollCycleStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type payrollCycleStatusAvgOrderByAggregateInput = {
    payrollCycleStatusId?: SortOrder
  }

  export type payrollCycleStatusMaxOrderByAggregateInput = {
    payrollCycleStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type payrollCycleStatusMinOrderByAggregateInput = {
    payrollCycleStatusId?: SortOrder
    name?: SortOrder
    creationDate?: SortOrder
  }

  export type payrollCycleStatusSumOrderByAggregateInput = {
    payrollCycleStatusId?: SortOrder
  }

  export type payrollCyclesCountOrderByAggregateInput = {
    payrollCycleId?: SortOrder
    tenantId?: SortOrder
    initDate?: SortOrder
    endDate?: SortOrder
    totalGrossEarning?: SortOrder
    totalNetEarning?: SortOrder
    transactionId?: SortOrder
  }

  export type payrollCyclesAvgOrderByAggregateInput = {
    payrollCycleId?: SortOrder
    tenantId?: SortOrder
    totalGrossEarning?: SortOrder
    totalNetEarning?: SortOrder
    transactionId?: SortOrder
  }

  export type payrollCyclesMaxOrderByAggregateInput = {
    payrollCycleId?: SortOrder
    tenantId?: SortOrder
    initDate?: SortOrder
    endDate?: SortOrder
    totalGrossEarning?: SortOrder
    totalNetEarning?: SortOrder
    transactionId?: SortOrder
  }

  export type payrollCyclesMinOrderByAggregateInput = {
    payrollCycleId?: SortOrder
    tenantId?: SortOrder
    initDate?: SortOrder
    endDate?: SortOrder
    totalGrossEarning?: SortOrder
    totalNetEarning?: SortOrder
    transactionId?: SortOrder
  }

  export type payrollCyclesSumOrderByAggregateInput = {
    payrollCycleId?: SortOrder
    tenantId?: SortOrder
    totalGrossEarning?: SortOrder
    totalNetEarning?: SortOrder
    transactionId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PayrollCyclesScalarRelationFilter = {
    is?: payrollCyclesWhereInput
    isNot?: payrollCyclesWhereInput
  }

  export type workRecordsCountOrderByAggregateInput = {
    workRecordId?: SortOrder
    payrollCycleId?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalHoursWorked?: SortOrder
    grossEarning?: SortOrder
    netEarning?: SortOrder
  }

  export type workRecordsAvgOrderByAggregateInput = {
    workRecordId?: SortOrder
    payrollCycleId?: SortOrder
    userId?: SortOrder
    totalHoursWorked?: SortOrder
    grossEarning?: SortOrder
    netEarning?: SortOrder
  }

  export type workRecordsMaxOrderByAggregateInput = {
    workRecordId?: SortOrder
    payrollCycleId?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalHoursWorked?: SortOrder
    grossEarning?: SortOrder
    netEarning?: SortOrder
  }

  export type workRecordsMinOrderByAggregateInput = {
    workRecordId?: SortOrder
    payrollCycleId?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalHoursWorked?: SortOrder
    grossEarning?: SortOrder
    netEarning?: SortOrder
  }

  export type workRecordsSumOrderByAggregateInput = {
    workRecordId?: SortOrder
    payrollCycleId?: SortOrder
    userId?: SortOrder
    totalHoursWorked?: SortOrder
    grossEarning?: SortOrder
    netEarning?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AccountsScalarRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type CurrenciesScalarRelationFilter = {
    is?: currenciesWhereInput
    isNot?: currenciesWhereInput
  }

  export type BankAccountsScalarRelationFilter = {
    is?: bankAccountsWhereInput
    isNot?: bankAccountsWhereInput
  }

  export type TransactionStatusScalarRelationFilter = {
    is?: transactionStatusWhereInput
    isNot?: transactionStatusWhereInput
  }

  export type transactionsCountOrderByAggregateInput = {
    transactionId?: SortOrder
    accountId?: SortOrder
    requestedAmount?: SortOrder
    currencyId?: SortOrder
    bankAccountId?: SortOrder
    transactionStatusId?: SortOrder
    creationDate?: SortOrder
    payrollCycleId?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    transactionId?: SortOrder
    accountId?: SortOrder
    requestedAmount?: SortOrder
    currencyId?: SortOrder
    bankAccountId?: SortOrder
    transactionStatusId?: SortOrder
    payrollCycleId?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    transactionId?: SortOrder
    accountId?: SortOrder
    requestedAmount?: SortOrder
    currencyId?: SortOrder
    bankAccountId?: SortOrder
    transactionStatusId?: SortOrder
    creationDate?: SortOrder
    payrollCycleId?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    transactionId?: SortOrder
    accountId?: SortOrder
    requestedAmount?: SortOrder
    currencyId?: SortOrder
    bankAccountId?: SortOrder
    transactionStatusId?: SortOrder
    creationDate?: SortOrder
    payrollCycleId?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    transactionId?: SortOrder
    accountId?: SortOrder
    requestedAmount?: SortOrder
    currencyId?: SortOrder
    bankAccountId?: SortOrder
    transactionStatusId?: SortOrder
    payrollCycleId?: SortOrder
  }

  export type usersCreateNestedManyWithoutTenantInput = {
    create?: XOR<usersCreateWithoutTenantInput, usersUncheckedCreateWithoutTenantInput> | usersCreateWithoutTenantInput[] | usersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usersCreateOrConnectWithoutTenantInput | usersCreateOrConnectWithoutTenantInput[]
    createMany?: usersCreateManyTenantInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type payrollCyclesCreateNestedManyWithoutTenantInput = {
    create?: XOR<payrollCyclesCreateWithoutTenantInput, payrollCyclesUncheckedCreateWithoutTenantInput> | payrollCyclesCreateWithoutTenantInput[] | payrollCyclesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutTenantInput | payrollCyclesCreateOrConnectWithoutTenantInput[]
    createMany?: payrollCyclesCreateManyTenantInputEnvelope
    connect?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<usersCreateWithoutTenantInput, usersUncheckedCreateWithoutTenantInput> | usersCreateWithoutTenantInput[] | usersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usersCreateOrConnectWithoutTenantInput | usersCreateOrConnectWithoutTenantInput[]
    createMany?: usersCreateManyTenantInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type payrollCyclesUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<payrollCyclesCreateWithoutTenantInput, payrollCyclesUncheckedCreateWithoutTenantInput> | payrollCyclesCreateWithoutTenantInput[] | payrollCyclesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutTenantInput | payrollCyclesCreateOrConnectWithoutTenantInput[]
    createMany?: payrollCyclesCreateManyTenantInputEnvelope
    connect?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateManyWithoutTenantNestedInput = {
    create?: XOR<usersCreateWithoutTenantInput, usersUncheckedCreateWithoutTenantInput> | usersCreateWithoutTenantInput[] | usersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usersCreateOrConnectWithoutTenantInput | usersCreateOrConnectWithoutTenantInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutTenantInput | usersUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: usersCreateManyTenantInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutTenantInput | usersUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: usersUpdateManyWithWhereWithoutTenantInput | usersUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type payrollCyclesUpdateManyWithoutTenantNestedInput = {
    create?: XOR<payrollCyclesCreateWithoutTenantInput, payrollCyclesUncheckedCreateWithoutTenantInput> | payrollCyclesCreateWithoutTenantInput[] | payrollCyclesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutTenantInput | payrollCyclesCreateOrConnectWithoutTenantInput[]
    upsert?: payrollCyclesUpsertWithWhereUniqueWithoutTenantInput | payrollCyclesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: payrollCyclesCreateManyTenantInputEnvelope
    set?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    disconnect?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    delete?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    connect?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    update?: payrollCyclesUpdateWithWhereUniqueWithoutTenantInput | payrollCyclesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: payrollCyclesUpdateManyWithWhereWithoutTenantInput | payrollCyclesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: payrollCyclesScalarWhereInput | payrollCyclesScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<usersCreateWithoutTenantInput, usersUncheckedCreateWithoutTenantInput> | usersCreateWithoutTenantInput[] | usersUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: usersCreateOrConnectWithoutTenantInput | usersCreateOrConnectWithoutTenantInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutTenantInput | usersUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: usersCreateManyTenantInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutTenantInput | usersUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: usersUpdateManyWithWhereWithoutTenantInput | usersUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type payrollCyclesUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<payrollCyclesCreateWithoutTenantInput, payrollCyclesUncheckedCreateWithoutTenantInput> | payrollCyclesCreateWithoutTenantInput[] | payrollCyclesUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutTenantInput | payrollCyclesCreateOrConnectWithoutTenantInput[]
    upsert?: payrollCyclesUpsertWithWhereUniqueWithoutTenantInput | payrollCyclesUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: payrollCyclesCreateManyTenantInputEnvelope
    set?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    disconnect?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    delete?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    connect?: payrollCyclesWhereUniqueInput | payrollCyclesWhereUniqueInput[]
    update?: payrollCyclesUpdateWithWhereUniqueWithoutTenantInput | payrollCyclesUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: payrollCyclesUpdateManyWithWhereWithoutTenantInput | payrollCyclesUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: payrollCyclesScalarWhereInput | payrollCyclesScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<usersCreateWithoutDocumentTypeInput, usersUncheckedCreateWithoutDocumentTypeInput> | usersCreateWithoutDocumentTypeInput[] | usersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDocumentTypeInput | usersCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: usersCreateManyDocumentTypeInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<usersCreateWithoutDocumentTypeInput, usersUncheckedCreateWithoutDocumentTypeInput> | usersCreateWithoutDocumentTypeInput[] | usersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDocumentTypeInput | usersCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: usersCreateManyDocumentTypeInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<usersCreateWithoutDocumentTypeInput, usersUncheckedCreateWithoutDocumentTypeInput> | usersCreateWithoutDocumentTypeInput[] | usersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDocumentTypeInput | usersCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDocumentTypeInput | usersUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: usersCreateManyDocumentTypeInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDocumentTypeInput | usersUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDocumentTypeInput | usersUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<usersCreateWithoutDocumentTypeInput, usersUncheckedCreateWithoutDocumentTypeInput> | usersCreateWithoutDocumentTypeInput[] | usersUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDocumentTypeInput | usersCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDocumentTypeInput | usersUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: usersCreateManyDocumentTypeInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDocumentTypeInput | usersUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDocumentTypeInput | usersUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type tenantsCreateNestedOneWithoutUsersInput = {
    create?: XOR<tenantsCreateWithoutUsersInput, tenantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutUsersInput
    connect?: tenantsWhereUniqueInput
  }

  export type documentTypesCreateNestedOneWithoutUsersInput = {
    create?: XOR<documentTypesCreateWithoutUsersInput, documentTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: documentTypesCreateOrConnectWithoutUsersInput
    connect?: documentTypesWhereUniqueInput
  }

  export type bankAccountsCreateNestedManyWithoutUserInput = {
    create?: XOR<bankAccountsCreateWithoutUserInput, bankAccountsUncheckedCreateWithoutUserInput> | bankAccountsCreateWithoutUserInput[] | bankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutUserInput | bankAccountsCreateOrConnectWithoutUserInput[]
    createMany?: bankAccountsCreateManyUserInputEnvelope
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
  }

  export type workRecordsCreateNestedManyWithoutUserInput = {
    create?: XOR<workRecordsCreateWithoutUserInput, workRecordsUncheckedCreateWithoutUserInput> | workRecordsCreateWithoutUserInput[] | workRecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutUserInput | workRecordsCreateOrConnectWithoutUserInput[]
    createMany?: workRecordsCreateManyUserInputEnvelope
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
  }

  export type bankAccountsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<bankAccountsCreateWithoutUserInput, bankAccountsUncheckedCreateWithoutUserInput> | bankAccountsCreateWithoutUserInput[] | bankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutUserInput | bankAccountsCreateOrConnectWithoutUserInput[]
    createMany?: bankAccountsCreateManyUserInputEnvelope
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
  }

  export type workRecordsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<workRecordsCreateWithoutUserInput, workRecordsUncheckedCreateWithoutUserInput> | workRecordsCreateWithoutUserInput[] | workRecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutUserInput | workRecordsCreateOrConnectWithoutUserInput[]
    createMany?: workRecordsCreateManyUserInputEnvelope
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type tenantsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<tenantsCreateWithoutUsersInput, tenantsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutUsersInput
    upsert?: tenantsUpsertWithoutUsersInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutUsersInput, tenantsUpdateWithoutUsersInput>, tenantsUncheckedUpdateWithoutUsersInput>
  }

  export type documentTypesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<documentTypesCreateWithoutUsersInput, documentTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: documentTypesCreateOrConnectWithoutUsersInput
    upsert?: documentTypesUpsertWithoutUsersInput
    connect?: documentTypesWhereUniqueInput
    update?: XOR<XOR<documentTypesUpdateToOneWithWhereWithoutUsersInput, documentTypesUpdateWithoutUsersInput>, documentTypesUncheckedUpdateWithoutUsersInput>
  }

  export type bankAccountsUpdateManyWithoutUserNestedInput = {
    create?: XOR<bankAccountsCreateWithoutUserInput, bankAccountsUncheckedCreateWithoutUserInput> | bankAccountsCreateWithoutUserInput[] | bankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutUserInput | bankAccountsCreateOrConnectWithoutUserInput[]
    upsert?: bankAccountsUpsertWithWhereUniqueWithoutUserInput | bankAccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bankAccountsCreateManyUserInputEnvelope
    set?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    disconnect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    delete?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    update?: bankAccountsUpdateWithWhereUniqueWithoutUserInput | bankAccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bankAccountsUpdateManyWithWhereWithoutUserInput | bankAccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
  }

  export type workRecordsUpdateManyWithoutUserNestedInput = {
    create?: XOR<workRecordsCreateWithoutUserInput, workRecordsUncheckedCreateWithoutUserInput> | workRecordsCreateWithoutUserInput[] | workRecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutUserInput | workRecordsCreateOrConnectWithoutUserInput[]
    upsert?: workRecordsUpsertWithWhereUniqueWithoutUserInput | workRecordsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workRecordsCreateManyUserInputEnvelope
    set?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    disconnect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    delete?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    update?: workRecordsUpdateWithWhereUniqueWithoutUserInput | workRecordsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workRecordsUpdateManyWithWhereWithoutUserInput | workRecordsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workRecordsScalarWhereInput | workRecordsScalarWhereInput[]
  }

  export type bankAccountsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<bankAccountsCreateWithoutUserInput, bankAccountsUncheckedCreateWithoutUserInput> | bankAccountsCreateWithoutUserInput[] | bankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutUserInput | bankAccountsCreateOrConnectWithoutUserInput[]
    upsert?: bankAccountsUpsertWithWhereUniqueWithoutUserInput | bankAccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: bankAccountsCreateManyUserInputEnvelope
    set?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    disconnect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    delete?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    update?: bankAccountsUpdateWithWhereUniqueWithoutUserInput | bankAccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: bankAccountsUpdateManyWithWhereWithoutUserInput | bankAccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
  }

  export type workRecordsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<workRecordsCreateWithoutUserInput, workRecordsUncheckedCreateWithoutUserInput> | workRecordsCreateWithoutUserInput[] | workRecordsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutUserInput | workRecordsCreateOrConnectWithoutUserInput[]
    upsert?: workRecordsUpsertWithWhereUniqueWithoutUserInput | workRecordsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workRecordsCreateManyUserInputEnvelope
    set?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    disconnect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    delete?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    update?: workRecordsUpdateWithWhereUniqueWithoutUserInput | workRecordsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workRecordsUpdateManyWithWhereWithoutUserInput | workRecordsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workRecordsScalarWhereInput | workRecordsScalarWhereInput[]
  }

  export type bankAccountsCreateNestedManyWithoutBankAccountTypeInput = {
    create?: XOR<bankAccountsCreateWithoutBankAccountTypeInput, bankAccountsUncheckedCreateWithoutBankAccountTypeInput> | bankAccountsCreateWithoutBankAccountTypeInput[] | bankAccountsUncheckedCreateWithoutBankAccountTypeInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankAccountTypeInput | bankAccountsCreateOrConnectWithoutBankAccountTypeInput[]
    createMany?: bankAccountsCreateManyBankAccountTypeInputEnvelope
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
  }

  export type bankAccountsUncheckedCreateNestedManyWithoutBankAccountTypeInput = {
    create?: XOR<bankAccountsCreateWithoutBankAccountTypeInput, bankAccountsUncheckedCreateWithoutBankAccountTypeInput> | bankAccountsCreateWithoutBankAccountTypeInput[] | bankAccountsUncheckedCreateWithoutBankAccountTypeInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankAccountTypeInput | bankAccountsCreateOrConnectWithoutBankAccountTypeInput[]
    createMany?: bankAccountsCreateManyBankAccountTypeInputEnvelope
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
  }

  export type bankAccountsUpdateManyWithoutBankAccountTypeNestedInput = {
    create?: XOR<bankAccountsCreateWithoutBankAccountTypeInput, bankAccountsUncheckedCreateWithoutBankAccountTypeInput> | bankAccountsCreateWithoutBankAccountTypeInput[] | bankAccountsUncheckedCreateWithoutBankAccountTypeInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankAccountTypeInput | bankAccountsCreateOrConnectWithoutBankAccountTypeInput[]
    upsert?: bankAccountsUpsertWithWhereUniqueWithoutBankAccountTypeInput | bankAccountsUpsertWithWhereUniqueWithoutBankAccountTypeInput[]
    createMany?: bankAccountsCreateManyBankAccountTypeInputEnvelope
    set?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    disconnect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    delete?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    update?: bankAccountsUpdateWithWhereUniqueWithoutBankAccountTypeInput | bankAccountsUpdateWithWhereUniqueWithoutBankAccountTypeInput[]
    updateMany?: bankAccountsUpdateManyWithWhereWithoutBankAccountTypeInput | bankAccountsUpdateManyWithWhereWithoutBankAccountTypeInput[]
    deleteMany?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
  }

  export type bankAccountsUncheckedUpdateManyWithoutBankAccountTypeNestedInput = {
    create?: XOR<bankAccountsCreateWithoutBankAccountTypeInput, bankAccountsUncheckedCreateWithoutBankAccountTypeInput> | bankAccountsCreateWithoutBankAccountTypeInput[] | bankAccountsUncheckedCreateWithoutBankAccountTypeInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankAccountTypeInput | bankAccountsCreateOrConnectWithoutBankAccountTypeInput[]
    upsert?: bankAccountsUpsertWithWhereUniqueWithoutBankAccountTypeInput | bankAccountsUpsertWithWhereUniqueWithoutBankAccountTypeInput[]
    createMany?: bankAccountsCreateManyBankAccountTypeInputEnvelope
    set?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    disconnect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    delete?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    update?: bankAccountsUpdateWithWhereUniqueWithoutBankAccountTypeInput | bankAccountsUpdateWithWhereUniqueWithoutBankAccountTypeInput[]
    updateMany?: bankAccountsUpdateManyWithWhereWithoutBankAccountTypeInput | bankAccountsUpdateManyWithWhereWithoutBankAccountTypeInput[]
    deleteMany?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
  }

  export type bankAccountsCreateNestedManyWithoutBankInput = {
    create?: XOR<bankAccountsCreateWithoutBankInput, bankAccountsUncheckedCreateWithoutBankInput> | bankAccountsCreateWithoutBankInput[] | bankAccountsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankInput | bankAccountsCreateOrConnectWithoutBankInput[]
    createMany?: bankAccountsCreateManyBankInputEnvelope
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
  }

  export type bankAccountsUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<bankAccountsCreateWithoutBankInput, bankAccountsUncheckedCreateWithoutBankInput> | bankAccountsCreateWithoutBankInput[] | bankAccountsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankInput | bankAccountsCreateOrConnectWithoutBankInput[]
    createMany?: bankAccountsCreateManyBankInputEnvelope
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
  }

  export type bankAccountsUpdateManyWithoutBankNestedInput = {
    create?: XOR<bankAccountsCreateWithoutBankInput, bankAccountsUncheckedCreateWithoutBankInput> | bankAccountsCreateWithoutBankInput[] | bankAccountsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankInput | bankAccountsCreateOrConnectWithoutBankInput[]
    upsert?: bankAccountsUpsertWithWhereUniqueWithoutBankInput | bankAccountsUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: bankAccountsCreateManyBankInputEnvelope
    set?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    disconnect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    delete?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    update?: bankAccountsUpdateWithWhereUniqueWithoutBankInput | bankAccountsUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: bankAccountsUpdateManyWithWhereWithoutBankInput | bankAccountsUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
  }

  export type bankAccountsUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<bankAccountsCreateWithoutBankInput, bankAccountsUncheckedCreateWithoutBankInput> | bankAccountsCreateWithoutBankInput[] | bankAccountsUncheckedCreateWithoutBankInput[]
    connectOrCreate?: bankAccountsCreateOrConnectWithoutBankInput | bankAccountsCreateOrConnectWithoutBankInput[]
    upsert?: bankAccountsUpsertWithWhereUniqueWithoutBankInput | bankAccountsUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: bankAccountsCreateManyBankInputEnvelope
    set?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    disconnect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    delete?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    connect?: bankAccountsWhereUniqueInput | bankAccountsWhereUniqueInput[]
    update?: bankAccountsUpdateWithWhereUniqueWithoutBankInput | bankAccountsUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: bankAccountsUpdateManyWithWhereWithoutBankInput | bankAccountsUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
  }

  export type bankAccountTypesCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<bankAccountTypesCreateWithoutBankAccountsInput, bankAccountTypesUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: bankAccountTypesCreateOrConnectWithoutBankAccountsInput
    connect?: bankAccountTypesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<usersCreateWithoutBankAccountsInput, usersUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBankAccountsInput
    connect?: usersWhereUniqueInput
  }

  export type banksCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<banksCreateWithoutBankAccountsInput, banksUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: banksCreateOrConnectWithoutBankAccountsInput
    connect?: banksWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<transactionsCreateWithoutBankAccountInput, transactionsUncheckedCreateWithoutBankAccountInput> | transactionsCreateWithoutBankAccountInput[] | transactionsUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBankAccountInput | transactionsCreateOrConnectWithoutBankAccountInput[]
    createMany?: transactionsCreateManyBankAccountInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<transactionsCreateWithoutBankAccountInput, transactionsUncheckedCreateWithoutBankAccountInput> | transactionsCreateWithoutBankAccountInput[] | transactionsUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBankAccountInput | transactionsCreateOrConnectWithoutBankAccountInput[]
    createMany?: transactionsCreateManyBankAccountInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type bankAccountTypesUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<bankAccountTypesCreateWithoutBankAccountsInput, bankAccountTypesUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: bankAccountTypesCreateOrConnectWithoutBankAccountsInput
    upsert?: bankAccountTypesUpsertWithoutBankAccountsInput
    connect?: bankAccountTypesWhereUniqueInput
    update?: XOR<XOR<bankAccountTypesUpdateToOneWithWhereWithoutBankAccountsInput, bankAccountTypesUpdateWithoutBankAccountsInput>, bankAccountTypesUncheckedUpdateWithoutBankAccountsInput>
  }

  export type usersUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<usersCreateWithoutBankAccountsInput, usersUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: usersCreateOrConnectWithoutBankAccountsInput
    upsert?: usersUpsertWithoutBankAccountsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBankAccountsInput, usersUpdateWithoutBankAccountsInput>, usersUncheckedUpdateWithoutBankAccountsInput>
  }

  export type banksUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<banksCreateWithoutBankAccountsInput, banksUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: banksCreateOrConnectWithoutBankAccountsInput
    upsert?: banksUpsertWithoutBankAccountsInput
    connect?: banksWhereUniqueInput
    update?: XOR<XOR<banksUpdateToOneWithWhereWithoutBankAccountsInput, banksUpdateWithoutBankAccountsInput>, banksUncheckedUpdateWithoutBankAccountsInput>
  }

  export type transactionsUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<transactionsCreateWithoutBankAccountInput, transactionsUncheckedCreateWithoutBankAccountInput> | transactionsCreateWithoutBankAccountInput[] | transactionsUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBankAccountInput | transactionsCreateOrConnectWithoutBankAccountInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutBankAccountInput | transactionsUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: transactionsCreateManyBankAccountInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutBankAccountInput | transactionsUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutBankAccountInput | transactionsUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<transactionsCreateWithoutBankAccountInput, transactionsUncheckedCreateWithoutBankAccountInput> | transactionsCreateWithoutBankAccountInput[] | transactionsUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutBankAccountInput | transactionsCreateOrConnectWithoutBankAccountInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutBankAccountInput | transactionsUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: transactionsCreateManyBankAccountInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutBankAccountInput | transactionsUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutBankAccountInput | transactionsUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsCreateNestedManyWithoutTransactionStatusInput = {
    create?: XOR<transactionsCreateWithoutTransactionStatusInput, transactionsUncheckedCreateWithoutTransactionStatusInput> | transactionsCreateWithoutTransactionStatusInput[] | transactionsUncheckedCreateWithoutTransactionStatusInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransactionStatusInput | transactionsCreateOrConnectWithoutTransactionStatusInput[]
    createMany?: transactionsCreateManyTransactionStatusInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutTransactionStatusInput = {
    create?: XOR<transactionsCreateWithoutTransactionStatusInput, transactionsUncheckedCreateWithoutTransactionStatusInput> | transactionsCreateWithoutTransactionStatusInput[] | transactionsUncheckedCreateWithoutTransactionStatusInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransactionStatusInput | transactionsCreateOrConnectWithoutTransactionStatusInput[]
    createMany?: transactionsCreateManyTransactionStatusInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUpdateManyWithoutTransactionStatusNestedInput = {
    create?: XOR<transactionsCreateWithoutTransactionStatusInput, transactionsUncheckedCreateWithoutTransactionStatusInput> | transactionsCreateWithoutTransactionStatusInput[] | transactionsUncheckedCreateWithoutTransactionStatusInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransactionStatusInput | transactionsCreateOrConnectWithoutTransactionStatusInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutTransactionStatusInput | transactionsUpsertWithWhereUniqueWithoutTransactionStatusInput[]
    createMany?: transactionsCreateManyTransactionStatusInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutTransactionStatusInput | transactionsUpdateWithWhereUniqueWithoutTransactionStatusInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutTransactionStatusInput | transactionsUpdateManyWithWhereWithoutTransactionStatusInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutTransactionStatusNestedInput = {
    create?: XOR<transactionsCreateWithoutTransactionStatusInput, transactionsUncheckedCreateWithoutTransactionStatusInput> | transactionsCreateWithoutTransactionStatusInput[] | transactionsUncheckedCreateWithoutTransactionStatusInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutTransactionStatusInput | transactionsCreateOrConnectWithoutTransactionStatusInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutTransactionStatusInput | transactionsUpsertWithWhereUniqueWithoutTransactionStatusInput[]
    createMany?: transactionsCreateManyTransactionStatusInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutTransactionStatusInput | transactionsUpdateWithWhereUniqueWithoutTransactionStatusInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutTransactionStatusInput | transactionsUpdateManyWithWhereWithoutTransactionStatusInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<transactionsCreateWithoutCurrencyInput, transactionsUncheckedCreateWithoutCurrencyInput> | transactionsCreateWithoutCurrencyInput[] | transactionsUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCurrencyInput | transactionsCreateOrConnectWithoutCurrencyInput[]
    createMany?: transactionsCreateManyCurrencyInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutCurrencyInput = {
    create?: XOR<transactionsCreateWithoutCurrencyInput, transactionsUncheckedCreateWithoutCurrencyInput> | transactionsCreateWithoutCurrencyInput[] | transactionsUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCurrencyInput | transactionsCreateOrConnectWithoutCurrencyInput[]
    createMany?: transactionsCreateManyCurrencyInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<transactionsCreateWithoutCurrencyInput, transactionsUncheckedCreateWithoutCurrencyInput> | transactionsCreateWithoutCurrencyInput[] | transactionsUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCurrencyInput | transactionsCreateOrConnectWithoutCurrencyInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutCurrencyInput | transactionsUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: transactionsCreateManyCurrencyInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutCurrencyInput | transactionsUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutCurrencyInput | transactionsUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutCurrencyNestedInput = {
    create?: XOR<transactionsCreateWithoutCurrencyInput, transactionsUncheckedCreateWithoutCurrencyInput> | transactionsCreateWithoutCurrencyInput[] | transactionsUncheckedCreateWithoutCurrencyInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutCurrencyInput | transactionsCreateOrConnectWithoutCurrencyInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutCurrencyInput | transactionsUpsertWithWhereUniqueWithoutCurrencyInput[]
    createMany?: transactionsCreateManyCurrencyInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutCurrencyInput | transactionsUpdateWithWhereUniqueWithoutCurrencyInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutCurrencyInput | transactionsUpdateManyWithWhereWithoutCurrencyInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsCreateNestedManyWithoutAccountInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUpdateManyWithoutAccountNestedInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutAccountInput | transactionsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutAccountInput | transactionsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutAccountInput | transactionsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput> | transactionsCreateWithoutAccountInput[] | transactionsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountInput | transactionsCreateOrConnectWithoutAccountInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutAccountInput | transactionsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: transactionsCreateManyAccountInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutAccountInput | transactionsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutAccountInput | transactionsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type tenantsCreateNestedOneWithoutPayrollCyclesInput = {
    create?: XOR<tenantsCreateWithoutPayrollCyclesInput, tenantsUncheckedCreateWithoutPayrollCyclesInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutPayrollCyclesInput
    connect?: tenantsWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutPayrollCycleInput = {
    create?: XOR<transactionsCreateWithoutPayrollCycleInput, transactionsUncheckedCreateWithoutPayrollCycleInput> | transactionsCreateWithoutPayrollCycleInput[] | transactionsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayrollCycleInput | transactionsCreateOrConnectWithoutPayrollCycleInput[]
    createMany?: transactionsCreateManyPayrollCycleInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type workRecordsCreateNestedManyWithoutPayrollCycleInput = {
    create?: XOR<workRecordsCreateWithoutPayrollCycleInput, workRecordsUncheckedCreateWithoutPayrollCycleInput> | workRecordsCreateWithoutPayrollCycleInput[] | workRecordsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutPayrollCycleInput | workRecordsCreateOrConnectWithoutPayrollCycleInput[]
    createMany?: workRecordsCreateManyPayrollCycleInputEnvelope
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutPayrollCycleInput = {
    create?: XOR<transactionsCreateWithoutPayrollCycleInput, transactionsUncheckedCreateWithoutPayrollCycleInput> | transactionsCreateWithoutPayrollCycleInput[] | transactionsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayrollCycleInput | transactionsCreateOrConnectWithoutPayrollCycleInput[]
    createMany?: transactionsCreateManyPayrollCycleInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type workRecordsUncheckedCreateNestedManyWithoutPayrollCycleInput = {
    create?: XOR<workRecordsCreateWithoutPayrollCycleInput, workRecordsUncheckedCreateWithoutPayrollCycleInput> | workRecordsCreateWithoutPayrollCycleInput[] | workRecordsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutPayrollCycleInput | workRecordsCreateOrConnectWithoutPayrollCycleInput[]
    createMany?: workRecordsCreateManyPayrollCycleInputEnvelope
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
  }

  export type tenantsUpdateOneRequiredWithoutPayrollCyclesNestedInput = {
    create?: XOR<tenantsCreateWithoutPayrollCyclesInput, tenantsUncheckedCreateWithoutPayrollCyclesInput>
    connectOrCreate?: tenantsCreateOrConnectWithoutPayrollCyclesInput
    upsert?: tenantsUpsertWithoutPayrollCyclesInput
    connect?: tenantsWhereUniqueInput
    update?: XOR<XOR<tenantsUpdateToOneWithWhereWithoutPayrollCyclesInput, tenantsUpdateWithoutPayrollCyclesInput>, tenantsUncheckedUpdateWithoutPayrollCyclesInput>
  }

  export type transactionsUpdateManyWithoutPayrollCycleNestedInput = {
    create?: XOR<transactionsCreateWithoutPayrollCycleInput, transactionsUncheckedCreateWithoutPayrollCycleInput> | transactionsCreateWithoutPayrollCycleInput[] | transactionsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayrollCycleInput | transactionsCreateOrConnectWithoutPayrollCycleInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutPayrollCycleInput | transactionsUpsertWithWhereUniqueWithoutPayrollCycleInput[]
    createMany?: transactionsCreateManyPayrollCycleInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutPayrollCycleInput | transactionsUpdateWithWhereUniqueWithoutPayrollCycleInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutPayrollCycleInput | transactionsUpdateManyWithWhereWithoutPayrollCycleInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type workRecordsUpdateManyWithoutPayrollCycleNestedInput = {
    create?: XOR<workRecordsCreateWithoutPayrollCycleInput, workRecordsUncheckedCreateWithoutPayrollCycleInput> | workRecordsCreateWithoutPayrollCycleInput[] | workRecordsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutPayrollCycleInput | workRecordsCreateOrConnectWithoutPayrollCycleInput[]
    upsert?: workRecordsUpsertWithWhereUniqueWithoutPayrollCycleInput | workRecordsUpsertWithWhereUniqueWithoutPayrollCycleInput[]
    createMany?: workRecordsCreateManyPayrollCycleInputEnvelope
    set?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    disconnect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    delete?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    update?: workRecordsUpdateWithWhereUniqueWithoutPayrollCycleInput | workRecordsUpdateWithWhereUniqueWithoutPayrollCycleInput[]
    updateMany?: workRecordsUpdateManyWithWhereWithoutPayrollCycleInput | workRecordsUpdateManyWithWhereWithoutPayrollCycleInput[]
    deleteMany?: workRecordsScalarWhereInput | workRecordsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutPayrollCycleNestedInput = {
    create?: XOR<transactionsCreateWithoutPayrollCycleInput, transactionsUncheckedCreateWithoutPayrollCycleInput> | transactionsCreateWithoutPayrollCycleInput[] | transactionsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayrollCycleInput | transactionsCreateOrConnectWithoutPayrollCycleInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutPayrollCycleInput | transactionsUpsertWithWhereUniqueWithoutPayrollCycleInput[]
    createMany?: transactionsCreateManyPayrollCycleInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutPayrollCycleInput | transactionsUpdateWithWhereUniqueWithoutPayrollCycleInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutPayrollCycleInput | transactionsUpdateManyWithWhereWithoutPayrollCycleInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type workRecordsUncheckedUpdateManyWithoutPayrollCycleNestedInput = {
    create?: XOR<workRecordsCreateWithoutPayrollCycleInput, workRecordsUncheckedCreateWithoutPayrollCycleInput> | workRecordsCreateWithoutPayrollCycleInput[] | workRecordsUncheckedCreateWithoutPayrollCycleInput[]
    connectOrCreate?: workRecordsCreateOrConnectWithoutPayrollCycleInput | workRecordsCreateOrConnectWithoutPayrollCycleInput[]
    upsert?: workRecordsUpsertWithWhereUniqueWithoutPayrollCycleInput | workRecordsUpsertWithWhereUniqueWithoutPayrollCycleInput[]
    createMany?: workRecordsCreateManyPayrollCycleInputEnvelope
    set?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    disconnect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    delete?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    connect?: workRecordsWhereUniqueInput | workRecordsWhereUniqueInput[]
    update?: workRecordsUpdateWithWhereUniqueWithoutPayrollCycleInput | workRecordsUpdateWithWhereUniqueWithoutPayrollCycleInput[]
    updateMany?: workRecordsUpdateManyWithWhereWithoutPayrollCycleInput | workRecordsUpdateManyWithWhereWithoutPayrollCycleInput[]
    deleteMany?: workRecordsScalarWhereInput | workRecordsScalarWhereInput[]
  }

  export type payrollCyclesCreateNestedOneWithoutWorkRecordsInput = {
    create?: XOR<payrollCyclesCreateWithoutWorkRecordsInput, payrollCyclesUncheckedCreateWithoutWorkRecordsInput>
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutWorkRecordsInput
    connect?: payrollCyclesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutWorkRecordsInput = {
    create?: XOR<usersCreateWithoutWorkRecordsInput, usersUncheckedCreateWithoutWorkRecordsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkRecordsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type payrollCyclesUpdateOneRequiredWithoutWorkRecordsNestedInput = {
    create?: XOR<payrollCyclesCreateWithoutWorkRecordsInput, payrollCyclesUncheckedCreateWithoutWorkRecordsInput>
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutWorkRecordsInput
    upsert?: payrollCyclesUpsertWithoutWorkRecordsInput
    connect?: payrollCyclesWhereUniqueInput
    update?: XOR<XOR<payrollCyclesUpdateToOneWithWhereWithoutWorkRecordsInput, payrollCyclesUpdateWithoutWorkRecordsInput>, payrollCyclesUncheckedUpdateWithoutWorkRecordsInput>
  }

  export type usersUpdateOneRequiredWithoutWorkRecordsNestedInput = {
    create?: XOR<usersCreateWithoutWorkRecordsInput, usersUncheckedCreateWithoutWorkRecordsInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkRecordsInput
    upsert?: usersUpsertWithoutWorkRecordsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkRecordsInput, usersUpdateWithoutWorkRecordsInput>, usersUncheckedUpdateWithoutWorkRecordsInput>
  }

  export type accountsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransactionsInput
    connect?: accountsWhereUniqueInput
  }

  export type currenciesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<currenciesCreateWithoutTransactionsInput, currenciesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutTransactionsInput
    connect?: currenciesWhereUniqueInput
  }

  export type bankAccountsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<bankAccountsCreateWithoutTransactionsInput, bankAccountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: bankAccountsCreateOrConnectWithoutTransactionsInput
    connect?: bankAccountsWhereUniqueInput
  }

  export type transactionStatusCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<transactionStatusCreateWithoutTransactionsInput, transactionStatusUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: transactionStatusCreateOrConnectWithoutTransactionsInput
    connect?: transactionStatusWhereUniqueInput
  }

  export type payrollCyclesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<payrollCyclesCreateWithoutTransactionsInput, payrollCyclesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutTransactionsInput
    connect?: payrollCyclesWhereUniqueInput
  }

  export type accountsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransactionsInput
    upsert?: accountsUpsertWithoutTransactionsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutTransactionsInput, accountsUpdateWithoutTransactionsInput>, accountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type currenciesUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<currenciesCreateWithoutTransactionsInput, currenciesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: currenciesCreateOrConnectWithoutTransactionsInput
    upsert?: currenciesUpsertWithoutTransactionsInput
    connect?: currenciesWhereUniqueInput
    update?: XOR<XOR<currenciesUpdateToOneWithWhereWithoutTransactionsInput, currenciesUpdateWithoutTransactionsInput>, currenciesUncheckedUpdateWithoutTransactionsInput>
  }

  export type bankAccountsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<bankAccountsCreateWithoutTransactionsInput, bankAccountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: bankAccountsCreateOrConnectWithoutTransactionsInput
    upsert?: bankAccountsUpsertWithoutTransactionsInput
    connect?: bankAccountsWhereUniqueInput
    update?: XOR<XOR<bankAccountsUpdateToOneWithWhereWithoutTransactionsInput, bankAccountsUpdateWithoutTransactionsInput>, bankAccountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type transactionStatusUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<transactionStatusCreateWithoutTransactionsInput, transactionStatusUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: transactionStatusCreateOrConnectWithoutTransactionsInput
    upsert?: transactionStatusUpsertWithoutTransactionsInput
    connect?: transactionStatusWhereUniqueInput
    update?: XOR<XOR<transactionStatusUpdateToOneWithWhereWithoutTransactionsInput, transactionStatusUpdateWithoutTransactionsInput>, transactionStatusUncheckedUpdateWithoutTransactionsInput>
  }

  export type payrollCyclesUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<payrollCyclesCreateWithoutTransactionsInput, payrollCyclesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: payrollCyclesCreateOrConnectWithoutTransactionsInput
    upsert?: payrollCyclesUpsertWithoutTransactionsInput
    connect?: payrollCyclesWhereUniqueInput
    update?: XOR<XOR<payrollCyclesUpdateToOneWithWhereWithoutTransactionsInput, payrollCyclesUpdateWithoutTransactionsInput>, payrollCyclesUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutTenantInput = {
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    documentType: documentTypesCreateNestedOneWithoutUsersInput
    bankAccounts?: bankAccountsCreateNestedManyWithoutUserInput
    workRecords?: workRecordsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutTenantInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    documentTypeId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    bankAccounts?: bankAccountsUncheckedCreateNestedManyWithoutUserInput
    workRecords?: workRecordsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutTenantInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTenantInput, usersUncheckedCreateWithoutTenantInput>
  }

  export type usersCreateManyTenantInputEnvelope = {
    data: usersCreateManyTenantInput | usersCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type payrollCyclesCreateWithoutTenantInput = {
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    transactions?: transactionsCreateNestedManyWithoutPayrollCycleInput
    workRecords?: workRecordsCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesUncheckedCreateWithoutTenantInput = {
    payrollCycleId?: number
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutPayrollCycleInput
    workRecords?: workRecordsUncheckedCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesCreateOrConnectWithoutTenantInput = {
    where: payrollCyclesWhereUniqueInput
    create: XOR<payrollCyclesCreateWithoutTenantInput, payrollCyclesUncheckedCreateWithoutTenantInput>
  }

  export type payrollCyclesCreateManyTenantInputEnvelope = {
    data: payrollCyclesCreateManyTenantInput | payrollCyclesCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutTenantInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutTenantInput, usersUncheckedUpdateWithoutTenantInput>
    create: XOR<usersCreateWithoutTenantInput, usersUncheckedCreateWithoutTenantInput>
  }

  export type usersUpdateWithWhereUniqueWithoutTenantInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutTenantInput, usersUncheckedUpdateWithoutTenantInput>
  }

  export type usersUpdateManyWithWhereWithoutTenantInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutTenantInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    userId?: IntFilter<"users"> | number
    documentNumber?: StringFilter<"users"> | string
    firstName?: StringFilter<"users"> | string
    lastName?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    phoneNumber?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    activated?: BoolFilter<"users"> | boolean
    tenantId?: IntFilter<"users"> | number
    documentTypeId?: IntFilter<"users"> | number
    wageRate?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFilter<"users"> | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFilter<"users"> | Date | string
  }

  export type payrollCyclesUpsertWithWhereUniqueWithoutTenantInput = {
    where: payrollCyclesWhereUniqueInput
    update: XOR<payrollCyclesUpdateWithoutTenantInput, payrollCyclesUncheckedUpdateWithoutTenantInput>
    create: XOR<payrollCyclesCreateWithoutTenantInput, payrollCyclesUncheckedCreateWithoutTenantInput>
  }

  export type payrollCyclesUpdateWithWhereUniqueWithoutTenantInput = {
    where: payrollCyclesWhereUniqueInput
    data: XOR<payrollCyclesUpdateWithoutTenantInput, payrollCyclesUncheckedUpdateWithoutTenantInput>
  }

  export type payrollCyclesUpdateManyWithWhereWithoutTenantInput = {
    where: payrollCyclesScalarWhereInput
    data: XOR<payrollCyclesUpdateManyMutationInput, payrollCyclesUncheckedUpdateManyWithoutTenantInput>
  }

  export type payrollCyclesScalarWhereInput = {
    AND?: payrollCyclesScalarWhereInput | payrollCyclesScalarWhereInput[]
    OR?: payrollCyclesScalarWhereInput[]
    NOT?: payrollCyclesScalarWhereInput | payrollCyclesScalarWhereInput[]
    payrollCycleId?: IntFilter<"payrollCycles"> | number
    tenantId?: IntFilter<"payrollCycles"> | number
    initDate?: DateTimeFilter<"payrollCycles"> | Date | string
    endDate?: DateTimeFilter<"payrollCycles"> | Date | string
    totalGrossEarning?: DecimalFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFilter<"payrollCycles"> | Decimal | DecimalJsLike | number | string
    transactionId?: IntFilter<"payrollCycles"> | number
  }

  export type usersCreateWithoutDocumentTypeInput = {
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    tenant: tenantsCreateNestedOneWithoutUsersInput
    bankAccounts?: bankAccountsCreateNestedManyWithoutUserInput
    workRecords?: workRecordsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutDocumentTypeInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    tenantId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    bankAccounts?: bankAccountsUncheckedCreateNestedManyWithoutUserInput
    workRecords?: workRecordsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutDocumentTypeInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDocumentTypeInput, usersUncheckedCreateWithoutDocumentTypeInput>
  }

  export type usersCreateManyDocumentTypeInputEnvelope = {
    data: usersCreateManyDocumentTypeInput | usersCreateManyDocumentTypeInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutDocumentTypeInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutDocumentTypeInput, usersUncheckedUpdateWithoutDocumentTypeInput>
    create: XOR<usersCreateWithoutDocumentTypeInput, usersUncheckedCreateWithoutDocumentTypeInput>
  }

  export type usersUpdateWithWhereUniqueWithoutDocumentTypeInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutDocumentTypeInput, usersUncheckedUpdateWithoutDocumentTypeInput>
  }

  export type usersUpdateManyWithWhereWithoutDocumentTypeInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutDocumentTypeInput>
  }

  export type tenantsCreateWithoutUsersInput = {
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate?: Date | string
    payrollCycles?: payrollCyclesCreateNestedManyWithoutTenantInput
  }

  export type tenantsUncheckedCreateWithoutUsersInput = {
    tenantId?: number
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate?: Date | string
    payrollCycles?: payrollCyclesUncheckedCreateNestedManyWithoutTenantInput
  }

  export type tenantsCreateOrConnectWithoutUsersInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutUsersInput, tenantsUncheckedCreateWithoutUsersInput>
  }

  export type documentTypesCreateWithoutUsersInput = {
    name: string
    code?: string | null
    creationDate?: Date | string
  }

  export type documentTypesUncheckedCreateWithoutUsersInput = {
    documentTypeId?: number
    name: string
    code?: string | null
    creationDate?: Date | string
  }

  export type documentTypesCreateOrConnectWithoutUsersInput = {
    where: documentTypesWhereUniqueInput
    create: XOR<documentTypesCreateWithoutUsersInput, documentTypesUncheckedCreateWithoutUsersInput>
  }

  export type bankAccountsCreateWithoutUserInput = {
    number: string
    creationDate?: Date | string
    bankAccountType: bankAccountTypesCreateNestedOneWithoutBankAccountsInput
    bank: banksCreateNestedOneWithoutBankAccountsInput
    transactions?: transactionsCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsUncheckedCreateWithoutUserInput = {
    bankAccountId?: number
    number: string
    bankAccountTypeId: number
    creationDate?: Date | string
    bankId: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsCreateOrConnectWithoutUserInput = {
    where: bankAccountsWhereUniqueInput
    create: XOR<bankAccountsCreateWithoutUserInput, bankAccountsUncheckedCreateWithoutUserInput>
  }

  export type bankAccountsCreateManyUserInputEnvelope = {
    data: bankAccountsCreateManyUserInput | bankAccountsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type workRecordsCreateWithoutUserInput = {
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
    payrollCycle: payrollCyclesCreateNestedOneWithoutWorkRecordsInput
  }

  export type workRecordsUncheckedCreateWithoutUserInput = {
    workRecordId?: number
    payrollCycleId: number
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
  }

  export type workRecordsCreateOrConnectWithoutUserInput = {
    where: workRecordsWhereUniqueInput
    create: XOR<workRecordsCreateWithoutUserInput, workRecordsUncheckedCreateWithoutUserInput>
  }

  export type workRecordsCreateManyUserInputEnvelope = {
    data: workRecordsCreateManyUserInput | workRecordsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tenantsUpsertWithoutUsersInput = {
    update: XOR<tenantsUpdateWithoutUsersInput, tenantsUncheckedUpdateWithoutUsersInput>
    create: XOR<tenantsCreateWithoutUsersInput, tenantsUncheckedCreateWithoutUsersInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutUsersInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutUsersInput, tenantsUncheckedUpdateWithoutUsersInput>
  }

  export type tenantsUpdateWithoutUsersInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycles?: payrollCyclesUpdateManyWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateWithoutUsersInput = {
    tenantId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycles?: payrollCyclesUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type documentTypesUpsertWithoutUsersInput = {
    update: XOR<documentTypesUpdateWithoutUsersInput, documentTypesUncheckedUpdateWithoutUsersInput>
    create: XOR<documentTypesCreateWithoutUsersInput, documentTypesUncheckedCreateWithoutUsersInput>
    where?: documentTypesWhereInput
  }

  export type documentTypesUpdateToOneWithWhereWithoutUsersInput = {
    where?: documentTypesWhereInput
    data: XOR<documentTypesUpdateWithoutUsersInput, documentTypesUncheckedUpdateWithoutUsersInput>
  }

  export type documentTypesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type documentTypesUncheckedUpdateWithoutUsersInput = {
    documentTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountsUpsertWithWhereUniqueWithoutUserInput = {
    where: bankAccountsWhereUniqueInput
    update: XOR<bankAccountsUpdateWithoutUserInput, bankAccountsUncheckedUpdateWithoutUserInput>
    create: XOR<bankAccountsCreateWithoutUserInput, bankAccountsUncheckedCreateWithoutUserInput>
  }

  export type bankAccountsUpdateWithWhereUniqueWithoutUserInput = {
    where: bankAccountsWhereUniqueInput
    data: XOR<bankAccountsUpdateWithoutUserInput, bankAccountsUncheckedUpdateWithoutUserInput>
  }

  export type bankAccountsUpdateManyWithWhereWithoutUserInput = {
    where: bankAccountsScalarWhereInput
    data: XOR<bankAccountsUpdateManyMutationInput, bankAccountsUncheckedUpdateManyWithoutUserInput>
  }

  export type bankAccountsScalarWhereInput = {
    AND?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
    OR?: bankAccountsScalarWhereInput[]
    NOT?: bankAccountsScalarWhereInput | bankAccountsScalarWhereInput[]
    bankAccountId?: IntFilter<"bankAccounts"> | number
    number?: StringFilter<"bankAccounts"> | string
    bankAccountTypeId?: IntFilter<"bankAccounts"> | number
    creationDate?: DateTimeFilter<"bankAccounts"> | Date | string
    userId?: IntFilter<"bankAccounts"> | number
    bankId?: IntFilter<"bankAccounts"> | number
  }

  export type workRecordsUpsertWithWhereUniqueWithoutUserInput = {
    where: workRecordsWhereUniqueInput
    update: XOR<workRecordsUpdateWithoutUserInput, workRecordsUncheckedUpdateWithoutUserInput>
    create: XOR<workRecordsCreateWithoutUserInput, workRecordsUncheckedCreateWithoutUserInput>
  }

  export type workRecordsUpdateWithWhereUniqueWithoutUserInput = {
    where: workRecordsWhereUniqueInput
    data: XOR<workRecordsUpdateWithoutUserInput, workRecordsUncheckedUpdateWithoutUserInput>
  }

  export type workRecordsUpdateManyWithWhereWithoutUserInput = {
    where: workRecordsScalarWhereInput
    data: XOR<workRecordsUpdateManyMutationInput, workRecordsUncheckedUpdateManyWithoutUserInput>
  }

  export type workRecordsScalarWhereInput = {
    AND?: workRecordsScalarWhereInput | workRecordsScalarWhereInput[]
    OR?: workRecordsScalarWhereInput[]
    NOT?: workRecordsScalarWhereInput | workRecordsScalarWhereInput[]
    workRecordId?: IntFilter<"workRecords"> | number
    payrollCycleId?: IntFilter<"workRecords"> | number
    userId?: IntFilter<"workRecords"> | number
    startTime?: DateTimeNullableFilter<"workRecords"> | Date | string | null
    endTime?: DateTimeNullableFilter<"workRecords"> | Date | string | null
    totalHoursWorked?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFilter<"workRecords"> | Decimal | DecimalJsLike | number | string
  }

  export type bankAccountsCreateWithoutBankAccountTypeInput = {
    number: string
    creationDate?: Date | string
    user: usersCreateNestedOneWithoutBankAccountsInput
    bank: banksCreateNestedOneWithoutBankAccountsInput
    transactions?: transactionsCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsUncheckedCreateWithoutBankAccountTypeInput = {
    bankAccountId?: number
    number: string
    creationDate?: Date | string
    userId: number
    bankId: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsCreateOrConnectWithoutBankAccountTypeInput = {
    where: bankAccountsWhereUniqueInput
    create: XOR<bankAccountsCreateWithoutBankAccountTypeInput, bankAccountsUncheckedCreateWithoutBankAccountTypeInput>
  }

  export type bankAccountsCreateManyBankAccountTypeInputEnvelope = {
    data: bankAccountsCreateManyBankAccountTypeInput | bankAccountsCreateManyBankAccountTypeInput[]
    skipDuplicates?: boolean
  }

  export type bankAccountsUpsertWithWhereUniqueWithoutBankAccountTypeInput = {
    where: bankAccountsWhereUniqueInput
    update: XOR<bankAccountsUpdateWithoutBankAccountTypeInput, bankAccountsUncheckedUpdateWithoutBankAccountTypeInput>
    create: XOR<bankAccountsCreateWithoutBankAccountTypeInput, bankAccountsUncheckedCreateWithoutBankAccountTypeInput>
  }

  export type bankAccountsUpdateWithWhereUniqueWithoutBankAccountTypeInput = {
    where: bankAccountsWhereUniqueInput
    data: XOR<bankAccountsUpdateWithoutBankAccountTypeInput, bankAccountsUncheckedUpdateWithoutBankAccountTypeInput>
  }

  export type bankAccountsUpdateManyWithWhereWithoutBankAccountTypeInput = {
    where: bankAccountsScalarWhereInput
    data: XOR<bankAccountsUpdateManyMutationInput, bankAccountsUncheckedUpdateManyWithoutBankAccountTypeInput>
  }

  export type bankAccountsCreateWithoutBankInput = {
    number: string
    creationDate?: Date | string
    bankAccountType: bankAccountTypesCreateNestedOneWithoutBankAccountsInput
    user: usersCreateNestedOneWithoutBankAccountsInput
    transactions?: transactionsCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsUncheckedCreateWithoutBankInput = {
    bankAccountId?: number
    number: string
    bankAccountTypeId: number
    creationDate?: Date | string
    userId: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type bankAccountsCreateOrConnectWithoutBankInput = {
    where: bankAccountsWhereUniqueInput
    create: XOR<bankAccountsCreateWithoutBankInput, bankAccountsUncheckedCreateWithoutBankInput>
  }

  export type bankAccountsCreateManyBankInputEnvelope = {
    data: bankAccountsCreateManyBankInput | bankAccountsCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type bankAccountsUpsertWithWhereUniqueWithoutBankInput = {
    where: bankAccountsWhereUniqueInput
    update: XOR<bankAccountsUpdateWithoutBankInput, bankAccountsUncheckedUpdateWithoutBankInput>
    create: XOR<bankAccountsCreateWithoutBankInput, bankAccountsUncheckedCreateWithoutBankInput>
  }

  export type bankAccountsUpdateWithWhereUniqueWithoutBankInput = {
    where: bankAccountsWhereUniqueInput
    data: XOR<bankAccountsUpdateWithoutBankInput, bankAccountsUncheckedUpdateWithoutBankInput>
  }

  export type bankAccountsUpdateManyWithWhereWithoutBankInput = {
    where: bankAccountsScalarWhereInput
    data: XOR<bankAccountsUpdateManyMutationInput, bankAccountsUncheckedUpdateManyWithoutBankInput>
  }

  export type bankAccountTypesCreateWithoutBankAccountsInput = {
    name: string
    creationDate?: Date | string
  }

  export type bankAccountTypesUncheckedCreateWithoutBankAccountsInput = {
    bankAccountTypeId?: number
    name: string
    creationDate?: Date | string
  }

  export type bankAccountTypesCreateOrConnectWithoutBankAccountsInput = {
    where: bankAccountTypesWhereUniqueInput
    create: XOR<bankAccountTypesCreateWithoutBankAccountsInput, bankAccountTypesUncheckedCreateWithoutBankAccountsInput>
  }

  export type usersCreateWithoutBankAccountsInput = {
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    tenant: tenantsCreateNestedOneWithoutUsersInput
    documentType: documentTypesCreateNestedOneWithoutUsersInput
    workRecords?: workRecordsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutBankAccountsInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    tenantId: number
    documentTypeId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    workRecords?: workRecordsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutBankAccountsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBankAccountsInput, usersUncheckedCreateWithoutBankAccountsInput>
  }

  export type banksCreateWithoutBankAccountsInput = {
    code: string
    name: string
    creationDate?: Date | string
  }

  export type banksUncheckedCreateWithoutBankAccountsInput = {
    bankId?: number
    code: string
    name: string
    creationDate?: Date | string
  }

  export type banksCreateOrConnectWithoutBankAccountsInput = {
    where: banksWhereUniqueInput
    create: XOR<banksCreateWithoutBankAccountsInput, banksUncheckedCreateWithoutBankAccountsInput>
  }

  export type transactionsCreateWithoutBankAccountInput = {
    requestedAmount: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    account: accountsCreateNestedOneWithoutTransactionsInput
    currency: currenciesCreateNestedOneWithoutTransactionsInput
    transactionStatus: transactionStatusCreateNestedOneWithoutTransactionsInput
    payrollCycle: payrollCyclesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutBankAccountInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsCreateOrConnectWithoutBankAccountInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutBankAccountInput, transactionsUncheckedCreateWithoutBankAccountInput>
  }

  export type transactionsCreateManyBankAccountInputEnvelope = {
    data: transactionsCreateManyBankAccountInput | transactionsCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type bankAccountTypesUpsertWithoutBankAccountsInput = {
    update: XOR<bankAccountTypesUpdateWithoutBankAccountsInput, bankAccountTypesUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<bankAccountTypesCreateWithoutBankAccountsInput, bankAccountTypesUncheckedCreateWithoutBankAccountsInput>
    where?: bankAccountTypesWhereInput
  }

  export type bankAccountTypesUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: bankAccountTypesWhereInput
    data: XOR<bankAccountTypesUpdateWithoutBankAccountsInput, bankAccountTypesUncheckedUpdateWithoutBankAccountsInput>
  }

  export type bankAccountTypesUpdateWithoutBankAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountTypesUncheckedUpdateWithoutBankAccountsInput = {
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutBankAccountsInput = {
    update: XOR<usersUpdateWithoutBankAccountsInput, usersUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<usersCreateWithoutBankAccountsInput, usersUncheckedCreateWithoutBankAccountsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBankAccountsInput, usersUncheckedUpdateWithoutBankAccountsInput>
  }

  export type usersUpdateWithoutBankAccountsInput = {
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutUsersNestedInput
    documentType?: documentTypesUpdateOneRequiredWithoutUsersNestedInput
    workRecords?: workRecordsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutBankAccountsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workRecords?: workRecordsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type banksUpsertWithoutBankAccountsInput = {
    update: XOR<banksUpdateWithoutBankAccountsInput, banksUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<banksCreateWithoutBankAccountsInput, banksUncheckedCreateWithoutBankAccountsInput>
    where?: banksWhereInput
  }

  export type banksUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: banksWhereInput
    data: XOR<banksUpdateWithoutBankAccountsInput, banksUncheckedUpdateWithoutBankAccountsInput>
  }

  export type banksUpdateWithoutBankAccountsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type banksUncheckedUpdateWithoutBankAccountsInput = {
    bankId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutBankAccountInput, transactionsUncheckedUpdateWithoutBankAccountInput>
    create: XOR<transactionsCreateWithoutBankAccountInput, transactionsUncheckedCreateWithoutBankAccountInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutBankAccountInput, transactionsUncheckedUpdateWithoutBankAccountInput>
  }

  export type transactionsUpdateManyWithWhereWithoutBankAccountInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    transactionId?: IntFilter<"transactions"> | number
    accountId?: IntFilter<"transactions"> | number
    requestedAmount?: DecimalFilter<"transactions"> | Decimal | DecimalJsLike | number | string
    currencyId?: IntFilter<"transactions"> | number
    bankAccountId?: IntFilter<"transactions"> | number
    transactionStatusId?: IntFilter<"transactions"> | number
    creationDate?: DateTimeFilter<"transactions"> | Date | string
    payrollCycleId?: IntFilter<"transactions"> | number
  }

  export type transactionsCreateWithoutTransactionStatusInput = {
    requestedAmount: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    account: accountsCreateNestedOneWithoutTransactionsInput
    currency: currenciesCreateNestedOneWithoutTransactionsInput
    bankAccount: bankAccountsCreateNestedOneWithoutTransactionsInput
    payrollCycle: payrollCyclesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutTransactionStatusInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsCreateOrConnectWithoutTransactionStatusInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutTransactionStatusInput, transactionsUncheckedCreateWithoutTransactionStatusInput>
  }

  export type transactionsCreateManyTransactionStatusInputEnvelope = {
    data: transactionsCreateManyTransactionStatusInput | transactionsCreateManyTransactionStatusInput[]
    skipDuplicates?: boolean
  }

  export type transactionsUpsertWithWhereUniqueWithoutTransactionStatusInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutTransactionStatusInput, transactionsUncheckedUpdateWithoutTransactionStatusInput>
    create: XOR<transactionsCreateWithoutTransactionStatusInput, transactionsUncheckedCreateWithoutTransactionStatusInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutTransactionStatusInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutTransactionStatusInput, transactionsUncheckedUpdateWithoutTransactionStatusInput>
  }

  export type transactionsUpdateManyWithWhereWithoutTransactionStatusInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutTransactionStatusInput>
  }

  export type transactionsCreateWithoutCurrencyInput = {
    requestedAmount: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    account: accountsCreateNestedOneWithoutTransactionsInput
    bankAccount: bankAccountsCreateNestedOneWithoutTransactionsInput
    transactionStatus: transactionStatusCreateNestedOneWithoutTransactionsInput
    payrollCycle: payrollCyclesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutCurrencyInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsCreateOrConnectWithoutCurrencyInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutCurrencyInput, transactionsUncheckedCreateWithoutCurrencyInput>
  }

  export type transactionsCreateManyCurrencyInputEnvelope = {
    data: transactionsCreateManyCurrencyInput | transactionsCreateManyCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type transactionsUpsertWithWhereUniqueWithoutCurrencyInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutCurrencyInput, transactionsUncheckedUpdateWithoutCurrencyInput>
    create: XOR<transactionsCreateWithoutCurrencyInput, transactionsUncheckedCreateWithoutCurrencyInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutCurrencyInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutCurrencyInput, transactionsUncheckedUpdateWithoutCurrencyInput>
  }

  export type transactionsUpdateManyWithWhereWithoutCurrencyInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutCurrencyInput>
  }

  export type transactionsCreateWithoutAccountInput = {
    requestedAmount: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    currency: currenciesCreateNestedOneWithoutTransactionsInput
    bankAccount: bankAccountsCreateNestedOneWithoutTransactionsInput
    transactionStatus: transactionStatusCreateNestedOneWithoutTransactionsInput
    payrollCycle: payrollCyclesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutAccountInput = {
    transactionId?: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsCreateOrConnectWithoutAccountInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput>
  }

  export type transactionsCreateManyAccountInputEnvelope = {
    data: transactionsCreateManyAccountInput | transactionsCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type transactionsUpsertWithWhereUniqueWithoutAccountInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutAccountInput, transactionsUncheckedUpdateWithoutAccountInput>
    create: XOR<transactionsCreateWithoutAccountInput, transactionsUncheckedCreateWithoutAccountInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutAccountInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutAccountInput, transactionsUncheckedUpdateWithoutAccountInput>
  }

  export type transactionsUpdateManyWithWhereWithoutAccountInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutAccountInput>
  }

  export type tenantsCreateWithoutPayrollCyclesInput = {
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate?: Date | string
    Users?: usersCreateNestedManyWithoutTenantInput
  }

  export type tenantsUncheckedCreateWithoutPayrollCyclesInput = {
    tenantId?: number
    companyName: string
    phoneNumber: string
    address: string
    employees: number
    creationDate?: Date | string
    Users?: usersUncheckedCreateNestedManyWithoutTenantInput
  }

  export type tenantsCreateOrConnectWithoutPayrollCyclesInput = {
    where: tenantsWhereUniqueInput
    create: XOR<tenantsCreateWithoutPayrollCyclesInput, tenantsUncheckedCreateWithoutPayrollCyclesInput>
  }

  export type transactionsCreateWithoutPayrollCycleInput = {
    requestedAmount: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    account: accountsCreateNestedOneWithoutTransactionsInput
    currency: currenciesCreateNestedOneWithoutTransactionsInput
    bankAccount: bankAccountsCreateNestedOneWithoutTransactionsInput
    transactionStatus: transactionStatusCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutPayrollCycleInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
  }

  export type transactionsCreateOrConnectWithoutPayrollCycleInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutPayrollCycleInput, transactionsUncheckedCreateWithoutPayrollCycleInput>
  }

  export type transactionsCreateManyPayrollCycleInputEnvelope = {
    data: transactionsCreateManyPayrollCycleInput | transactionsCreateManyPayrollCycleInput[]
    skipDuplicates?: boolean
  }

  export type workRecordsCreateWithoutPayrollCycleInput = {
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
    user: usersCreateNestedOneWithoutWorkRecordsInput
  }

  export type workRecordsUncheckedCreateWithoutPayrollCycleInput = {
    workRecordId?: number
    userId: number
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
  }

  export type workRecordsCreateOrConnectWithoutPayrollCycleInput = {
    where: workRecordsWhereUniqueInput
    create: XOR<workRecordsCreateWithoutPayrollCycleInput, workRecordsUncheckedCreateWithoutPayrollCycleInput>
  }

  export type workRecordsCreateManyPayrollCycleInputEnvelope = {
    data: workRecordsCreateManyPayrollCycleInput | workRecordsCreateManyPayrollCycleInput[]
    skipDuplicates?: boolean
  }

  export type tenantsUpsertWithoutPayrollCyclesInput = {
    update: XOR<tenantsUpdateWithoutPayrollCyclesInput, tenantsUncheckedUpdateWithoutPayrollCyclesInput>
    create: XOR<tenantsCreateWithoutPayrollCyclesInput, tenantsUncheckedCreateWithoutPayrollCyclesInput>
    where?: tenantsWhereInput
  }

  export type tenantsUpdateToOneWithWhereWithoutPayrollCyclesInput = {
    where?: tenantsWhereInput
    data: XOR<tenantsUpdateWithoutPayrollCyclesInput, tenantsUncheckedUpdateWithoutPayrollCyclesInput>
  }

  export type tenantsUpdateWithoutPayrollCyclesInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUpdateManyWithoutTenantNestedInput
  }

  export type tenantsUncheckedUpdateWithoutPayrollCyclesInput = {
    tenantId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    employees?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: usersUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type transactionsUpsertWithWhereUniqueWithoutPayrollCycleInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutPayrollCycleInput, transactionsUncheckedUpdateWithoutPayrollCycleInput>
    create: XOR<transactionsCreateWithoutPayrollCycleInput, transactionsUncheckedCreateWithoutPayrollCycleInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutPayrollCycleInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutPayrollCycleInput, transactionsUncheckedUpdateWithoutPayrollCycleInput>
  }

  export type transactionsUpdateManyWithWhereWithoutPayrollCycleInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutPayrollCycleInput>
  }

  export type workRecordsUpsertWithWhereUniqueWithoutPayrollCycleInput = {
    where: workRecordsWhereUniqueInput
    update: XOR<workRecordsUpdateWithoutPayrollCycleInput, workRecordsUncheckedUpdateWithoutPayrollCycleInput>
    create: XOR<workRecordsCreateWithoutPayrollCycleInput, workRecordsUncheckedCreateWithoutPayrollCycleInput>
  }

  export type workRecordsUpdateWithWhereUniqueWithoutPayrollCycleInput = {
    where: workRecordsWhereUniqueInput
    data: XOR<workRecordsUpdateWithoutPayrollCycleInput, workRecordsUncheckedUpdateWithoutPayrollCycleInput>
  }

  export type workRecordsUpdateManyWithWhereWithoutPayrollCycleInput = {
    where: workRecordsScalarWhereInput
    data: XOR<workRecordsUpdateManyMutationInput, workRecordsUncheckedUpdateManyWithoutPayrollCycleInput>
  }

  export type payrollCyclesCreateWithoutWorkRecordsInput = {
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    tenant: tenantsCreateNestedOneWithoutPayrollCyclesInput
    transactions?: transactionsCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesUncheckedCreateWithoutWorkRecordsInput = {
    payrollCycleId?: number
    tenantId: number
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    transactions?: transactionsUncheckedCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesCreateOrConnectWithoutWorkRecordsInput = {
    where: payrollCyclesWhereUniqueInput
    create: XOR<payrollCyclesCreateWithoutWorkRecordsInput, payrollCyclesUncheckedCreateWithoutWorkRecordsInput>
  }

  export type usersCreateWithoutWorkRecordsInput = {
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    tenant: tenantsCreateNestedOneWithoutUsersInput
    documentType: documentTypesCreateNestedOneWithoutUsersInput
    bankAccounts?: bankAccountsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutWorkRecordsInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    tenantId: number
    documentTypeId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
    bankAccounts?: bankAccountsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutWorkRecordsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkRecordsInput, usersUncheckedCreateWithoutWorkRecordsInput>
  }

  export type payrollCyclesUpsertWithoutWorkRecordsInput = {
    update: XOR<payrollCyclesUpdateWithoutWorkRecordsInput, payrollCyclesUncheckedUpdateWithoutWorkRecordsInput>
    create: XOR<payrollCyclesCreateWithoutWorkRecordsInput, payrollCyclesUncheckedCreateWithoutWorkRecordsInput>
    where?: payrollCyclesWhereInput
  }

  export type payrollCyclesUpdateToOneWithWhereWithoutWorkRecordsInput = {
    where?: payrollCyclesWhereInput
    data: XOR<payrollCyclesUpdateWithoutWorkRecordsInput, payrollCyclesUncheckedUpdateWithoutWorkRecordsInput>
  }

  export type payrollCyclesUpdateWithoutWorkRecordsInput = {
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    tenant?: tenantsUpdateOneRequiredWithoutPayrollCyclesNestedInput
    transactions?: transactionsUpdateManyWithoutPayrollCycleNestedInput
  }

  export type payrollCyclesUncheckedUpdateWithoutWorkRecordsInput = {
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutPayrollCycleNestedInput
  }

  export type usersUpsertWithoutWorkRecordsInput = {
    update: XOR<usersUpdateWithoutWorkRecordsInput, usersUncheckedUpdateWithoutWorkRecordsInput>
    create: XOR<usersCreateWithoutWorkRecordsInput, usersUncheckedCreateWithoutWorkRecordsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkRecordsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkRecordsInput, usersUncheckedUpdateWithoutWorkRecordsInput>
  }

  export type usersUpdateWithoutWorkRecordsInput = {
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutUsersNestedInput
    documentType?: documentTypesUpdateOneRequiredWithoutUsersNestedInput
    bankAccounts?: bankAccountsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkRecordsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type accountsCreateWithoutTransactionsInput = {
    name: string
    token: string
    privateKey: string
    creationDate?: Date | string
  }

  export type accountsUncheckedCreateWithoutTransactionsInput = {
    accountId?: number
    name: string
    token: string
    privateKey: string
    creationDate?: Date | string
  }

  export type accountsCreateOrConnectWithoutTransactionsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
  }

  export type currenciesCreateWithoutTransactionsInput = {
    name: string
    creationDate?: Date | string
  }

  export type currenciesUncheckedCreateWithoutTransactionsInput = {
    currencyId?: number
    name: string
    creationDate?: Date | string
  }

  export type currenciesCreateOrConnectWithoutTransactionsInput = {
    where: currenciesWhereUniqueInput
    create: XOR<currenciesCreateWithoutTransactionsInput, currenciesUncheckedCreateWithoutTransactionsInput>
  }

  export type bankAccountsCreateWithoutTransactionsInput = {
    number: string
    creationDate?: Date | string
    bankAccountType: bankAccountTypesCreateNestedOneWithoutBankAccountsInput
    user: usersCreateNestedOneWithoutBankAccountsInput
    bank: banksCreateNestedOneWithoutBankAccountsInput
  }

  export type bankAccountsUncheckedCreateWithoutTransactionsInput = {
    bankAccountId?: number
    number: string
    bankAccountTypeId: number
    creationDate?: Date | string
    userId: number
    bankId: number
  }

  export type bankAccountsCreateOrConnectWithoutTransactionsInput = {
    where: bankAccountsWhereUniqueInput
    create: XOR<bankAccountsCreateWithoutTransactionsInput, bankAccountsUncheckedCreateWithoutTransactionsInput>
  }

  export type transactionStatusCreateWithoutTransactionsInput = {
    name: string
    creationDate?: Date | string
  }

  export type transactionStatusUncheckedCreateWithoutTransactionsInput = {
    transactionStatusId?: number
    name: string
    creationDate?: Date | string
  }

  export type transactionStatusCreateOrConnectWithoutTransactionsInput = {
    where: transactionStatusWhereUniqueInput
    create: XOR<transactionStatusCreateWithoutTransactionsInput, transactionStatusUncheckedCreateWithoutTransactionsInput>
  }

  export type payrollCyclesCreateWithoutTransactionsInput = {
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    tenant: tenantsCreateNestedOneWithoutPayrollCyclesInput
    workRecords?: workRecordsCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesUncheckedCreateWithoutTransactionsInput = {
    payrollCycleId?: number
    tenantId: number
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
    workRecords?: workRecordsUncheckedCreateNestedManyWithoutPayrollCycleInput
  }

  export type payrollCyclesCreateOrConnectWithoutTransactionsInput = {
    where: payrollCyclesWhereUniqueInput
    create: XOR<payrollCyclesCreateWithoutTransactionsInput, payrollCyclesUncheckedCreateWithoutTransactionsInput>
  }

  export type accountsUpsertWithoutTransactionsInput = {
    update: XOR<accountsUpdateWithoutTransactionsInput, accountsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutTransactionsInput, accountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type accountsUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateWithoutTransactionsInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currenciesUpsertWithoutTransactionsInput = {
    update: XOR<currenciesUpdateWithoutTransactionsInput, currenciesUncheckedUpdateWithoutTransactionsInput>
    create: XOR<currenciesCreateWithoutTransactionsInput, currenciesUncheckedCreateWithoutTransactionsInput>
    where?: currenciesWhereInput
  }

  export type currenciesUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: currenciesWhereInput
    data: XOR<currenciesUpdateWithoutTransactionsInput, currenciesUncheckedUpdateWithoutTransactionsInput>
  }

  export type currenciesUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type currenciesUncheckedUpdateWithoutTransactionsInput = {
    currencyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountsUpsertWithoutTransactionsInput = {
    update: XOR<bankAccountsUpdateWithoutTransactionsInput, bankAccountsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<bankAccountsCreateWithoutTransactionsInput, bankAccountsUncheckedCreateWithoutTransactionsInput>
    where?: bankAccountsWhereInput
  }

  export type bankAccountsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: bankAccountsWhereInput
    data: XOR<bankAccountsUpdateWithoutTransactionsInput, bankAccountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type bankAccountsUpdateWithoutTransactionsInput = {
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountType?: bankAccountTypesUpdateOneRequiredWithoutBankAccountsNestedInput
    user?: usersUpdateOneRequiredWithoutBankAccountsNestedInput
    bank?: banksUpdateOneRequiredWithoutBankAccountsNestedInput
  }

  export type bankAccountsUncheckedUpdateWithoutTransactionsInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionStatusUpsertWithoutTransactionsInput = {
    update: XOR<transactionStatusUpdateWithoutTransactionsInput, transactionStatusUncheckedUpdateWithoutTransactionsInput>
    create: XOR<transactionStatusCreateWithoutTransactionsInput, transactionStatusUncheckedCreateWithoutTransactionsInput>
    where?: transactionStatusWhereInput
  }

  export type transactionStatusUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: transactionStatusWhereInput
    data: XOR<transactionStatusUpdateWithoutTransactionsInput, transactionStatusUncheckedUpdateWithoutTransactionsInput>
  }

  export type transactionStatusUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionStatusUncheckedUpdateWithoutTransactionsInput = {
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payrollCyclesUpsertWithoutTransactionsInput = {
    update: XOR<payrollCyclesUpdateWithoutTransactionsInput, payrollCyclesUncheckedUpdateWithoutTransactionsInput>
    create: XOR<payrollCyclesCreateWithoutTransactionsInput, payrollCyclesUncheckedCreateWithoutTransactionsInput>
    where?: payrollCyclesWhereInput
  }

  export type payrollCyclesUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: payrollCyclesWhereInput
    data: XOR<payrollCyclesUpdateWithoutTransactionsInput, payrollCyclesUncheckedUpdateWithoutTransactionsInput>
  }

  export type payrollCyclesUpdateWithoutTransactionsInput = {
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    tenant?: tenantsUpdateOneRequiredWithoutPayrollCyclesNestedInput
    workRecords?: workRecordsUpdateManyWithoutPayrollCycleNestedInput
  }

  export type payrollCyclesUncheckedUpdateWithoutTransactionsInput = {
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    workRecords?: workRecordsUncheckedUpdateManyWithoutPayrollCycleNestedInput
  }

  export type usersCreateManyTenantInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    documentTypeId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
  }

  export type payrollCyclesCreateManyTenantInput = {
    payrollCycleId?: number
    initDate: Date | string
    endDate: Date | string
    totalGrossEarning: Decimal | DecimalJsLike | number | string
    totalNetEarning: Decimal | DecimalJsLike | number | string
    transactionId: number
  }

  export type usersUpdateWithoutTenantInput = {
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentType?: documentTypesUpdateOneRequiredWithoutUsersNestedInput
    bankAccounts?: bankAccountsUpdateManyWithoutUserNestedInput
    workRecords?: workRecordsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutTenantInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    documentTypeId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUncheckedUpdateManyWithoutUserNestedInput
    workRecords?: workRecordsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutTenantInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    documentTypeId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payrollCyclesUpdateWithoutTenantInput = {
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUpdateManyWithoutPayrollCycleNestedInput
    workRecords?: workRecordsUpdateManyWithoutPayrollCycleNestedInput
  }

  export type payrollCyclesUncheckedUpdateWithoutTenantInput = {
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutPayrollCycleNestedInput
    workRecords?: workRecordsUncheckedUpdateManyWithoutPayrollCycleNestedInput
  }

  export type payrollCyclesUncheckedUpdateManyWithoutTenantInput = {
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    initDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalGrossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalNetEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    transactionId?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateManyDocumentTypeInput = {
    userId?: number
    documentNumber: string
    firstName: string
    lastName?: string | null
    email: string
    phoneNumber?: string | null
    password: string
    activated?: boolean
    tenantId: number
    wageRate: Decimal | DecimalJsLike | number | string
    grossCompensation: Decimal | DecimalJsLike | number | string
    netCompensation: Decimal | DecimalJsLike | number | string
    creationDate?: Date | string
  }

  export type usersUpdateWithoutDocumentTypeInput = {
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: tenantsUpdateOneRequiredWithoutUsersNestedInput
    bankAccounts?: bankAccountsUpdateManyWithoutUserNestedInput
    workRecords?: workRecordsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutDocumentTypeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccounts?: bankAccountsUncheckedUpdateManyWithoutUserNestedInput
    workRecords?: workRecordsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutDocumentTypeInput = {
    userId?: IntFieldUpdateOperationsInput | number
    documentNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    activated?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: IntFieldUpdateOperationsInput | number
    wageRate?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netCompensation?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bankAccountsCreateManyUserInput = {
    bankAccountId?: number
    number: string
    bankAccountTypeId: number
    creationDate?: Date | string
    bankId: number
  }

  export type workRecordsCreateManyUserInput = {
    workRecordId?: number
    payrollCycleId: number
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
  }

  export type bankAccountsUpdateWithoutUserInput = {
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountType?: bankAccountTypesUpdateOneRequiredWithoutBankAccountsNestedInput
    bank?: banksUpdateOneRequiredWithoutBankAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsUncheckedUpdateWithoutUserInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsUncheckedUpdateManyWithoutUserInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankId?: IntFieldUpdateOperationsInput | number
  }

  export type workRecordsUpdateWithoutUserInput = {
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payrollCycle?: payrollCyclesUpdateOneRequiredWithoutWorkRecordsNestedInput
  }

  export type workRecordsUncheckedUpdateWithoutUserInput = {
    workRecordId?: IntFieldUpdateOperationsInput | number
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type workRecordsUncheckedUpdateManyWithoutUserInput = {
    workRecordId?: IntFieldUpdateOperationsInput | number
    payrollCycleId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type bankAccountsCreateManyBankAccountTypeInput = {
    bankAccountId?: number
    number: string
    creationDate?: Date | string
    userId: number
    bankId: number
  }

  export type bankAccountsUpdateWithoutBankAccountTypeInput = {
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutBankAccountsNestedInput
    bank?: banksUpdateOneRequiredWithoutBankAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsUncheckedUpdateWithoutBankAccountTypeInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsUncheckedUpdateManyWithoutBankAccountTypeInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bankId?: IntFieldUpdateOperationsInput | number
  }

  export type bankAccountsCreateManyBankInput = {
    bankAccountId?: number
    number: string
    bankAccountTypeId: number
    creationDate?: Date | string
    userId: number
  }

  export type bankAccountsUpdateWithoutBankInput = {
    number?: StringFieldUpdateOperationsInput | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    bankAccountType?: bankAccountTypesUpdateOneRequiredWithoutBankAccountsNestedInput
    user?: usersUpdateOneRequiredWithoutBankAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsUncheckedUpdateWithoutBankInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    transactions?: transactionsUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type bankAccountsUncheckedUpdateManyWithoutBankInput = {
    bankAccountId?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    bankAccountTypeId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsCreateManyBankAccountInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsUpdateWithoutBankAccountInput = {
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountsUpdateOneRequiredWithoutTransactionsNestedInput
    currency?: currenciesUpdateOneRequiredWithoutTransactionsNestedInput
    transactionStatus?: transactionStatusUpdateOneRequiredWithoutTransactionsNestedInput
    payrollCycle?: payrollCyclesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutBankAccountInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsUncheckedUpdateManyWithoutBankAccountInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsCreateManyTransactionStatusInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsUpdateWithoutTransactionStatusInput = {
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountsUpdateOneRequiredWithoutTransactionsNestedInput
    currency?: currenciesUpdateOneRequiredWithoutTransactionsNestedInput
    bankAccount?: bankAccountsUpdateOneRequiredWithoutTransactionsNestedInput
    payrollCycle?: payrollCyclesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutTransactionStatusInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsUncheckedUpdateManyWithoutTransactionStatusInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsCreateManyCurrencyInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsUpdateWithoutCurrencyInput = {
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountsUpdateOneRequiredWithoutTransactionsNestedInput
    bankAccount?: bankAccountsUpdateOneRequiredWithoutTransactionsNestedInput
    transactionStatus?: transactionStatusUpdateOneRequiredWithoutTransactionsNestedInput
    payrollCycle?: payrollCyclesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutCurrencyInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsUncheckedUpdateManyWithoutCurrencyInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsCreateManyAccountInput = {
    transactionId?: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
    payrollCycleId: number
  }

  export type transactionsUpdateWithoutAccountInput = {
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: currenciesUpdateOneRequiredWithoutTransactionsNestedInput
    bankAccount?: bankAccountsUpdateOneRequiredWithoutTransactionsNestedInput
    transactionStatus?: transactionStatusUpdateOneRequiredWithoutTransactionsNestedInput
    payrollCycle?: payrollCyclesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutAccountInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsUncheckedUpdateManyWithoutAccountInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    payrollCycleId?: IntFieldUpdateOperationsInput | number
  }

  export type transactionsCreateManyPayrollCycleInput = {
    transactionId?: number
    accountId: number
    requestedAmount: Decimal | DecimalJsLike | number | string
    currencyId: number
    bankAccountId: number
    transactionStatusId: number
    creationDate?: Date | string
  }

  export type workRecordsCreateManyPayrollCycleInput = {
    workRecordId?: number
    userId: number
    startTime?: Date | string | null
    endTime?: Date | string | null
    totalHoursWorked: Decimal | DecimalJsLike | number | string
    grossEarning: Decimal | DecimalJsLike | number | string
    netEarning: Decimal | DecimalJsLike | number | string
  }

  export type transactionsUpdateWithoutPayrollCycleInput = {
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountsUpdateOneRequiredWithoutTransactionsNestedInput
    currency?: currenciesUpdateOneRequiredWithoutTransactionsNestedInput
    bankAccount?: bankAccountsUpdateOneRequiredWithoutTransactionsNestedInput
    transactionStatus?: transactionStatusUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutPayrollCycleInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutPayrollCycleInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    requestedAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currencyId?: IntFieldUpdateOperationsInput | number
    bankAccountId?: IntFieldUpdateOperationsInput | number
    transactionStatusId?: IntFieldUpdateOperationsInput | number
    creationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type workRecordsUpdateWithoutPayrollCycleInput = {
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: usersUpdateOneRequiredWithoutWorkRecordsNestedInput
  }

  export type workRecordsUncheckedUpdateWithoutPayrollCycleInput = {
    workRecordId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type workRecordsUncheckedUpdateManyWithoutPayrollCycleInput = {
    workRecordId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalHoursWorked?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grossEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netEarning?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}