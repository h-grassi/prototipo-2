
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Regiao_br
 * 
 */
export type Regiao_br = $Result.DefaultSelection<Prisma.$Regiao_brPayload>
/**
 * Model Estado
 * 
 */
export type Estado = $Result.DefaultSelection<Prisma.$EstadoPayload>
/**
 * Model Cidade
 * 
 */
export type Cidade = $Result.DefaultSelection<Prisma.$CidadePayload>
/**
 * Model Bairro
 * 
 */
export type Bairro = $Result.DefaultSelection<Prisma.$BairroPayload>
/**
 * Model Categoria_servicos
 * 
 */
export type Categoria_servicos = $Result.DefaultSelection<Prisma.$Categoria_servicosPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Empresa_servicos
 * 
 */
export type Empresa_servicos = $Result.DefaultSelection<Prisma.$Empresa_servicosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regiao_br`: Exposes CRUD operations for the **Regiao_br** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regiao_brs
    * const regiao_brs = await prisma.regiao_br.findMany()
    * ```
    */
  get regiao_br(): Prisma.Regiao_brDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estado`: Exposes CRUD operations for the **Estado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estados
    * const estados = await prisma.estado.findMany()
    * ```
    */
  get estado(): Prisma.EstadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cidade`: Exposes CRUD operations for the **Cidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cidades
    * const cidades = await prisma.cidade.findMany()
    * ```
    */
  get cidade(): Prisma.CidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bairro`: Exposes CRUD operations for the **Bairro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bairros
    * const bairros = await prisma.bairro.findMany()
    * ```
    */
  get bairro(): Prisma.BairroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria_servicos`: Exposes CRUD operations for the **Categoria_servicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categoria_servicos
    * const categoria_servicos = await prisma.categoria_servicos.findMany()
    * ```
    */
  get categoria_servicos(): Prisma.Categoria_servicosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.empresa_servicos`: Exposes CRUD operations for the **Empresa_servicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresa_servicos
    * const empresa_servicos = await prisma.empresa_servicos.findMany()
    * ```
    */
  get empresa_servicos(): Prisma.Empresa_servicosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Usuario: 'Usuario',
    Empresa: 'Empresa',
    Regiao_br: 'Regiao_br',
    Estado: 'Estado',
    Cidade: 'Cidade',
    Bairro: 'Bairro',
    Categoria_servicos: 'Categoria_servicos',
    Servico: 'Servico',
    Empresa_servicos: 'Empresa_servicos'
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
      modelProps: "usuario" | "empresa" | "regiao_br" | "estado" | "cidade" | "bairro" | "categoria_servicos" | "servico" | "empresa_servicos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Regiao_br: {
        payload: Prisma.$Regiao_brPayload<ExtArgs>
        fields: Prisma.Regiao_brFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Regiao_brFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Regiao_brFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>
          }
          findFirst: {
            args: Prisma.Regiao_brFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Regiao_brFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>
          }
          findMany: {
            args: Prisma.Regiao_brFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>[]
          }
          create: {
            args: Prisma.Regiao_brCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>
          }
          createMany: {
            args: Prisma.Regiao_brCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Regiao_brCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>[]
          }
          delete: {
            args: Prisma.Regiao_brDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>
          }
          update: {
            args: Prisma.Regiao_brUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>
          }
          deleteMany: {
            args: Prisma.Regiao_brDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Regiao_brUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Regiao_brUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>[]
          }
          upsert: {
            args: Prisma.Regiao_brUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Regiao_brPayload>
          }
          aggregate: {
            args: Prisma.Regiao_brAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegiao_br>
          }
          groupBy: {
            args: Prisma.Regiao_brGroupByArgs<ExtArgs>
            result: $Utils.Optional<Regiao_brGroupByOutputType>[]
          }
          count: {
            args: Prisma.Regiao_brCountArgs<ExtArgs>
            result: $Utils.Optional<Regiao_brCountAggregateOutputType> | number
          }
        }
      }
      Estado: {
        payload: Prisma.$EstadoPayload<ExtArgs>
        fields: Prisma.EstadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findFirst: {
            args: Prisma.EstadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          findMany: {
            args: Prisma.EstadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          create: {
            args: Prisma.EstadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          createMany: {
            args: Prisma.EstadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          delete: {
            args: Prisma.EstadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          update: {
            args: Prisma.EstadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          deleteMany: {
            args: Prisma.EstadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>[]
          }
          upsert: {
            args: Prisma.EstadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoPayload>
          }
          aggregate: {
            args: Prisma.EstadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstado>
          }
          groupBy: {
            args: Prisma.EstadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCountAggregateOutputType> | number
          }
        }
      }
      Cidade: {
        payload: Prisma.$CidadePayload<ExtArgs>
        fields: Prisma.CidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>
          }
          findFirst: {
            args: Prisma.CidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>
          }
          findMany: {
            args: Prisma.CidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>[]
          }
          create: {
            args: Prisma.CidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>
          }
          createMany: {
            args: Prisma.CidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>[]
          }
          delete: {
            args: Prisma.CidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>
          }
          update: {
            args: Prisma.CidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>
          }
          deleteMany: {
            args: Prisma.CidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>[]
          }
          upsert: {
            args: Prisma.CidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CidadePayload>
          }
          aggregate: {
            args: Prisma.CidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCidade>
          }
          groupBy: {
            args: Prisma.CidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CidadeCountArgs<ExtArgs>
            result: $Utils.Optional<CidadeCountAggregateOutputType> | number
          }
        }
      }
      Bairro: {
        payload: Prisma.$BairroPayload<ExtArgs>
        fields: Prisma.BairroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BairroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BairroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>
          }
          findFirst: {
            args: Prisma.BairroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BairroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>
          }
          findMany: {
            args: Prisma.BairroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>[]
          }
          create: {
            args: Prisma.BairroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>
          }
          createMany: {
            args: Prisma.BairroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BairroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>[]
          }
          delete: {
            args: Prisma.BairroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>
          }
          update: {
            args: Prisma.BairroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>
          }
          deleteMany: {
            args: Prisma.BairroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BairroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BairroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>[]
          }
          upsert: {
            args: Prisma.BairroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BairroPayload>
          }
          aggregate: {
            args: Prisma.BairroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBairro>
          }
          groupBy: {
            args: Prisma.BairroGroupByArgs<ExtArgs>
            result: $Utils.Optional<BairroGroupByOutputType>[]
          }
          count: {
            args: Prisma.BairroCountArgs<ExtArgs>
            result: $Utils.Optional<BairroCountAggregateOutputType> | number
          }
        }
      }
      Categoria_servicos: {
        payload: Prisma.$Categoria_servicosPayload<ExtArgs>
        fields: Prisma.Categoria_servicosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Categoria_servicosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Categoria_servicosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>
          }
          findFirst: {
            args: Prisma.Categoria_servicosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Categoria_servicosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>
          }
          findMany: {
            args: Prisma.Categoria_servicosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>[]
          }
          create: {
            args: Prisma.Categoria_servicosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>
          }
          createMany: {
            args: Prisma.Categoria_servicosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Categoria_servicosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>[]
          }
          delete: {
            args: Prisma.Categoria_servicosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>
          }
          update: {
            args: Prisma.Categoria_servicosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>
          }
          deleteMany: {
            args: Prisma.Categoria_servicosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Categoria_servicosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Categoria_servicosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>[]
          }
          upsert: {
            args: Prisma.Categoria_servicosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Categoria_servicosPayload>
          }
          aggregate: {
            args: Prisma.Categoria_servicosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria_servicos>
          }
          groupBy: {
            args: Prisma.Categoria_servicosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Categoria_servicosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Categoria_servicosCountArgs<ExtArgs>
            result: $Utils.Optional<Categoria_servicosCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Empresa_servicos: {
        payload: Prisma.$Empresa_servicosPayload<ExtArgs>
        fields: Prisma.Empresa_servicosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Empresa_servicosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Empresa_servicosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>
          }
          findFirst: {
            args: Prisma.Empresa_servicosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Empresa_servicosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>
          }
          findMany: {
            args: Prisma.Empresa_servicosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>[]
          }
          create: {
            args: Prisma.Empresa_servicosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>
          }
          createMany: {
            args: Prisma.Empresa_servicosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Empresa_servicosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>[]
          }
          delete: {
            args: Prisma.Empresa_servicosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>
          }
          update: {
            args: Prisma.Empresa_servicosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>
          }
          deleteMany: {
            args: Prisma.Empresa_servicosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Empresa_servicosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Empresa_servicosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>[]
          }
          upsert: {
            args: Prisma.Empresa_servicosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Empresa_servicosPayload>
          }
          aggregate: {
            args: Prisma.Empresa_servicosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa_servicos>
          }
          groupBy: {
            args: Prisma.Empresa_servicosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Empresa_servicosGroupByOutputType>[]
          }
          count: {
            args: Prisma.Empresa_servicosCountArgs<ExtArgs>
            result: $Utils.Optional<Empresa_servicosCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    empresa?: EmpresaOmit
    regiao_br?: Regiao_brOmit
    estado?: EstadoOmit
    cidade?: CidadeOmit
    bairro?: BairroOmit
    categoria_servicos?: Categoria_servicosOmit
    servico?: ServicoOmit
    empresa_servicos?: Empresa_servicosOmit
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
   * Count Type Regiao_brCountOutputType
   */

  export type Regiao_brCountOutputType = {
    Estado: number
  }

  export type Regiao_brCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado?: boolean | Regiao_brCountOutputTypeCountEstadoArgs
  }

  // Custom InputTypes
  /**
   * Regiao_brCountOutputType without action
   */
  export type Regiao_brCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_brCountOutputType
     */
    select?: Regiao_brCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Regiao_brCountOutputType without action
   */
  export type Regiao_brCountOutputTypeCountEstadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoWhereInput
  }


  /**
   * Count Type EstadoCountOutputType
   */

  export type EstadoCountOutputType = {
    Cidade: number
  }

  export type EstadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cidade?: boolean | EstadoCountOutputTypeCountCidadeArgs
  }

  // Custom InputTypes
  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCountOutputType
     */
    select?: EstadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCountOutputType without action
   */
  export type EstadoCountOutputTypeCountCidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CidadeWhereInput
  }


  /**
   * Count Type CidadeCountOutputType
   */

  export type CidadeCountOutputType = {
    Bairro: number
  }

  export type CidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bairro?: boolean | CidadeCountOutputTypeCountBairroArgs
  }

  // Custom InputTypes
  /**
   * CidadeCountOutputType without action
   */
  export type CidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CidadeCountOutputType
     */
    select?: CidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CidadeCountOutputType without action
   */
  export type CidadeCountOutputTypeCountBairroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BairroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    id_clerk: string | null
    email: string | null
    nome: string | null
    dataCriacao: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    id_clerk: string | null
    email: string | null
    nome: string | null
    dataCriacao: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    id_clerk: number
    email: number
    nome: number
    dataCriacao: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    id_clerk?: true
    email?: true
    nome?: true
    dataCriacao?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    id_clerk?: true
    email?: true
    nome?: true
    dataCriacao?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    id_clerk?: true
    email?: true
    nome?: true
    dataCriacao?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    id_clerk: string
    email: string
    nome: string
    dataCriacao: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_clerk?: boolean
    email?: boolean
    nome?: boolean
    dataCriacao?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_clerk?: boolean
    email?: boolean
    nome?: boolean
    dataCriacao?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_clerk?: boolean
    email?: boolean
    nome?: boolean
    dataCriacao?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    id_clerk?: boolean
    email?: boolean
    nome?: boolean
    dataCriacao?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_clerk" | "email" | "nome" | "dataCriacao", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_clerk: string
      email: string
      nome: string
      dataCriacao: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly id_clerk: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly dataCriacao: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaAvgAggregateOutputType = {
    id: number | null
    id_regiao: number | null
    id_estado: number | null
    id_cidade: number | null
    numero_endereco: number | null
  }

  export type EmpresaSumAggregateOutputType = {
    id: number | null
    id_regiao: number | null
    id_estado: number | null
    id_cidade: number | null
    numero_endereco: number | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    id_regiao: number | null
    id_estado: number | null
    id_cidade: number | null
    telefone: string | null
    cnpj: string | null
    email: string | null
    site: string | null
    cep: string | null
    endereco: string | null
    complemento_endereco: string | null
    numero_endereco: number | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    id_regiao: number | null
    id_estado: number | null
    id_cidade: number | null
    telefone: string | null
    cnpj: string | null
    email: string | null
    site: string | null
    cep: string | null
    endereco: string | null
    complemento_endereco: string | null
    numero_endereco: number | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nome: number
    id_regiao: number
    id_estado: number
    id_cidade: number
    telefone: number
    cnpj: number
    email: number
    site: number
    cep: number
    endereco: number
    complemento_endereco: number
    numero_endereco: number
    _all: number
  }


  export type EmpresaAvgAggregateInputType = {
    id?: true
    id_regiao?: true
    id_estado?: true
    id_cidade?: true
    numero_endereco?: true
  }

  export type EmpresaSumAggregateInputType = {
    id?: true
    id_regiao?: true
    id_estado?: true
    id_cidade?: true
    numero_endereco?: true
  }

  export type EmpresaMinAggregateInputType = {
    id?: true
    nome?: true
    id_regiao?: true
    id_estado?: true
    id_cidade?: true
    telefone?: true
    cnpj?: true
    email?: true
    site?: true
    cep?: true
    endereco?: true
    complemento_endereco?: true
    numero_endereco?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nome?: true
    id_regiao?: true
    id_estado?: true
    id_cidade?: true
    telefone?: true
    cnpj?: true
    email?: true
    site?: true
    cep?: true
    endereco?: true
    complemento_endereco?: true
    numero_endereco?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nome?: true
    id_regiao?: true
    id_estado?: true
    id_cidade?: true
    telefone?: true
    cnpj?: true
    email?: true
    site?: true
    cep?: true
    endereco?: true
    complemento_endereco?: true
    numero_endereco?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmpresaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmpresaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _avg?: EmpresaAvgAggregateInputType
    _sum?: EmpresaSumAggregateInputType
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: number
    nome: string
    id_regiao: number
    id_estado: number
    id_cidade: number
    telefone: string
    cnpj: string | null
    email: string | null
    site: string | null
    cep: string | null
    endereco: string
    complemento_endereco: string | null
    numero_endereco: number | null
    _count: EmpresaCountAggregateOutputType | null
    _avg: EmpresaAvgAggregateOutputType | null
    _sum: EmpresaSumAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    id_regiao?: boolean
    id_estado?: boolean
    id_cidade?: boolean
    telefone?: boolean
    cnpj?: boolean
    email?: boolean
    site?: boolean
    cep?: boolean
    endereco?: boolean
    complemento_endereco?: boolean
    numero_endereco?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    id_regiao?: boolean
    id_estado?: boolean
    id_cidade?: boolean
    telefone?: boolean
    cnpj?: boolean
    email?: boolean
    site?: boolean
    cep?: boolean
    endereco?: boolean
    complemento_endereco?: boolean
    numero_endereco?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    id_regiao?: boolean
    id_estado?: boolean
    id_cidade?: boolean
    telefone?: boolean
    cnpj?: boolean
    email?: boolean
    site?: boolean
    cep?: boolean
    endereco?: boolean
    complemento_endereco?: boolean
    numero_endereco?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    nome?: boolean
    id_regiao?: boolean
    id_estado?: boolean
    id_cidade?: boolean
    telefone?: boolean
    cnpj?: boolean
    email?: boolean
    site?: boolean
    cep?: boolean
    endereco?: boolean
    complemento_endereco?: boolean
    numero_endereco?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "id_regiao" | "id_estado" | "id_cidade" | "telefone" | "cnpj" | "email" | "site" | "cep" | "endereco" | "complemento_endereco" | "numero_endereco", ExtArgs["result"]["empresa"]>

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      id_regiao: number
      id_estado: number
      id_cidade: number
      telefone: string
      cnpj: string | null
      email: string | null
      site: string | null
      cep: string | null
      endereco: string
      complemento_endereco: string | null
      numero_endereco: number | null
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'Int'>
    readonly nome: FieldRef<"Empresa", 'String'>
    readonly id_regiao: FieldRef<"Empresa", 'Int'>
    readonly id_estado: FieldRef<"Empresa", 'Int'>
    readonly id_cidade: FieldRef<"Empresa", 'Int'>
    readonly telefone: FieldRef<"Empresa", 'String'>
    readonly cnpj: FieldRef<"Empresa", 'String'>
    readonly email: FieldRef<"Empresa", 'String'>
    readonly site: FieldRef<"Empresa", 'String'>
    readonly cep: FieldRef<"Empresa", 'String'>
    readonly endereco: FieldRef<"Empresa", 'String'>
    readonly complemento_endereco: FieldRef<"Empresa", 'String'>
    readonly numero_endereco: FieldRef<"Empresa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
  }


  /**
   * Model Regiao_br
   */

  export type AggregateRegiao_br = {
    _count: Regiao_brCountAggregateOutputType | null
    _avg: Regiao_brAvgAggregateOutputType | null
    _sum: Regiao_brSumAggregateOutputType | null
    _min: Regiao_brMinAggregateOutputType | null
    _max: Regiao_brMaxAggregateOutputType | null
  }

  export type Regiao_brAvgAggregateOutputType = {
    id: number | null
  }

  export type Regiao_brSumAggregateOutputType = {
    id: number | null
  }

  export type Regiao_brMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Regiao_brMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type Regiao_brCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type Regiao_brAvgAggregateInputType = {
    id?: true
  }

  export type Regiao_brSumAggregateInputType = {
    id?: true
  }

  export type Regiao_brMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Regiao_brMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type Regiao_brCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type Regiao_brAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regiao_br to aggregate.
     */
    where?: Regiao_brWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regiao_brs to fetch.
     */
    orderBy?: Regiao_brOrderByWithRelationInput | Regiao_brOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Regiao_brWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regiao_brs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regiao_brs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regiao_brs
    **/
    _count?: true | Regiao_brCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Regiao_brAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Regiao_brSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Regiao_brMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Regiao_brMaxAggregateInputType
  }

  export type GetRegiao_brAggregateType<T extends Regiao_brAggregateArgs> = {
        [P in keyof T & keyof AggregateRegiao_br]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegiao_br[P]>
      : GetScalarType<T[P], AggregateRegiao_br[P]>
  }




  export type Regiao_brGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Regiao_brWhereInput
    orderBy?: Regiao_brOrderByWithAggregationInput | Regiao_brOrderByWithAggregationInput[]
    by: Regiao_brScalarFieldEnum[] | Regiao_brScalarFieldEnum
    having?: Regiao_brScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Regiao_brCountAggregateInputType | true
    _avg?: Regiao_brAvgAggregateInputType
    _sum?: Regiao_brSumAggregateInputType
    _min?: Regiao_brMinAggregateInputType
    _max?: Regiao_brMaxAggregateInputType
  }

  export type Regiao_brGroupByOutputType = {
    id: number
    nome: string
    _count: Regiao_brCountAggregateOutputType | null
    _avg: Regiao_brAvgAggregateOutputType | null
    _sum: Regiao_brSumAggregateOutputType | null
    _min: Regiao_brMinAggregateOutputType | null
    _max: Regiao_brMaxAggregateOutputType | null
  }

  type GetRegiao_brGroupByPayload<T extends Regiao_brGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Regiao_brGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Regiao_brGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Regiao_brGroupByOutputType[P]>
            : GetScalarType<T[P], Regiao_brGroupByOutputType[P]>
        }
      >
    >


  export type Regiao_brSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    Estado?: boolean | Regiao_br$EstadoArgs<ExtArgs>
    _count?: boolean | Regiao_brCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regiao_br"]>

  export type Regiao_brSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["regiao_br"]>

  export type Regiao_brSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["regiao_br"]>

  export type Regiao_brSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type Regiao_brOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["regiao_br"]>
  export type Regiao_brInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado?: boolean | Regiao_br$EstadoArgs<ExtArgs>
    _count?: boolean | Regiao_brCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Regiao_brIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Regiao_brIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Regiao_brPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regiao_br"
    objects: {
      Estado: Prisma.$EstadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["regiao_br"]>
    composites: {}
  }

  type Regiao_brGetPayload<S extends boolean | null | undefined | Regiao_brDefaultArgs> = $Result.GetResult<Prisma.$Regiao_brPayload, S>

  type Regiao_brCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Regiao_brFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Regiao_brCountAggregateInputType | true
    }

  export interface Regiao_brDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regiao_br'], meta: { name: 'Regiao_br' } }
    /**
     * Find zero or one Regiao_br that matches the filter.
     * @param {Regiao_brFindUniqueArgs} args - Arguments to find a Regiao_br
     * @example
     * // Get one Regiao_br
     * const regiao_br = await prisma.regiao_br.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Regiao_brFindUniqueArgs>(args: SelectSubset<T, Regiao_brFindUniqueArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regiao_br that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Regiao_brFindUniqueOrThrowArgs} args - Arguments to find a Regiao_br
     * @example
     * // Get one Regiao_br
     * const regiao_br = await prisma.regiao_br.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Regiao_brFindUniqueOrThrowArgs>(args: SelectSubset<T, Regiao_brFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regiao_br that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regiao_brFindFirstArgs} args - Arguments to find a Regiao_br
     * @example
     * // Get one Regiao_br
     * const regiao_br = await prisma.regiao_br.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Regiao_brFindFirstArgs>(args?: SelectSubset<T, Regiao_brFindFirstArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regiao_br that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regiao_brFindFirstOrThrowArgs} args - Arguments to find a Regiao_br
     * @example
     * // Get one Regiao_br
     * const regiao_br = await prisma.regiao_br.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Regiao_brFindFirstOrThrowArgs>(args?: SelectSubset<T, Regiao_brFindFirstOrThrowArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regiao_brs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regiao_brFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regiao_brs
     * const regiao_brs = await prisma.regiao_br.findMany()
     * 
     * // Get first 10 Regiao_brs
     * const regiao_brs = await prisma.regiao_br.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regiao_brWithIdOnly = await prisma.regiao_br.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Regiao_brFindManyArgs>(args?: SelectSubset<T, Regiao_brFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regiao_br.
     * @param {Regiao_brCreateArgs} args - Arguments to create a Regiao_br.
     * @example
     * // Create one Regiao_br
     * const Regiao_br = await prisma.regiao_br.create({
     *   data: {
     *     // ... data to create a Regiao_br
     *   }
     * })
     * 
     */
    create<T extends Regiao_brCreateArgs>(args: SelectSubset<T, Regiao_brCreateArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regiao_brs.
     * @param {Regiao_brCreateManyArgs} args - Arguments to create many Regiao_brs.
     * @example
     * // Create many Regiao_brs
     * const regiao_br = await prisma.regiao_br.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Regiao_brCreateManyArgs>(args?: SelectSubset<T, Regiao_brCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regiao_brs and returns the data saved in the database.
     * @param {Regiao_brCreateManyAndReturnArgs} args - Arguments to create many Regiao_brs.
     * @example
     * // Create many Regiao_brs
     * const regiao_br = await prisma.regiao_br.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regiao_brs and only return the `id`
     * const regiao_brWithIdOnly = await prisma.regiao_br.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Regiao_brCreateManyAndReturnArgs>(args?: SelectSubset<T, Regiao_brCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regiao_br.
     * @param {Regiao_brDeleteArgs} args - Arguments to delete one Regiao_br.
     * @example
     * // Delete one Regiao_br
     * const Regiao_br = await prisma.regiao_br.delete({
     *   where: {
     *     // ... filter to delete one Regiao_br
     *   }
     * })
     * 
     */
    delete<T extends Regiao_brDeleteArgs>(args: SelectSubset<T, Regiao_brDeleteArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regiao_br.
     * @param {Regiao_brUpdateArgs} args - Arguments to update one Regiao_br.
     * @example
     * // Update one Regiao_br
     * const regiao_br = await prisma.regiao_br.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Regiao_brUpdateArgs>(args: SelectSubset<T, Regiao_brUpdateArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regiao_brs.
     * @param {Regiao_brDeleteManyArgs} args - Arguments to filter Regiao_brs to delete.
     * @example
     * // Delete a few Regiao_brs
     * const { count } = await prisma.regiao_br.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Regiao_brDeleteManyArgs>(args?: SelectSubset<T, Regiao_brDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regiao_brs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regiao_brUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regiao_brs
     * const regiao_br = await prisma.regiao_br.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Regiao_brUpdateManyArgs>(args: SelectSubset<T, Regiao_brUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regiao_brs and returns the data updated in the database.
     * @param {Regiao_brUpdateManyAndReturnArgs} args - Arguments to update many Regiao_brs.
     * @example
     * // Update many Regiao_brs
     * const regiao_br = await prisma.regiao_br.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regiao_brs and only return the `id`
     * const regiao_brWithIdOnly = await prisma.regiao_br.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Regiao_brUpdateManyAndReturnArgs>(args: SelectSubset<T, Regiao_brUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regiao_br.
     * @param {Regiao_brUpsertArgs} args - Arguments to update or create a Regiao_br.
     * @example
     * // Update or create a Regiao_br
     * const regiao_br = await prisma.regiao_br.upsert({
     *   create: {
     *     // ... data to create a Regiao_br
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regiao_br we want to update
     *   }
     * })
     */
    upsert<T extends Regiao_brUpsertArgs>(args: SelectSubset<T, Regiao_brUpsertArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regiao_brs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regiao_brCountArgs} args - Arguments to filter Regiao_brs to count.
     * @example
     * // Count the number of Regiao_brs
     * const count = await prisma.regiao_br.count({
     *   where: {
     *     // ... the filter for the Regiao_brs we want to count
     *   }
     * })
    **/
    count<T extends Regiao_brCountArgs>(
      args?: Subset<T, Regiao_brCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Regiao_brCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regiao_br.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regiao_brAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Regiao_brAggregateArgs>(args: Subset<T, Regiao_brAggregateArgs>): Prisma.PrismaPromise<GetRegiao_brAggregateType<T>>

    /**
     * Group by Regiao_br.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Regiao_brGroupByArgs} args - Group by arguments.
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
      T extends Regiao_brGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Regiao_brGroupByArgs['orderBy'] }
        : { orderBy?: Regiao_brGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Regiao_brGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegiao_brGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regiao_br model
   */
  readonly fields: Regiao_brFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regiao_br.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Regiao_brClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Estado<T extends Regiao_br$EstadoArgs<ExtArgs> = {}>(args?: Subset<T, Regiao_br$EstadoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Regiao_br model
   */
  interface Regiao_brFieldRefs {
    readonly id: FieldRef<"Regiao_br", 'Int'>
    readonly nome: FieldRef<"Regiao_br", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Regiao_br findUnique
   */
  export type Regiao_brFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * Filter, which Regiao_br to fetch.
     */
    where: Regiao_brWhereUniqueInput
  }

  /**
   * Regiao_br findUniqueOrThrow
   */
  export type Regiao_brFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * Filter, which Regiao_br to fetch.
     */
    where: Regiao_brWhereUniqueInput
  }

  /**
   * Regiao_br findFirst
   */
  export type Regiao_brFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * Filter, which Regiao_br to fetch.
     */
    where?: Regiao_brWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regiao_brs to fetch.
     */
    orderBy?: Regiao_brOrderByWithRelationInput | Regiao_brOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regiao_brs.
     */
    cursor?: Regiao_brWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regiao_brs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regiao_brs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regiao_brs.
     */
    distinct?: Regiao_brScalarFieldEnum | Regiao_brScalarFieldEnum[]
  }

  /**
   * Regiao_br findFirstOrThrow
   */
  export type Regiao_brFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * Filter, which Regiao_br to fetch.
     */
    where?: Regiao_brWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regiao_brs to fetch.
     */
    orderBy?: Regiao_brOrderByWithRelationInput | Regiao_brOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regiao_brs.
     */
    cursor?: Regiao_brWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regiao_brs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regiao_brs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regiao_brs.
     */
    distinct?: Regiao_brScalarFieldEnum | Regiao_brScalarFieldEnum[]
  }

  /**
   * Regiao_br findMany
   */
  export type Regiao_brFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * Filter, which Regiao_brs to fetch.
     */
    where?: Regiao_brWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regiao_brs to fetch.
     */
    orderBy?: Regiao_brOrderByWithRelationInput | Regiao_brOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regiao_brs.
     */
    cursor?: Regiao_brWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regiao_brs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regiao_brs.
     */
    skip?: number
    distinct?: Regiao_brScalarFieldEnum | Regiao_brScalarFieldEnum[]
  }

  /**
   * Regiao_br create
   */
  export type Regiao_brCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * The data needed to create a Regiao_br.
     */
    data: XOR<Regiao_brCreateInput, Regiao_brUncheckedCreateInput>
  }

  /**
   * Regiao_br createMany
   */
  export type Regiao_brCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regiao_brs.
     */
    data: Regiao_brCreateManyInput | Regiao_brCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regiao_br createManyAndReturn
   */
  export type Regiao_brCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * The data used to create many Regiao_brs.
     */
    data: Regiao_brCreateManyInput | Regiao_brCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regiao_br update
   */
  export type Regiao_brUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * The data needed to update a Regiao_br.
     */
    data: XOR<Regiao_brUpdateInput, Regiao_brUncheckedUpdateInput>
    /**
     * Choose, which Regiao_br to update.
     */
    where: Regiao_brWhereUniqueInput
  }

  /**
   * Regiao_br updateMany
   */
  export type Regiao_brUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regiao_brs.
     */
    data: XOR<Regiao_brUpdateManyMutationInput, Regiao_brUncheckedUpdateManyInput>
    /**
     * Filter which Regiao_brs to update
     */
    where?: Regiao_brWhereInput
    /**
     * Limit how many Regiao_brs to update.
     */
    limit?: number
  }

  /**
   * Regiao_br updateManyAndReturn
   */
  export type Regiao_brUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * The data used to update Regiao_brs.
     */
    data: XOR<Regiao_brUpdateManyMutationInput, Regiao_brUncheckedUpdateManyInput>
    /**
     * Filter which Regiao_brs to update
     */
    where?: Regiao_brWhereInput
    /**
     * Limit how many Regiao_brs to update.
     */
    limit?: number
  }

  /**
   * Regiao_br upsert
   */
  export type Regiao_brUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * The filter to search for the Regiao_br to update in case it exists.
     */
    where: Regiao_brWhereUniqueInput
    /**
     * In case the Regiao_br found by the `where` argument doesn't exist, create a new Regiao_br with this data.
     */
    create: XOR<Regiao_brCreateInput, Regiao_brUncheckedCreateInput>
    /**
     * In case the Regiao_br was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Regiao_brUpdateInput, Regiao_brUncheckedUpdateInput>
  }

  /**
   * Regiao_br delete
   */
  export type Regiao_brDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
    /**
     * Filter which Regiao_br to delete.
     */
    where: Regiao_brWhereUniqueInput
  }

  /**
   * Regiao_br deleteMany
   */
  export type Regiao_brDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regiao_brs to delete
     */
    where?: Regiao_brWhereInput
    /**
     * Limit how many Regiao_brs to delete.
     */
    limit?: number
  }

  /**
   * Regiao_br.Estado
   */
  export type Regiao_br$EstadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    where?: EstadoWhereInput
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    cursor?: EstadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Regiao_br without action
   */
  export type Regiao_brDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regiao_br
     */
    select?: Regiao_brSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regiao_br
     */
    omit?: Regiao_brOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Regiao_brInclude<ExtArgs> | null
  }


  /**
   * Model Estado
   */

  export type AggregateEstado = {
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  export type EstadoAvgAggregateOutputType = {
    id: number | null
    id_regiao: number | null
    codigo_ibge: number | null
  }

  export type EstadoSumAggregateOutputType = {
    id: number | null
    id_regiao: number | null
    codigo_ibge: number | null
  }

  export type EstadoMinAggregateOutputType = {
    id: number | null
    id_regiao: number | null
    codigo_ibge: number | null
    nome: string | null
    uf: string | null
  }

  export type EstadoMaxAggregateOutputType = {
    id: number | null
    id_regiao: number | null
    codigo_ibge: number | null
    nome: string | null
    uf: string | null
  }

  export type EstadoCountAggregateOutputType = {
    id: number
    id_regiao: number
    codigo_ibge: number
    nome: number
    uf: number
    _all: number
  }


  export type EstadoAvgAggregateInputType = {
    id?: true
    id_regiao?: true
    codigo_ibge?: true
  }

  export type EstadoSumAggregateInputType = {
    id?: true
    id_regiao?: true
    codigo_ibge?: true
  }

  export type EstadoMinAggregateInputType = {
    id?: true
    id_regiao?: true
    codigo_ibge?: true
    nome?: true
    uf?: true
  }

  export type EstadoMaxAggregateInputType = {
    id?: true
    id_regiao?: true
    codigo_ibge?: true
    nome?: true
    uf?: true
  }

  export type EstadoCountAggregateInputType = {
    id?: true
    id_regiao?: true
    codigo_ibge?: true
    nome?: true
    uf?: true
    _all?: true
  }

  export type EstadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estado to aggregate.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estados
    **/
    _count?: true | EstadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoMaxAggregateInputType
  }

  export type GetEstadoAggregateType<T extends EstadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstado[P]>
      : GetScalarType<T[P], AggregateEstado[P]>
  }




  export type EstadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoWhereInput
    orderBy?: EstadoOrderByWithAggregationInput | EstadoOrderByWithAggregationInput[]
    by: EstadoScalarFieldEnum[] | EstadoScalarFieldEnum
    having?: EstadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCountAggregateInputType | true
    _avg?: EstadoAvgAggregateInputType
    _sum?: EstadoSumAggregateInputType
    _min?: EstadoMinAggregateInputType
    _max?: EstadoMaxAggregateInputType
  }

  export type EstadoGroupByOutputType = {
    id: number
    id_regiao: number
    codigo_ibge: number
    nome: string
    uf: string
    _count: EstadoCountAggregateOutputType | null
    _avg: EstadoAvgAggregateOutputType | null
    _sum: EstadoSumAggregateOutputType | null
    _min: EstadoMinAggregateOutputType | null
    _max: EstadoMaxAggregateOutputType | null
  }

  type GetEstadoGroupByPayload<T extends EstadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoGroupByOutputType[P]>
        }
      >
    >


  export type EstadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_regiao?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    uf?: boolean
    Cidade?: boolean | Estado$CidadeArgs<ExtArgs>
    Regiao_br?: boolean | Regiao_brDefaultArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_regiao?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    uf?: boolean
    Regiao_br?: boolean | Regiao_brDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_regiao?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    uf?: boolean
    Regiao_br?: boolean | Regiao_brDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estado"]>

  export type EstadoSelectScalar = {
    id?: boolean
    id_regiao?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    uf?: boolean
  }

  export type EstadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_regiao" | "codigo_ibge" | "nome" | "uf", ExtArgs["result"]["estado"]>
  export type EstadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cidade?: boolean | Estado$CidadeArgs<ExtArgs>
    Regiao_br?: boolean | Regiao_brDefaultArgs<ExtArgs>
    _count?: boolean | EstadoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Regiao_br?: boolean | Regiao_brDefaultArgs<ExtArgs>
  }
  export type EstadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Regiao_br?: boolean | Regiao_brDefaultArgs<ExtArgs>
  }

  export type $EstadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estado"
    objects: {
      Cidade: Prisma.$CidadePayload<ExtArgs>[]
      Regiao_br: Prisma.$Regiao_brPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_regiao: number
      codigo_ibge: number
      nome: string
      uf: string
    }, ExtArgs["result"]["estado"]>
    composites: {}
  }

  type EstadoGetPayload<S extends boolean | null | undefined | EstadoDefaultArgs> = $Result.GetResult<Prisma.$EstadoPayload, S>

  type EstadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCountAggregateInputType | true
    }

  export interface EstadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estado'], meta: { name: 'Estado' } }
    /**
     * Find zero or one Estado that matches the filter.
     * @param {EstadoFindUniqueArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoFindUniqueArgs>(args: SelectSubset<T, EstadoFindUniqueArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoFindUniqueOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoFindFirstArgs>(args?: SelectSubset<T, EstadoFindFirstArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindFirstOrThrowArgs} args - Arguments to find a Estado
     * @example
     * // Get one Estado
     * const estado = await prisma.estado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estados
     * const estados = await prisma.estado.findMany()
     * 
     * // Get first 10 Estados
     * const estados = await prisma.estado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoWithIdOnly = await prisma.estado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoFindManyArgs>(args?: SelectSubset<T, EstadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estado.
     * @param {EstadoCreateArgs} args - Arguments to create a Estado.
     * @example
     * // Create one Estado
     * const Estado = await prisma.estado.create({
     *   data: {
     *     // ... data to create a Estado
     *   }
     * })
     * 
     */
    create<T extends EstadoCreateArgs>(args: SelectSubset<T, EstadoCreateArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estados.
     * @param {EstadoCreateManyArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoCreateManyArgs>(args?: SelectSubset<T, EstadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estados and returns the data saved in the database.
     * @param {EstadoCreateManyAndReturnArgs} args - Arguments to create many Estados.
     * @example
     * // Create many Estados
     * const estado = await prisma.estado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstadoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Estado.
     * @param {EstadoDeleteArgs} args - Arguments to delete one Estado.
     * @example
     * // Delete one Estado
     * const Estado = await prisma.estado.delete({
     *   where: {
     *     // ... filter to delete one Estado
     *   }
     * })
     * 
     */
    delete<T extends EstadoDeleteArgs>(args: SelectSubset<T, EstadoDeleteArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estado.
     * @param {EstadoUpdateArgs} args - Arguments to update one Estado.
     * @example
     * // Update one Estado
     * const estado = await prisma.estado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoUpdateArgs>(args: SelectSubset<T, EstadoUpdateArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estados.
     * @param {EstadoDeleteManyArgs} args - Arguments to filter Estados to delete.
     * @example
     * // Delete a few Estados
     * const { count } = await prisma.estado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoDeleteManyArgs>(args?: SelectSubset<T, EstadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoUpdateManyArgs>(args: SelectSubset<T, EstadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estados and returns the data updated in the database.
     * @param {EstadoUpdateManyAndReturnArgs} args - Arguments to update many Estados.
     * @example
     * // Update many Estados
     * const estado = await prisma.estado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Estados and only return the `id`
     * const estadoWithIdOnly = await prisma.estado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EstadoUpdateManyAndReturnArgs>(args: SelectSubset<T, EstadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Estado.
     * @param {EstadoUpsertArgs} args - Arguments to update or create a Estado.
     * @example
     * // Update or create a Estado
     * const estado = await prisma.estado.upsert({
     *   create: {
     *     // ... data to create a Estado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estado we want to update
     *   }
     * })
     */
    upsert<T extends EstadoUpsertArgs>(args: SelectSubset<T, EstadoUpsertArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCountArgs} args - Arguments to filter Estados to count.
     * @example
     * // Count the number of Estados
     * const count = await prisma.estado.count({
     *   where: {
     *     // ... the filter for the Estados we want to count
     *   }
     * })
    **/
    count<T extends EstadoCountArgs>(
      args?: Subset<T, EstadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstadoAggregateArgs>(args: Subset<T, EstadoAggregateArgs>): Prisma.PrismaPromise<GetEstadoAggregateType<T>>

    /**
     * Group by Estado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoGroupByArgs} args - Group by arguments.
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
      T extends EstadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoGroupByArgs['orderBy'] }
        : { orderBy?: EstadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estado model
   */
  readonly fields: EstadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cidade<T extends Estado$CidadeArgs<ExtArgs> = {}>(args?: Subset<T, Estado$CidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Regiao_br<T extends Regiao_brDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Regiao_brDefaultArgs<ExtArgs>>): Prisma__Regiao_brClient<$Result.GetResult<Prisma.$Regiao_brPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Estado model
   */
  interface EstadoFieldRefs {
    readonly id: FieldRef<"Estado", 'Int'>
    readonly id_regiao: FieldRef<"Estado", 'Int'>
    readonly codigo_ibge: FieldRef<"Estado", 'Int'>
    readonly nome: FieldRef<"Estado", 'String'>
    readonly uf: FieldRef<"Estado", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estado findUnique
   */
  export type EstadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado findUniqueOrThrow
   */
  export type EstadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado findFirst
   */
  export type EstadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado findFirstOrThrow
   */
  export type EstadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estado to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estados.
     */
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado findMany
   */
  export type EstadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter, which Estados to fetch.
     */
    where?: EstadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estados to fetch.
     */
    orderBy?: EstadoOrderByWithRelationInput | EstadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estados.
     */
    cursor?: EstadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estados.
     */
    skip?: number
    distinct?: EstadoScalarFieldEnum | EstadoScalarFieldEnum[]
  }

  /**
   * Estado create
   */
  export type EstadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to create a Estado.
     */
    data: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
  }

  /**
   * Estado createMany
   */
  export type EstadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estado createManyAndReturn
   */
  export type EstadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * The data used to create many Estados.
     */
    data: EstadoCreateManyInput | EstadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estado update
   */
  export type EstadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The data needed to update a Estado.
     */
    data: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
    /**
     * Choose, which Estado to update.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado updateMany
   */
  export type EstadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
  }

  /**
   * Estado updateManyAndReturn
   */
  export type EstadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * The data used to update Estados.
     */
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyInput>
    /**
     * Filter which Estados to update
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estado upsert
   */
  export type EstadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * The filter to search for the Estado to update in case it exists.
     */
    where: EstadoWhereUniqueInput
    /**
     * In case the Estado found by the `where` argument doesn't exist, create a new Estado with this data.
     */
    create: XOR<EstadoCreateInput, EstadoUncheckedCreateInput>
    /**
     * In case the Estado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoUpdateInput, EstadoUncheckedUpdateInput>
  }

  /**
   * Estado delete
   */
  export type EstadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
    /**
     * Filter which Estado to delete.
     */
    where: EstadoWhereUniqueInput
  }

  /**
   * Estado deleteMany
   */
  export type EstadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estados to delete
     */
    where?: EstadoWhereInput
    /**
     * Limit how many Estados to delete.
     */
    limit?: number
  }

  /**
   * Estado.Cidade
   */
  export type Estado$CidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    where?: CidadeWhereInput
    orderBy?: CidadeOrderByWithRelationInput | CidadeOrderByWithRelationInput[]
    cursor?: CidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CidadeScalarFieldEnum | CidadeScalarFieldEnum[]
  }

  /**
   * Estado without action
   */
  export type EstadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estado
     */
    select?: EstadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Estado
     */
    omit?: EstadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoInclude<ExtArgs> | null
  }


  /**
   * Model Cidade
   */

  export type AggregateCidade = {
    _count: CidadeCountAggregateOutputType | null
    _avg: CidadeAvgAggregateOutputType | null
    _sum: CidadeSumAggregateOutputType | null
    _min: CidadeMinAggregateOutputType | null
    _max: CidadeMaxAggregateOutputType | null
  }

  export type CidadeAvgAggregateOutputType = {
    id: number | null
    id_estado: number | null
    codigo_ibge: number | null
  }

  export type CidadeSumAggregateOutputType = {
    id: number | null
    id_estado: number | null
    codigo_ibge: number | null
  }

  export type CidadeMinAggregateOutputType = {
    id: number | null
    id_estado: number | null
    codigo_ibge: number | null
    nome: string | null
  }

  export type CidadeMaxAggregateOutputType = {
    id: number | null
    id_estado: number | null
    codigo_ibge: number | null
    nome: string | null
  }

  export type CidadeCountAggregateOutputType = {
    id: number
    id_estado: number
    codigo_ibge: number
    nome: number
    _all: number
  }


  export type CidadeAvgAggregateInputType = {
    id?: true
    id_estado?: true
    codigo_ibge?: true
  }

  export type CidadeSumAggregateInputType = {
    id?: true
    id_estado?: true
    codigo_ibge?: true
  }

  export type CidadeMinAggregateInputType = {
    id?: true
    id_estado?: true
    codigo_ibge?: true
    nome?: true
  }

  export type CidadeMaxAggregateInputType = {
    id?: true
    id_estado?: true
    codigo_ibge?: true
    nome?: true
  }

  export type CidadeCountAggregateInputType = {
    id?: true
    id_estado?: true
    codigo_ibge?: true
    nome?: true
    _all?: true
  }

  export type CidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cidade to aggregate.
     */
    where?: CidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadeOrderByWithRelationInput | CidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cidades
    **/
    _count?: true | CidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CidadeMaxAggregateInputType
  }

  export type GetCidadeAggregateType<T extends CidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateCidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCidade[P]>
      : GetScalarType<T[P], AggregateCidade[P]>
  }




  export type CidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CidadeWhereInput
    orderBy?: CidadeOrderByWithAggregationInput | CidadeOrderByWithAggregationInput[]
    by: CidadeScalarFieldEnum[] | CidadeScalarFieldEnum
    having?: CidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CidadeCountAggregateInputType | true
    _avg?: CidadeAvgAggregateInputType
    _sum?: CidadeSumAggregateInputType
    _min?: CidadeMinAggregateInputType
    _max?: CidadeMaxAggregateInputType
  }

  export type CidadeGroupByOutputType = {
    id: number
    id_estado: number
    codigo_ibge: number
    nome: string
    _count: CidadeCountAggregateOutputType | null
    _avg: CidadeAvgAggregateOutputType | null
    _sum: CidadeSumAggregateOutputType | null
    _min: CidadeMinAggregateOutputType | null
    _max: CidadeMaxAggregateOutputType | null
  }

  type GetCidadeGroupByPayload<T extends CidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CidadeGroupByOutputType[P]>
            : GetScalarType<T[P], CidadeGroupByOutputType[P]>
        }
      >
    >


  export type CidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_estado?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
    Bairro?: boolean | Cidade$BairroArgs<ExtArgs>
    _count?: boolean | CidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidade"]>

  export type CidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_estado?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidade"]>

  export type CidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_estado?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cidade"]>

  export type CidadeSelectScalar = {
    id?: boolean
    id_estado?: boolean
    codigo_ibge?: boolean
    nome?: boolean
  }

  export type CidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_estado" | "codigo_ibge" | "nome", ExtArgs["result"]["cidade"]>
  export type CidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
    Bairro?: boolean | Cidade$BairroArgs<ExtArgs>
    _count?: boolean | CidadeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }
  export type CidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estado?: boolean | EstadoDefaultArgs<ExtArgs>
  }

  export type $CidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cidade"
    objects: {
      Estado: Prisma.$EstadoPayload<ExtArgs>
      Bairro: Prisma.$BairroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_estado: number
      codigo_ibge: number
      nome: string
    }, ExtArgs["result"]["cidade"]>
    composites: {}
  }

  type CidadeGetPayload<S extends boolean | null | undefined | CidadeDefaultArgs> = $Result.GetResult<Prisma.$CidadePayload, S>

  type CidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CidadeCountAggregateInputType | true
    }

  export interface CidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cidade'], meta: { name: 'Cidade' } }
    /**
     * Find zero or one Cidade that matches the filter.
     * @param {CidadeFindUniqueArgs} args - Arguments to find a Cidade
     * @example
     * // Get one Cidade
     * const cidade = await prisma.cidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CidadeFindUniqueArgs>(args: SelectSubset<T, CidadeFindUniqueArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CidadeFindUniqueOrThrowArgs} args - Arguments to find a Cidade
     * @example
     * // Get one Cidade
     * const cidade = await prisma.cidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, CidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadeFindFirstArgs} args - Arguments to find a Cidade
     * @example
     * // Get one Cidade
     * const cidade = await prisma.cidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CidadeFindFirstArgs>(args?: SelectSubset<T, CidadeFindFirstArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadeFindFirstOrThrowArgs} args - Arguments to find a Cidade
     * @example
     * // Get one Cidade
     * const cidade = await prisma.cidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, CidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cidades
     * const cidades = await prisma.cidade.findMany()
     * 
     * // Get first 10 Cidades
     * const cidades = await prisma.cidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cidadeWithIdOnly = await prisma.cidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CidadeFindManyArgs>(args?: SelectSubset<T, CidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cidade.
     * @param {CidadeCreateArgs} args - Arguments to create a Cidade.
     * @example
     * // Create one Cidade
     * const Cidade = await prisma.cidade.create({
     *   data: {
     *     // ... data to create a Cidade
     *   }
     * })
     * 
     */
    create<T extends CidadeCreateArgs>(args: SelectSubset<T, CidadeCreateArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cidades.
     * @param {CidadeCreateManyArgs} args - Arguments to create many Cidades.
     * @example
     * // Create many Cidades
     * const cidade = await prisma.cidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CidadeCreateManyArgs>(args?: SelectSubset<T, CidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cidades and returns the data saved in the database.
     * @param {CidadeCreateManyAndReturnArgs} args - Arguments to create many Cidades.
     * @example
     * // Create many Cidades
     * const cidade = await prisma.cidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cidades and only return the `id`
     * const cidadeWithIdOnly = await prisma.cidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, CidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cidade.
     * @param {CidadeDeleteArgs} args - Arguments to delete one Cidade.
     * @example
     * // Delete one Cidade
     * const Cidade = await prisma.cidade.delete({
     *   where: {
     *     // ... filter to delete one Cidade
     *   }
     * })
     * 
     */
    delete<T extends CidadeDeleteArgs>(args: SelectSubset<T, CidadeDeleteArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cidade.
     * @param {CidadeUpdateArgs} args - Arguments to update one Cidade.
     * @example
     * // Update one Cidade
     * const cidade = await prisma.cidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CidadeUpdateArgs>(args: SelectSubset<T, CidadeUpdateArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cidades.
     * @param {CidadeDeleteManyArgs} args - Arguments to filter Cidades to delete.
     * @example
     * // Delete a few Cidades
     * const { count } = await prisma.cidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CidadeDeleteManyArgs>(args?: SelectSubset<T, CidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cidades
     * const cidade = await prisma.cidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CidadeUpdateManyArgs>(args: SelectSubset<T, CidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cidades and returns the data updated in the database.
     * @param {CidadeUpdateManyAndReturnArgs} args - Arguments to update many Cidades.
     * @example
     * // Update many Cidades
     * const cidade = await prisma.cidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cidades and only return the `id`
     * const cidadeWithIdOnly = await prisma.cidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, CidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cidade.
     * @param {CidadeUpsertArgs} args - Arguments to update or create a Cidade.
     * @example
     * // Update or create a Cidade
     * const cidade = await prisma.cidade.upsert({
     *   create: {
     *     // ... data to create a Cidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cidade we want to update
     *   }
     * })
     */
    upsert<T extends CidadeUpsertArgs>(args: SelectSubset<T, CidadeUpsertArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadeCountArgs} args - Arguments to filter Cidades to count.
     * @example
     * // Count the number of Cidades
     * const count = await prisma.cidade.count({
     *   where: {
     *     // ... the filter for the Cidades we want to count
     *   }
     * })
    **/
    count<T extends CidadeCountArgs>(
      args?: Subset<T, CidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CidadeAggregateArgs>(args: Subset<T, CidadeAggregateArgs>): Prisma.PrismaPromise<GetCidadeAggregateType<T>>

    /**
     * Group by Cidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CidadeGroupByArgs} args - Group by arguments.
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
      T extends CidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CidadeGroupByArgs['orderBy'] }
        : { orderBy?: CidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cidade model
   */
  readonly fields: CidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Estado<T extends EstadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoDefaultArgs<ExtArgs>>): Prisma__EstadoClient<$Result.GetResult<Prisma.$EstadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Bairro<T extends Cidade$BairroArgs<ExtArgs> = {}>(args?: Subset<T, Cidade$BairroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cidade model
   */
  interface CidadeFieldRefs {
    readonly id: FieldRef<"Cidade", 'Int'>
    readonly id_estado: FieldRef<"Cidade", 'Int'>
    readonly codigo_ibge: FieldRef<"Cidade", 'Int'>
    readonly nome: FieldRef<"Cidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cidade findUnique
   */
  export type CidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * Filter, which Cidade to fetch.
     */
    where: CidadeWhereUniqueInput
  }

  /**
   * Cidade findUniqueOrThrow
   */
  export type CidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * Filter, which Cidade to fetch.
     */
    where: CidadeWhereUniqueInput
  }

  /**
   * Cidade findFirst
   */
  export type CidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * Filter, which Cidade to fetch.
     */
    where?: CidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadeOrderByWithRelationInput | CidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cidades.
     */
    cursor?: CidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cidades.
     */
    distinct?: CidadeScalarFieldEnum | CidadeScalarFieldEnum[]
  }

  /**
   * Cidade findFirstOrThrow
   */
  export type CidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * Filter, which Cidade to fetch.
     */
    where?: CidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadeOrderByWithRelationInput | CidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cidades.
     */
    cursor?: CidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cidades.
     */
    distinct?: CidadeScalarFieldEnum | CidadeScalarFieldEnum[]
  }

  /**
   * Cidade findMany
   */
  export type CidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * Filter, which Cidades to fetch.
     */
    where?: CidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cidades to fetch.
     */
    orderBy?: CidadeOrderByWithRelationInput | CidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cidades.
     */
    cursor?: CidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cidades.
     */
    skip?: number
    distinct?: CidadeScalarFieldEnum | CidadeScalarFieldEnum[]
  }

  /**
   * Cidade create
   */
  export type CidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Cidade.
     */
    data: XOR<CidadeCreateInput, CidadeUncheckedCreateInput>
  }

  /**
   * Cidade createMany
   */
  export type CidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cidades.
     */
    data: CidadeCreateManyInput | CidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cidade createManyAndReturn
   */
  export type CidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * The data used to create many Cidades.
     */
    data: CidadeCreateManyInput | CidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cidade update
   */
  export type CidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Cidade.
     */
    data: XOR<CidadeUpdateInput, CidadeUncheckedUpdateInput>
    /**
     * Choose, which Cidade to update.
     */
    where: CidadeWhereUniqueInput
  }

  /**
   * Cidade updateMany
   */
  export type CidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cidades.
     */
    data: XOR<CidadeUpdateManyMutationInput, CidadeUncheckedUpdateManyInput>
    /**
     * Filter which Cidades to update
     */
    where?: CidadeWhereInput
    /**
     * Limit how many Cidades to update.
     */
    limit?: number
  }

  /**
   * Cidade updateManyAndReturn
   */
  export type CidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * The data used to update Cidades.
     */
    data: XOR<CidadeUpdateManyMutationInput, CidadeUncheckedUpdateManyInput>
    /**
     * Filter which Cidades to update
     */
    where?: CidadeWhereInput
    /**
     * Limit how many Cidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cidade upsert
   */
  export type CidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Cidade to update in case it exists.
     */
    where: CidadeWhereUniqueInput
    /**
     * In case the Cidade found by the `where` argument doesn't exist, create a new Cidade with this data.
     */
    create: XOR<CidadeCreateInput, CidadeUncheckedCreateInput>
    /**
     * In case the Cidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CidadeUpdateInput, CidadeUncheckedUpdateInput>
  }

  /**
   * Cidade delete
   */
  export type CidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
    /**
     * Filter which Cidade to delete.
     */
    where: CidadeWhereUniqueInput
  }

  /**
   * Cidade deleteMany
   */
  export type CidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cidades to delete
     */
    where?: CidadeWhereInput
    /**
     * Limit how many Cidades to delete.
     */
    limit?: number
  }

  /**
   * Cidade.Bairro
   */
  export type Cidade$BairroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    where?: BairroWhereInput
    orderBy?: BairroOrderByWithRelationInput | BairroOrderByWithRelationInput[]
    cursor?: BairroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BairroScalarFieldEnum | BairroScalarFieldEnum[]
  }

  /**
   * Cidade without action
   */
  export type CidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cidade
     */
    select?: CidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cidade
     */
    omit?: CidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CidadeInclude<ExtArgs> | null
  }


  /**
   * Model Bairro
   */

  export type AggregateBairro = {
    _count: BairroCountAggregateOutputType | null
    _avg: BairroAvgAggregateOutputType | null
    _sum: BairroSumAggregateOutputType | null
    _min: BairroMinAggregateOutputType | null
    _max: BairroMaxAggregateOutputType | null
  }

  export type BairroAvgAggregateOutputType = {
    id: number | null
    id_cidade: number | null
    codigo_ibge: number | null
  }

  export type BairroSumAggregateOutputType = {
    id: number | null
    id_cidade: number | null
    codigo_ibge: number | null
  }

  export type BairroMinAggregateOutputType = {
    id: number | null
    id_cidade: number | null
    codigo_ibge: number | null
    nome: string | null
  }

  export type BairroMaxAggregateOutputType = {
    id: number | null
    id_cidade: number | null
    codigo_ibge: number | null
    nome: string | null
  }

  export type BairroCountAggregateOutputType = {
    id: number
    id_cidade: number
    codigo_ibge: number
    nome: number
    _all: number
  }


  export type BairroAvgAggregateInputType = {
    id?: true
    id_cidade?: true
    codigo_ibge?: true
  }

  export type BairroSumAggregateInputType = {
    id?: true
    id_cidade?: true
    codigo_ibge?: true
  }

  export type BairroMinAggregateInputType = {
    id?: true
    id_cidade?: true
    codigo_ibge?: true
    nome?: true
  }

  export type BairroMaxAggregateInputType = {
    id?: true
    id_cidade?: true
    codigo_ibge?: true
    nome?: true
  }

  export type BairroCountAggregateInputType = {
    id?: true
    id_cidade?: true
    codigo_ibge?: true
    nome?: true
    _all?: true
  }

  export type BairroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bairro to aggregate.
     */
    where?: BairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bairros to fetch.
     */
    orderBy?: BairroOrderByWithRelationInput | BairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bairros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bairros
    **/
    _count?: true | BairroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BairroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BairroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BairroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BairroMaxAggregateInputType
  }

  export type GetBairroAggregateType<T extends BairroAggregateArgs> = {
        [P in keyof T & keyof AggregateBairro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBairro[P]>
      : GetScalarType<T[P], AggregateBairro[P]>
  }




  export type BairroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BairroWhereInput
    orderBy?: BairroOrderByWithAggregationInput | BairroOrderByWithAggregationInput[]
    by: BairroScalarFieldEnum[] | BairroScalarFieldEnum
    having?: BairroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BairroCountAggregateInputType | true
    _avg?: BairroAvgAggregateInputType
    _sum?: BairroSumAggregateInputType
    _min?: BairroMinAggregateInputType
    _max?: BairroMaxAggregateInputType
  }

  export type BairroGroupByOutputType = {
    id: number
    id_cidade: number
    codigo_ibge: number
    nome: string
    _count: BairroCountAggregateOutputType | null
    _avg: BairroAvgAggregateOutputType | null
    _sum: BairroSumAggregateOutputType | null
    _min: BairroMinAggregateOutputType | null
    _max: BairroMaxAggregateOutputType | null
  }

  type GetBairroGroupByPayload<T extends BairroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BairroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BairroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BairroGroupByOutputType[P]>
            : GetScalarType<T[P], BairroGroupByOutputType[P]>
        }
      >
    >


  export type BairroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cidade?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    Cidade?: boolean | CidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bairro"]>

  export type BairroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cidade?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    Cidade?: boolean | CidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bairro"]>

  export type BairroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_cidade?: boolean
    codigo_ibge?: boolean
    nome?: boolean
    Cidade?: boolean | CidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bairro"]>

  export type BairroSelectScalar = {
    id?: boolean
    id_cidade?: boolean
    codigo_ibge?: boolean
    nome?: boolean
  }

  export type BairroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_cidade" | "codigo_ibge" | "nome", ExtArgs["result"]["bairro"]>
  export type BairroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cidade?: boolean | CidadeDefaultArgs<ExtArgs>
  }
  export type BairroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cidade?: boolean | CidadeDefaultArgs<ExtArgs>
  }
  export type BairroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cidade?: boolean | CidadeDefaultArgs<ExtArgs>
  }

  export type $BairroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bairro"
    objects: {
      Cidade: Prisma.$CidadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_cidade: number
      codigo_ibge: number
      nome: string
    }, ExtArgs["result"]["bairro"]>
    composites: {}
  }

  type BairroGetPayload<S extends boolean | null | undefined | BairroDefaultArgs> = $Result.GetResult<Prisma.$BairroPayload, S>

  type BairroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BairroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BairroCountAggregateInputType | true
    }

  export interface BairroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bairro'], meta: { name: 'Bairro' } }
    /**
     * Find zero or one Bairro that matches the filter.
     * @param {BairroFindUniqueArgs} args - Arguments to find a Bairro
     * @example
     * // Get one Bairro
     * const bairro = await prisma.bairro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BairroFindUniqueArgs>(args: SelectSubset<T, BairroFindUniqueArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bairro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BairroFindUniqueOrThrowArgs} args - Arguments to find a Bairro
     * @example
     * // Get one Bairro
     * const bairro = await prisma.bairro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BairroFindUniqueOrThrowArgs>(args: SelectSubset<T, BairroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bairro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BairroFindFirstArgs} args - Arguments to find a Bairro
     * @example
     * // Get one Bairro
     * const bairro = await prisma.bairro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BairroFindFirstArgs>(args?: SelectSubset<T, BairroFindFirstArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bairro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BairroFindFirstOrThrowArgs} args - Arguments to find a Bairro
     * @example
     * // Get one Bairro
     * const bairro = await prisma.bairro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BairroFindFirstOrThrowArgs>(args?: SelectSubset<T, BairroFindFirstOrThrowArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bairros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BairroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bairros
     * const bairros = await prisma.bairro.findMany()
     * 
     * // Get first 10 Bairros
     * const bairros = await prisma.bairro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bairroWithIdOnly = await prisma.bairro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BairroFindManyArgs>(args?: SelectSubset<T, BairroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bairro.
     * @param {BairroCreateArgs} args - Arguments to create a Bairro.
     * @example
     * // Create one Bairro
     * const Bairro = await prisma.bairro.create({
     *   data: {
     *     // ... data to create a Bairro
     *   }
     * })
     * 
     */
    create<T extends BairroCreateArgs>(args: SelectSubset<T, BairroCreateArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bairros.
     * @param {BairroCreateManyArgs} args - Arguments to create many Bairros.
     * @example
     * // Create many Bairros
     * const bairro = await prisma.bairro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BairroCreateManyArgs>(args?: SelectSubset<T, BairroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bairros and returns the data saved in the database.
     * @param {BairroCreateManyAndReturnArgs} args - Arguments to create many Bairros.
     * @example
     * // Create many Bairros
     * const bairro = await prisma.bairro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bairros and only return the `id`
     * const bairroWithIdOnly = await prisma.bairro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BairroCreateManyAndReturnArgs>(args?: SelectSubset<T, BairroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bairro.
     * @param {BairroDeleteArgs} args - Arguments to delete one Bairro.
     * @example
     * // Delete one Bairro
     * const Bairro = await prisma.bairro.delete({
     *   where: {
     *     // ... filter to delete one Bairro
     *   }
     * })
     * 
     */
    delete<T extends BairroDeleteArgs>(args: SelectSubset<T, BairroDeleteArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bairro.
     * @param {BairroUpdateArgs} args - Arguments to update one Bairro.
     * @example
     * // Update one Bairro
     * const bairro = await prisma.bairro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BairroUpdateArgs>(args: SelectSubset<T, BairroUpdateArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bairros.
     * @param {BairroDeleteManyArgs} args - Arguments to filter Bairros to delete.
     * @example
     * // Delete a few Bairros
     * const { count } = await prisma.bairro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BairroDeleteManyArgs>(args?: SelectSubset<T, BairroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bairros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BairroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bairros
     * const bairro = await prisma.bairro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BairroUpdateManyArgs>(args: SelectSubset<T, BairroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bairros and returns the data updated in the database.
     * @param {BairroUpdateManyAndReturnArgs} args - Arguments to update many Bairros.
     * @example
     * // Update many Bairros
     * const bairro = await prisma.bairro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bairros and only return the `id`
     * const bairroWithIdOnly = await prisma.bairro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BairroUpdateManyAndReturnArgs>(args: SelectSubset<T, BairroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bairro.
     * @param {BairroUpsertArgs} args - Arguments to update or create a Bairro.
     * @example
     * // Update or create a Bairro
     * const bairro = await prisma.bairro.upsert({
     *   create: {
     *     // ... data to create a Bairro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bairro we want to update
     *   }
     * })
     */
    upsert<T extends BairroUpsertArgs>(args: SelectSubset<T, BairroUpsertArgs<ExtArgs>>): Prisma__BairroClient<$Result.GetResult<Prisma.$BairroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bairros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BairroCountArgs} args - Arguments to filter Bairros to count.
     * @example
     * // Count the number of Bairros
     * const count = await prisma.bairro.count({
     *   where: {
     *     // ... the filter for the Bairros we want to count
     *   }
     * })
    **/
    count<T extends BairroCountArgs>(
      args?: Subset<T, BairroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BairroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bairro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BairroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BairroAggregateArgs>(args: Subset<T, BairroAggregateArgs>): Prisma.PrismaPromise<GetBairroAggregateType<T>>

    /**
     * Group by Bairro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BairroGroupByArgs} args - Group by arguments.
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
      T extends BairroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BairroGroupByArgs['orderBy'] }
        : { orderBy?: BairroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BairroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBairroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bairro model
   */
  readonly fields: BairroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bairro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BairroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cidade<T extends CidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CidadeDefaultArgs<ExtArgs>>): Prisma__CidadeClient<$Result.GetResult<Prisma.$CidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bairro model
   */
  interface BairroFieldRefs {
    readonly id: FieldRef<"Bairro", 'Int'>
    readonly id_cidade: FieldRef<"Bairro", 'Int'>
    readonly codigo_ibge: FieldRef<"Bairro", 'Int'>
    readonly nome: FieldRef<"Bairro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bairro findUnique
   */
  export type BairroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * Filter, which Bairro to fetch.
     */
    where: BairroWhereUniqueInput
  }

  /**
   * Bairro findUniqueOrThrow
   */
  export type BairroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * Filter, which Bairro to fetch.
     */
    where: BairroWhereUniqueInput
  }

  /**
   * Bairro findFirst
   */
  export type BairroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * Filter, which Bairro to fetch.
     */
    where?: BairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bairros to fetch.
     */
    orderBy?: BairroOrderByWithRelationInput | BairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bairros.
     */
    cursor?: BairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bairros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bairros.
     */
    distinct?: BairroScalarFieldEnum | BairroScalarFieldEnum[]
  }

  /**
   * Bairro findFirstOrThrow
   */
  export type BairroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * Filter, which Bairro to fetch.
     */
    where?: BairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bairros to fetch.
     */
    orderBy?: BairroOrderByWithRelationInput | BairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bairros.
     */
    cursor?: BairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bairros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bairros.
     */
    distinct?: BairroScalarFieldEnum | BairroScalarFieldEnum[]
  }

  /**
   * Bairro findMany
   */
  export type BairroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * Filter, which Bairros to fetch.
     */
    where?: BairroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bairros to fetch.
     */
    orderBy?: BairroOrderByWithRelationInput | BairroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bairros.
     */
    cursor?: BairroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bairros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bairros.
     */
    skip?: number
    distinct?: BairroScalarFieldEnum | BairroScalarFieldEnum[]
  }

  /**
   * Bairro create
   */
  export type BairroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * The data needed to create a Bairro.
     */
    data: XOR<BairroCreateInput, BairroUncheckedCreateInput>
  }

  /**
   * Bairro createMany
   */
  export type BairroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bairros.
     */
    data: BairroCreateManyInput | BairroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bairro createManyAndReturn
   */
  export type BairroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * The data used to create many Bairros.
     */
    data: BairroCreateManyInput | BairroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bairro update
   */
  export type BairroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * The data needed to update a Bairro.
     */
    data: XOR<BairroUpdateInput, BairroUncheckedUpdateInput>
    /**
     * Choose, which Bairro to update.
     */
    where: BairroWhereUniqueInput
  }

  /**
   * Bairro updateMany
   */
  export type BairroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bairros.
     */
    data: XOR<BairroUpdateManyMutationInput, BairroUncheckedUpdateManyInput>
    /**
     * Filter which Bairros to update
     */
    where?: BairroWhereInput
    /**
     * Limit how many Bairros to update.
     */
    limit?: number
  }

  /**
   * Bairro updateManyAndReturn
   */
  export type BairroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * The data used to update Bairros.
     */
    data: XOR<BairroUpdateManyMutationInput, BairroUncheckedUpdateManyInput>
    /**
     * Filter which Bairros to update
     */
    where?: BairroWhereInput
    /**
     * Limit how many Bairros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bairro upsert
   */
  export type BairroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * The filter to search for the Bairro to update in case it exists.
     */
    where: BairroWhereUniqueInput
    /**
     * In case the Bairro found by the `where` argument doesn't exist, create a new Bairro with this data.
     */
    create: XOR<BairroCreateInput, BairroUncheckedCreateInput>
    /**
     * In case the Bairro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BairroUpdateInput, BairroUncheckedUpdateInput>
  }

  /**
   * Bairro delete
   */
  export type BairroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
    /**
     * Filter which Bairro to delete.
     */
    where: BairroWhereUniqueInput
  }

  /**
   * Bairro deleteMany
   */
  export type BairroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bairros to delete
     */
    where?: BairroWhereInput
    /**
     * Limit how many Bairros to delete.
     */
    limit?: number
  }

  /**
   * Bairro without action
   */
  export type BairroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bairro
     */
    select?: BairroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bairro
     */
    omit?: BairroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BairroInclude<ExtArgs> | null
  }


  /**
   * Model Categoria_servicos
   */

  export type AggregateCategoria_servicos = {
    _count: Categoria_servicosCountAggregateOutputType | null
    _avg: Categoria_servicosAvgAggregateOutputType | null
    _sum: Categoria_servicosSumAggregateOutputType | null
    _min: Categoria_servicosMinAggregateOutputType | null
    _max: Categoria_servicosMaxAggregateOutputType | null
  }

  export type Categoria_servicosAvgAggregateOutputType = {
    id: number | null
  }

  export type Categoria_servicosSumAggregateOutputType = {
    id: number | null
  }

  export type Categoria_servicosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    observacao: string | null
    ativo: boolean | null
  }

  export type Categoria_servicosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    observacao: string | null
    ativo: boolean | null
  }

  export type Categoria_servicosCountAggregateOutputType = {
    id: number
    nome: number
    observacao: number
    ativo: number
    _all: number
  }


  export type Categoria_servicosAvgAggregateInputType = {
    id?: true
  }

  export type Categoria_servicosSumAggregateInputType = {
    id?: true
  }

  export type Categoria_servicosMinAggregateInputType = {
    id?: true
    nome?: true
    observacao?: true
    ativo?: true
  }

  export type Categoria_servicosMaxAggregateInputType = {
    id?: true
    nome?: true
    observacao?: true
    ativo?: true
  }

  export type Categoria_servicosCountAggregateInputType = {
    id?: true
    nome?: true
    observacao?: true
    ativo?: true
    _all?: true
  }

  export type Categoria_servicosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria_servicos to aggregate.
     */
    where?: Categoria_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categoria_servicos to fetch.
     */
    orderBy?: Categoria_servicosOrderByWithRelationInput | Categoria_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Categoria_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categoria_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categoria_servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categoria_servicos
    **/
    _count?: true | Categoria_servicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Categoria_servicosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Categoria_servicosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Categoria_servicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Categoria_servicosMaxAggregateInputType
  }

  export type GetCategoria_servicosAggregateType<T extends Categoria_servicosAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria_servicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria_servicos[P]>
      : GetScalarType<T[P], AggregateCategoria_servicos[P]>
  }




  export type Categoria_servicosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Categoria_servicosWhereInput
    orderBy?: Categoria_servicosOrderByWithAggregationInput | Categoria_servicosOrderByWithAggregationInput[]
    by: Categoria_servicosScalarFieldEnum[] | Categoria_servicosScalarFieldEnum
    having?: Categoria_servicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Categoria_servicosCountAggregateInputType | true
    _avg?: Categoria_servicosAvgAggregateInputType
    _sum?: Categoria_servicosSumAggregateInputType
    _min?: Categoria_servicosMinAggregateInputType
    _max?: Categoria_servicosMaxAggregateInputType
  }

  export type Categoria_servicosGroupByOutputType = {
    id: number
    nome: string
    observacao: string | null
    ativo: boolean
    _count: Categoria_servicosCountAggregateOutputType | null
    _avg: Categoria_servicosAvgAggregateOutputType | null
    _sum: Categoria_servicosSumAggregateOutputType | null
    _min: Categoria_servicosMinAggregateOutputType | null
    _max: Categoria_servicosMaxAggregateOutputType | null
  }

  type GetCategoria_servicosGroupByPayload<T extends Categoria_servicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Categoria_servicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Categoria_servicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Categoria_servicosGroupByOutputType[P]>
            : GetScalarType<T[P], Categoria_servicosGroupByOutputType[P]>
        }
      >
    >


  export type Categoria_servicosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["categoria_servicos"]>

  export type Categoria_servicosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["categoria_servicos"]>

  export type Categoria_servicosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["categoria_servicos"]>

  export type Categoria_servicosSelectScalar = {
    id?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }

  export type Categoria_servicosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "observacao" | "ativo", ExtArgs["result"]["categoria_servicos"]>

  export type $Categoria_servicosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria_servicos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      observacao: string | null
      ativo: boolean
    }, ExtArgs["result"]["categoria_servicos"]>
    composites: {}
  }

  type Categoria_servicosGetPayload<S extends boolean | null | undefined | Categoria_servicosDefaultArgs> = $Result.GetResult<Prisma.$Categoria_servicosPayload, S>

  type Categoria_servicosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Categoria_servicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Categoria_servicosCountAggregateInputType | true
    }

  export interface Categoria_servicosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria_servicos'], meta: { name: 'Categoria_servicos' } }
    /**
     * Find zero or one Categoria_servicos that matches the filter.
     * @param {Categoria_servicosFindUniqueArgs} args - Arguments to find a Categoria_servicos
     * @example
     * // Get one Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Categoria_servicosFindUniqueArgs>(args: SelectSubset<T, Categoria_servicosFindUniqueArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria_servicos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Categoria_servicosFindUniqueOrThrowArgs} args - Arguments to find a Categoria_servicos
     * @example
     * // Get one Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Categoria_servicosFindUniqueOrThrowArgs>(args: SelectSubset<T, Categoria_servicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria_servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_servicosFindFirstArgs} args - Arguments to find a Categoria_servicos
     * @example
     * // Get one Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Categoria_servicosFindFirstArgs>(args?: SelectSubset<T, Categoria_servicosFindFirstArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria_servicos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_servicosFindFirstOrThrowArgs} args - Arguments to find a Categoria_servicos
     * @example
     * // Get one Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Categoria_servicosFindFirstOrThrowArgs>(args?: SelectSubset<T, Categoria_servicosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categoria_servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_servicosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.findMany()
     * 
     * // Get first 10 Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoria_servicosWithIdOnly = await prisma.categoria_servicos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Categoria_servicosFindManyArgs>(args?: SelectSubset<T, Categoria_servicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria_servicos.
     * @param {Categoria_servicosCreateArgs} args - Arguments to create a Categoria_servicos.
     * @example
     * // Create one Categoria_servicos
     * const Categoria_servicos = await prisma.categoria_servicos.create({
     *   data: {
     *     // ... data to create a Categoria_servicos
     *   }
     * })
     * 
     */
    create<T extends Categoria_servicosCreateArgs>(args: SelectSubset<T, Categoria_servicosCreateArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categoria_servicos.
     * @param {Categoria_servicosCreateManyArgs} args - Arguments to create many Categoria_servicos.
     * @example
     * // Create many Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Categoria_servicosCreateManyArgs>(args?: SelectSubset<T, Categoria_servicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categoria_servicos and returns the data saved in the database.
     * @param {Categoria_servicosCreateManyAndReturnArgs} args - Arguments to create many Categoria_servicos.
     * @example
     * // Create many Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categoria_servicos and only return the `id`
     * const categoria_servicosWithIdOnly = await prisma.categoria_servicos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Categoria_servicosCreateManyAndReturnArgs>(args?: SelectSubset<T, Categoria_servicosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria_servicos.
     * @param {Categoria_servicosDeleteArgs} args - Arguments to delete one Categoria_servicos.
     * @example
     * // Delete one Categoria_servicos
     * const Categoria_servicos = await prisma.categoria_servicos.delete({
     *   where: {
     *     // ... filter to delete one Categoria_servicos
     *   }
     * })
     * 
     */
    delete<T extends Categoria_servicosDeleteArgs>(args: SelectSubset<T, Categoria_servicosDeleteArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria_servicos.
     * @param {Categoria_servicosUpdateArgs} args - Arguments to update one Categoria_servicos.
     * @example
     * // Update one Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Categoria_servicosUpdateArgs>(args: SelectSubset<T, Categoria_servicosUpdateArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categoria_servicos.
     * @param {Categoria_servicosDeleteManyArgs} args - Arguments to filter Categoria_servicos to delete.
     * @example
     * // Delete a few Categoria_servicos
     * const { count } = await prisma.categoria_servicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Categoria_servicosDeleteManyArgs>(args?: SelectSubset<T, Categoria_servicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categoria_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_servicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Categoria_servicosUpdateManyArgs>(args: SelectSubset<T, Categoria_servicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categoria_servicos and returns the data updated in the database.
     * @param {Categoria_servicosUpdateManyAndReturnArgs} args - Arguments to update many Categoria_servicos.
     * @example
     * // Update many Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categoria_servicos and only return the `id`
     * const categoria_servicosWithIdOnly = await prisma.categoria_servicos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Categoria_servicosUpdateManyAndReturnArgs>(args: SelectSubset<T, Categoria_servicosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria_servicos.
     * @param {Categoria_servicosUpsertArgs} args - Arguments to update or create a Categoria_servicos.
     * @example
     * // Update or create a Categoria_servicos
     * const categoria_servicos = await prisma.categoria_servicos.upsert({
     *   create: {
     *     // ... data to create a Categoria_servicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria_servicos we want to update
     *   }
     * })
     */
    upsert<T extends Categoria_servicosUpsertArgs>(args: SelectSubset<T, Categoria_servicosUpsertArgs<ExtArgs>>): Prisma__Categoria_servicosClient<$Result.GetResult<Prisma.$Categoria_servicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categoria_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_servicosCountArgs} args - Arguments to filter Categoria_servicos to count.
     * @example
     * // Count the number of Categoria_servicos
     * const count = await prisma.categoria_servicos.count({
     *   where: {
     *     // ... the filter for the Categoria_servicos we want to count
     *   }
     * })
    **/
    count<T extends Categoria_servicosCountArgs>(
      args?: Subset<T, Categoria_servicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Categoria_servicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_servicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Categoria_servicosAggregateArgs>(args: Subset<T, Categoria_servicosAggregateArgs>): Prisma.PrismaPromise<GetCategoria_servicosAggregateType<T>>

    /**
     * Group by Categoria_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Categoria_servicosGroupByArgs} args - Group by arguments.
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
      T extends Categoria_servicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Categoria_servicosGroupByArgs['orderBy'] }
        : { orderBy?: Categoria_servicosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Categoria_servicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoria_servicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria_servicos model
   */
  readonly fields: Categoria_servicosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria_servicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Categoria_servicosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Categoria_servicos model
   */
  interface Categoria_servicosFieldRefs {
    readonly id: FieldRef<"Categoria_servicos", 'Int'>
    readonly nome: FieldRef<"Categoria_servicos", 'String'>
    readonly observacao: FieldRef<"Categoria_servicos", 'String'>
    readonly ativo: FieldRef<"Categoria_servicos", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Categoria_servicos findUnique
   */
  export type Categoria_servicosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Categoria_servicos to fetch.
     */
    where: Categoria_servicosWhereUniqueInput
  }

  /**
   * Categoria_servicos findUniqueOrThrow
   */
  export type Categoria_servicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Categoria_servicos to fetch.
     */
    where: Categoria_servicosWhereUniqueInput
  }

  /**
   * Categoria_servicos findFirst
   */
  export type Categoria_servicosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Categoria_servicos to fetch.
     */
    where?: Categoria_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categoria_servicos to fetch.
     */
    orderBy?: Categoria_servicosOrderByWithRelationInput | Categoria_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categoria_servicos.
     */
    cursor?: Categoria_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categoria_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categoria_servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categoria_servicos.
     */
    distinct?: Categoria_servicosScalarFieldEnum | Categoria_servicosScalarFieldEnum[]
  }

  /**
   * Categoria_servicos findFirstOrThrow
   */
  export type Categoria_servicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Categoria_servicos to fetch.
     */
    where?: Categoria_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categoria_servicos to fetch.
     */
    orderBy?: Categoria_servicosOrderByWithRelationInput | Categoria_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categoria_servicos.
     */
    cursor?: Categoria_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categoria_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categoria_servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categoria_servicos.
     */
    distinct?: Categoria_servicosScalarFieldEnum | Categoria_servicosScalarFieldEnum[]
  }

  /**
   * Categoria_servicos findMany
   */
  export type Categoria_servicosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Categoria_servicos to fetch.
     */
    where?: Categoria_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categoria_servicos to fetch.
     */
    orderBy?: Categoria_servicosOrderByWithRelationInput | Categoria_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categoria_servicos.
     */
    cursor?: Categoria_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categoria_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categoria_servicos.
     */
    skip?: number
    distinct?: Categoria_servicosScalarFieldEnum | Categoria_servicosScalarFieldEnum[]
  }

  /**
   * Categoria_servicos create
   */
  export type Categoria_servicosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * The data needed to create a Categoria_servicos.
     */
    data: XOR<Categoria_servicosCreateInput, Categoria_servicosUncheckedCreateInput>
  }

  /**
   * Categoria_servicos createMany
   */
  export type Categoria_servicosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categoria_servicos.
     */
    data: Categoria_servicosCreateManyInput | Categoria_servicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria_servicos createManyAndReturn
   */
  export type Categoria_servicosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * The data used to create many Categoria_servicos.
     */
    data: Categoria_servicosCreateManyInput | Categoria_servicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria_servicos update
   */
  export type Categoria_servicosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * The data needed to update a Categoria_servicos.
     */
    data: XOR<Categoria_servicosUpdateInput, Categoria_servicosUncheckedUpdateInput>
    /**
     * Choose, which Categoria_servicos to update.
     */
    where: Categoria_servicosWhereUniqueInput
  }

  /**
   * Categoria_servicos updateMany
   */
  export type Categoria_servicosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categoria_servicos.
     */
    data: XOR<Categoria_servicosUpdateManyMutationInput, Categoria_servicosUncheckedUpdateManyInput>
    /**
     * Filter which Categoria_servicos to update
     */
    where?: Categoria_servicosWhereInput
    /**
     * Limit how many Categoria_servicos to update.
     */
    limit?: number
  }

  /**
   * Categoria_servicos updateManyAndReturn
   */
  export type Categoria_servicosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * The data used to update Categoria_servicos.
     */
    data: XOR<Categoria_servicosUpdateManyMutationInput, Categoria_servicosUncheckedUpdateManyInput>
    /**
     * Filter which Categoria_servicos to update
     */
    where?: Categoria_servicosWhereInput
    /**
     * Limit how many Categoria_servicos to update.
     */
    limit?: number
  }

  /**
   * Categoria_servicos upsert
   */
  export type Categoria_servicosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * The filter to search for the Categoria_servicos to update in case it exists.
     */
    where: Categoria_servicosWhereUniqueInput
    /**
     * In case the Categoria_servicos found by the `where` argument doesn't exist, create a new Categoria_servicos with this data.
     */
    create: XOR<Categoria_servicosCreateInput, Categoria_servicosUncheckedCreateInput>
    /**
     * In case the Categoria_servicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Categoria_servicosUpdateInput, Categoria_servicosUncheckedUpdateInput>
  }

  /**
   * Categoria_servicos delete
   */
  export type Categoria_servicosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
    /**
     * Filter which Categoria_servicos to delete.
     */
    where: Categoria_servicosWhereUniqueInput
  }

  /**
   * Categoria_servicos deleteMany
   */
  export type Categoria_servicosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria_servicos to delete
     */
    where?: Categoria_servicosWhereInput
    /**
     * Limit how many Categoria_servicos to delete.
     */
    limit?: number
  }

  /**
   * Categoria_servicos without action
   */
  export type Categoria_servicosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria_servicos
     */
    select?: Categoria_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria_servicos
     */
    omit?: Categoria_servicosOmit<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    id: number | null
    id_categoria: number | null
  }

  export type ServicoSumAggregateOutputType = {
    id: number | null
    id_categoria: number | null
  }

  export type ServicoMinAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    nome: string | null
    observacao: string | null
    ativo: boolean | null
  }

  export type ServicoMaxAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    nome: string | null
    observacao: string | null
    ativo: boolean | null
  }

  export type ServicoCountAggregateOutputType = {
    id: number
    id_categoria: number
    nome: number
    observacao: number
    ativo: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    id?: true
    id_categoria?: true
  }

  export type ServicoSumAggregateInputType = {
    id?: true
    id_categoria?: true
  }

  export type ServicoMinAggregateInputType = {
    id?: true
    id_categoria?: true
    nome?: true
    observacao?: true
    ativo?: true
  }

  export type ServicoMaxAggregateInputType = {
    id?: true
    id_categoria?: true
    nome?: true
    observacao?: true
    ativo?: true
  }

  export type ServicoCountAggregateInputType = {
    id?: true
    id_categoria?: true
    nome?: true
    observacao?: true
    ativo?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id: number
    id_categoria: number
    nome: string
    observacao: string | null
    ativo: boolean
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_categoria?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_categoria?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_categoria?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id?: boolean
    id_categoria?: boolean
    nome?: boolean
    observacao?: boolean
    ativo?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_categoria" | "nome" | "observacao" | "ativo", ExtArgs["result"]["servico"]>

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_categoria: number
      nome: string
      observacao: string | null
      ativo: boolean
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoWithIdOnly = await prisma.servico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {ServicoUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
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
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id: FieldRef<"Servico", 'Int'>
    readonly id_categoria: FieldRef<"Servico", 'Int'>
    readonly nome: FieldRef<"Servico", 'String'>
    readonly observacao: FieldRef<"Servico", 'String'>
    readonly ativo: FieldRef<"Servico", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico updateManyAndReturn
   */
  export type ServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
  }


  /**
   * Model Empresa_servicos
   */

  export type AggregateEmpresa_servicos = {
    _count: Empresa_servicosCountAggregateOutputType | null
    _avg: Empresa_servicosAvgAggregateOutputType | null
    _sum: Empresa_servicosSumAggregateOutputType | null
    _min: Empresa_servicosMinAggregateOutputType | null
    _max: Empresa_servicosMaxAggregateOutputType | null
  }

  export type Empresa_servicosAvgAggregateOutputType = {
    id: number | null
    id_servico: number | null
    id_empresa: number | null
  }

  export type Empresa_servicosSumAggregateOutputType = {
    id: number | null
    id_servico: number | null
    id_empresa: number | null
  }

  export type Empresa_servicosMinAggregateOutputType = {
    id: number | null
    id_servico: number | null
    id_empresa: number | null
    observacao: string | null
  }

  export type Empresa_servicosMaxAggregateOutputType = {
    id: number | null
    id_servico: number | null
    id_empresa: number | null
    observacao: string | null
  }

  export type Empresa_servicosCountAggregateOutputType = {
    id: number
    id_servico: number
    id_empresa: number
    observacao: number
    _all: number
  }


  export type Empresa_servicosAvgAggregateInputType = {
    id?: true
    id_servico?: true
    id_empresa?: true
  }

  export type Empresa_servicosSumAggregateInputType = {
    id?: true
    id_servico?: true
    id_empresa?: true
  }

  export type Empresa_servicosMinAggregateInputType = {
    id?: true
    id_servico?: true
    id_empresa?: true
    observacao?: true
  }

  export type Empresa_servicosMaxAggregateInputType = {
    id?: true
    id_servico?: true
    id_empresa?: true
    observacao?: true
  }

  export type Empresa_servicosCountAggregateInputType = {
    id?: true
    id_servico?: true
    id_empresa?: true
    observacao?: true
    _all?: true
  }

  export type Empresa_servicosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa_servicos to aggregate.
     */
    where?: Empresa_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresa_servicos to fetch.
     */
    orderBy?: Empresa_servicosOrderByWithRelationInput | Empresa_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Empresa_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresa_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresa_servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresa_servicos
    **/
    _count?: true | Empresa_servicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Empresa_servicosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Empresa_servicosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Empresa_servicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Empresa_servicosMaxAggregateInputType
  }

  export type GetEmpresa_servicosAggregateType<T extends Empresa_servicosAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa_servicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa_servicos[P]>
      : GetScalarType<T[P], AggregateEmpresa_servicos[P]>
  }




  export type Empresa_servicosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Empresa_servicosWhereInput
    orderBy?: Empresa_servicosOrderByWithAggregationInput | Empresa_servicosOrderByWithAggregationInput[]
    by: Empresa_servicosScalarFieldEnum[] | Empresa_servicosScalarFieldEnum
    having?: Empresa_servicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Empresa_servicosCountAggregateInputType | true
    _avg?: Empresa_servicosAvgAggregateInputType
    _sum?: Empresa_servicosSumAggregateInputType
    _min?: Empresa_servicosMinAggregateInputType
    _max?: Empresa_servicosMaxAggregateInputType
  }

  export type Empresa_servicosGroupByOutputType = {
    id: number
    id_servico: number
    id_empresa: number
    observacao: string | null
    _count: Empresa_servicosCountAggregateOutputType | null
    _avg: Empresa_servicosAvgAggregateOutputType | null
    _sum: Empresa_servicosSumAggregateOutputType | null
    _min: Empresa_servicosMinAggregateOutputType | null
    _max: Empresa_servicosMaxAggregateOutputType | null
  }

  type GetEmpresa_servicosGroupByPayload<T extends Empresa_servicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Empresa_servicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Empresa_servicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Empresa_servicosGroupByOutputType[P]>
            : GetScalarType<T[P], Empresa_servicosGroupByOutputType[P]>
        }
      >
    >


  export type Empresa_servicosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_servico?: boolean
    id_empresa?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["empresa_servicos"]>

  export type Empresa_servicosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_servico?: boolean
    id_empresa?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["empresa_servicos"]>

  export type Empresa_servicosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_servico?: boolean
    id_empresa?: boolean
    observacao?: boolean
  }, ExtArgs["result"]["empresa_servicos"]>

  export type Empresa_servicosSelectScalar = {
    id?: boolean
    id_servico?: boolean
    id_empresa?: boolean
    observacao?: boolean
  }

  export type Empresa_servicosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_servico" | "id_empresa" | "observacao", ExtArgs["result"]["empresa_servicos"]>

  export type $Empresa_servicosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa_servicos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_servico: number
      id_empresa: number
      observacao: string | null
    }, ExtArgs["result"]["empresa_servicos"]>
    composites: {}
  }

  type Empresa_servicosGetPayload<S extends boolean | null | undefined | Empresa_servicosDefaultArgs> = $Result.GetResult<Prisma.$Empresa_servicosPayload, S>

  type Empresa_servicosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Empresa_servicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Empresa_servicosCountAggregateInputType | true
    }

  export interface Empresa_servicosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa_servicos'], meta: { name: 'Empresa_servicos' } }
    /**
     * Find zero or one Empresa_servicos that matches the filter.
     * @param {Empresa_servicosFindUniqueArgs} args - Arguments to find a Empresa_servicos
     * @example
     * // Get one Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Empresa_servicosFindUniqueArgs>(args: SelectSubset<T, Empresa_servicosFindUniqueArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa_servicos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Empresa_servicosFindUniqueOrThrowArgs} args - Arguments to find a Empresa_servicos
     * @example
     * // Get one Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Empresa_servicosFindUniqueOrThrowArgs>(args: SelectSubset<T, Empresa_servicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa_servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Empresa_servicosFindFirstArgs} args - Arguments to find a Empresa_servicos
     * @example
     * // Get one Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Empresa_servicosFindFirstArgs>(args?: SelectSubset<T, Empresa_servicosFindFirstArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa_servicos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Empresa_servicosFindFirstOrThrowArgs} args - Arguments to find a Empresa_servicos
     * @example
     * // Get one Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Empresa_servicosFindFirstOrThrowArgs>(args?: SelectSubset<T, Empresa_servicosFindFirstOrThrowArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresa_servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Empresa_servicosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.findMany()
     * 
     * // Get first 10 Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresa_servicosWithIdOnly = await prisma.empresa_servicos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Empresa_servicosFindManyArgs>(args?: SelectSubset<T, Empresa_servicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa_servicos.
     * @param {Empresa_servicosCreateArgs} args - Arguments to create a Empresa_servicos.
     * @example
     * // Create one Empresa_servicos
     * const Empresa_servicos = await prisma.empresa_servicos.create({
     *   data: {
     *     // ... data to create a Empresa_servicos
     *   }
     * })
     * 
     */
    create<T extends Empresa_servicosCreateArgs>(args: SelectSubset<T, Empresa_servicosCreateArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresa_servicos.
     * @param {Empresa_servicosCreateManyArgs} args - Arguments to create many Empresa_servicos.
     * @example
     * // Create many Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Empresa_servicosCreateManyArgs>(args?: SelectSubset<T, Empresa_servicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresa_servicos and returns the data saved in the database.
     * @param {Empresa_servicosCreateManyAndReturnArgs} args - Arguments to create many Empresa_servicos.
     * @example
     * // Create many Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresa_servicos and only return the `id`
     * const empresa_servicosWithIdOnly = await prisma.empresa_servicos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Empresa_servicosCreateManyAndReturnArgs>(args?: SelectSubset<T, Empresa_servicosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa_servicos.
     * @param {Empresa_servicosDeleteArgs} args - Arguments to delete one Empresa_servicos.
     * @example
     * // Delete one Empresa_servicos
     * const Empresa_servicos = await prisma.empresa_servicos.delete({
     *   where: {
     *     // ... filter to delete one Empresa_servicos
     *   }
     * })
     * 
     */
    delete<T extends Empresa_servicosDeleteArgs>(args: SelectSubset<T, Empresa_servicosDeleteArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa_servicos.
     * @param {Empresa_servicosUpdateArgs} args - Arguments to update one Empresa_servicos.
     * @example
     * // Update one Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Empresa_servicosUpdateArgs>(args: SelectSubset<T, Empresa_servicosUpdateArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresa_servicos.
     * @param {Empresa_servicosDeleteManyArgs} args - Arguments to filter Empresa_servicos to delete.
     * @example
     * // Delete a few Empresa_servicos
     * const { count } = await prisma.empresa_servicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Empresa_servicosDeleteManyArgs>(args?: SelectSubset<T, Empresa_servicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresa_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Empresa_servicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Empresa_servicosUpdateManyArgs>(args: SelectSubset<T, Empresa_servicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresa_servicos and returns the data updated in the database.
     * @param {Empresa_servicosUpdateManyAndReturnArgs} args - Arguments to update many Empresa_servicos.
     * @example
     * // Update many Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresa_servicos and only return the `id`
     * const empresa_servicosWithIdOnly = await prisma.empresa_servicos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Empresa_servicosUpdateManyAndReturnArgs>(args: SelectSubset<T, Empresa_servicosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa_servicos.
     * @param {Empresa_servicosUpsertArgs} args - Arguments to update or create a Empresa_servicos.
     * @example
     * // Update or create a Empresa_servicos
     * const empresa_servicos = await prisma.empresa_servicos.upsert({
     *   create: {
     *     // ... data to create a Empresa_servicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa_servicos we want to update
     *   }
     * })
     */
    upsert<T extends Empresa_servicosUpsertArgs>(args: SelectSubset<T, Empresa_servicosUpsertArgs<ExtArgs>>): Prisma__Empresa_servicosClient<$Result.GetResult<Prisma.$Empresa_servicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresa_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Empresa_servicosCountArgs} args - Arguments to filter Empresa_servicos to count.
     * @example
     * // Count the number of Empresa_servicos
     * const count = await prisma.empresa_servicos.count({
     *   where: {
     *     // ... the filter for the Empresa_servicos we want to count
     *   }
     * })
    **/
    count<T extends Empresa_servicosCountArgs>(
      args?: Subset<T, Empresa_servicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Empresa_servicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Empresa_servicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Empresa_servicosAggregateArgs>(args: Subset<T, Empresa_servicosAggregateArgs>): Prisma.PrismaPromise<GetEmpresa_servicosAggregateType<T>>

    /**
     * Group by Empresa_servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Empresa_servicosGroupByArgs} args - Group by arguments.
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
      T extends Empresa_servicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Empresa_servicosGroupByArgs['orderBy'] }
        : { orderBy?: Empresa_servicosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Empresa_servicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresa_servicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa_servicos model
   */
  readonly fields: Empresa_servicosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa_servicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Empresa_servicosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Empresa_servicos model
   */
  interface Empresa_servicosFieldRefs {
    readonly id: FieldRef<"Empresa_servicos", 'Int'>
    readonly id_servico: FieldRef<"Empresa_servicos", 'Int'>
    readonly id_empresa: FieldRef<"Empresa_servicos", 'Int'>
    readonly observacao: FieldRef<"Empresa_servicos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa_servicos findUnique
   */
  export type Empresa_servicosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Empresa_servicos to fetch.
     */
    where: Empresa_servicosWhereUniqueInput
  }

  /**
   * Empresa_servicos findUniqueOrThrow
   */
  export type Empresa_servicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Empresa_servicos to fetch.
     */
    where: Empresa_servicosWhereUniqueInput
  }

  /**
   * Empresa_servicos findFirst
   */
  export type Empresa_servicosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Empresa_servicos to fetch.
     */
    where?: Empresa_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresa_servicos to fetch.
     */
    orderBy?: Empresa_servicosOrderByWithRelationInput | Empresa_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresa_servicos.
     */
    cursor?: Empresa_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresa_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresa_servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresa_servicos.
     */
    distinct?: Empresa_servicosScalarFieldEnum | Empresa_servicosScalarFieldEnum[]
  }

  /**
   * Empresa_servicos findFirstOrThrow
   */
  export type Empresa_servicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Empresa_servicos to fetch.
     */
    where?: Empresa_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresa_servicos to fetch.
     */
    orderBy?: Empresa_servicosOrderByWithRelationInput | Empresa_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresa_servicos.
     */
    cursor?: Empresa_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresa_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresa_servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresa_servicos.
     */
    distinct?: Empresa_servicosScalarFieldEnum | Empresa_servicosScalarFieldEnum[]
  }

  /**
   * Empresa_servicos findMany
   */
  export type Empresa_servicosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * Filter, which Empresa_servicos to fetch.
     */
    where?: Empresa_servicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresa_servicos to fetch.
     */
    orderBy?: Empresa_servicosOrderByWithRelationInput | Empresa_servicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresa_servicos.
     */
    cursor?: Empresa_servicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresa_servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresa_servicos.
     */
    skip?: number
    distinct?: Empresa_servicosScalarFieldEnum | Empresa_servicosScalarFieldEnum[]
  }

  /**
   * Empresa_servicos create
   */
  export type Empresa_servicosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * The data needed to create a Empresa_servicos.
     */
    data: XOR<Empresa_servicosCreateInput, Empresa_servicosUncheckedCreateInput>
  }

  /**
   * Empresa_servicos createMany
   */
  export type Empresa_servicosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresa_servicos.
     */
    data: Empresa_servicosCreateManyInput | Empresa_servicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa_servicos createManyAndReturn
   */
  export type Empresa_servicosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * The data used to create many Empresa_servicos.
     */
    data: Empresa_servicosCreateManyInput | Empresa_servicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa_servicos update
   */
  export type Empresa_servicosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * The data needed to update a Empresa_servicos.
     */
    data: XOR<Empresa_servicosUpdateInput, Empresa_servicosUncheckedUpdateInput>
    /**
     * Choose, which Empresa_servicos to update.
     */
    where: Empresa_servicosWhereUniqueInput
  }

  /**
   * Empresa_servicos updateMany
   */
  export type Empresa_servicosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresa_servicos.
     */
    data: XOR<Empresa_servicosUpdateManyMutationInput, Empresa_servicosUncheckedUpdateManyInput>
    /**
     * Filter which Empresa_servicos to update
     */
    where?: Empresa_servicosWhereInput
    /**
     * Limit how many Empresa_servicos to update.
     */
    limit?: number
  }

  /**
   * Empresa_servicos updateManyAndReturn
   */
  export type Empresa_servicosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * The data used to update Empresa_servicos.
     */
    data: XOR<Empresa_servicosUpdateManyMutationInput, Empresa_servicosUncheckedUpdateManyInput>
    /**
     * Filter which Empresa_servicos to update
     */
    where?: Empresa_servicosWhereInput
    /**
     * Limit how many Empresa_servicos to update.
     */
    limit?: number
  }

  /**
   * Empresa_servicos upsert
   */
  export type Empresa_servicosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * The filter to search for the Empresa_servicos to update in case it exists.
     */
    where: Empresa_servicosWhereUniqueInput
    /**
     * In case the Empresa_servicos found by the `where` argument doesn't exist, create a new Empresa_servicos with this data.
     */
    create: XOR<Empresa_servicosCreateInput, Empresa_servicosUncheckedCreateInput>
    /**
     * In case the Empresa_servicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Empresa_servicosUpdateInput, Empresa_servicosUncheckedUpdateInput>
  }

  /**
   * Empresa_servicos delete
   */
  export type Empresa_servicosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
    /**
     * Filter which Empresa_servicos to delete.
     */
    where: Empresa_servicosWhereUniqueInput
  }

  /**
   * Empresa_servicos deleteMany
   */
  export type Empresa_servicosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa_servicos to delete
     */
    where?: Empresa_servicosWhereInput
    /**
     * Limit how many Empresa_servicos to delete.
     */
    limit?: number
  }

  /**
   * Empresa_servicos without action
   */
  export type Empresa_servicosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa_servicos
     */
    select?: Empresa_servicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa_servicos
     */
    omit?: Empresa_servicosOmit<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    id_clerk: 'id_clerk',
    email: 'email',
    nome: 'nome',
    dataCriacao: 'dataCriacao'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    id_regiao: 'id_regiao',
    id_estado: 'id_estado',
    id_cidade: 'id_cidade',
    telefone: 'telefone',
    cnpj: 'cnpj',
    email: 'email',
    site: 'site',
    cep: 'cep',
    endereco: 'endereco',
    complemento_endereco: 'complemento_endereco',
    numero_endereco: 'numero_endereco'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const Regiao_brScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type Regiao_brScalarFieldEnum = (typeof Regiao_brScalarFieldEnum)[keyof typeof Regiao_brScalarFieldEnum]


  export const EstadoScalarFieldEnum: {
    id: 'id',
    id_regiao: 'id_regiao',
    codigo_ibge: 'codigo_ibge',
    nome: 'nome',
    uf: 'uf'
  };

  export type EstadoScalarFieldEnum = (typeof EstadoScalarFieldEnum)[keyof typeof EstadoScalarFieldEnum]


  export const CidadeScalarFieldEnum: {
    id: 'id',
    id_estado: 'id_estado',
    codigo_ibge: 'codigo_ibge',
    nome: 'nome'
  };

  export type CidadeScalarFieldEnum = (typeof CidadeScalarFieldEnum)[keyof typeof CidadeScalarFieldEnum]


  export const BairroScalarFieldEnum: {
    id: 'id',
    id_cidade: 'id_cidade',
    codigo_ibge: 'codigo_ibge',
    nome: 'nome'
  };

  export type BairroScalarFieldEnum = (typeof BairroScalarFieldEnum)[keyof typeof BairroScalarFieldEnum]


  export const Categoria_servicosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    observacao: 'observacao',
    ativo: 'ativo'
  };

  export type Categoria_servicosScalarFieldEnum = (typeof Categoria_servicosScalarFieldEnum)[keyof typeof Categoria_servicosScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id: 'id',
    id_categoria: 'id_categoria',
    nome: 'nome',
    observacao: 'observacao',
    ativo: 'ativo'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const Empresa_servicosScalarFieldEnum: {
    id: 'id',
    id_servico: 'id_servico',
    id_empresa: 'id_empresa',
    observacao: 'observacao'
  };

  export type Empresa_servicosScalarFieldEnum = (typeof Empresa_servicosScalarFieldEnum)[keyof typeof Empresa_servicosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    id_clerk?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    id_clerk?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    dataCriacao?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_clerk?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    email?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
  }, "id" | "id_clerk">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    id_clerk?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    dataCriacao?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    id_clerk?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: IntFilter<"Empresa"> | number
    nome?: StringFilter<"Empresa"> | string
    id_regiao?: IntFilter<"Empresa"> | number
    id_estado?: IntFilter<"Empresa"> | number
    id_cidade?: IntFilter<"Empresa"> | number
    telefone?: StringFilter<"Empresa"> | string
    cnpj?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    site?: StringNullableFilter<"Empresa"> | string | null
    cep?: StringNullableFilter<"Empresa"> | string | null
    endereco?: StringFilter<"Empresa"> | string
    complemento_endereco?: StringNullableFilter<"Empresa"> | string | null
    numero_endereco?: IntNullableFilter<"Empresa"> | number | null
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_regiao?: SortOrder
    id_estado?: SortOrder
    id_cidade?: SortOrder
    telefone?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrder
    complemento_endereco?: SortOrderInput | SortOrder
    numero_endereco?: SortOrderInput | SortOrder
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    nome?: StringFilter<"Empresa"> | string
    id_regiao?: IntFilter<"Empresa"> | number
    id_estado?: IntFilter<"Empresa"> | number
    id_cidade?: IntFilter<"Empresa"> | number
    telefone?: StringFilter<"Empresa"> | string
    cnpj?: StringNullableFilter<"Empresa"> | string | null
    email?: StringNullableFilter<"Empresa"> | string | null
    site?: StringNullableFilter<"Empresa"> | string | null
    cep?: StringNullableFilter<"Empresa"> | string | null
    endereco?: StringFilter<"Empresa"> | string
    complemento_endereco?: StringNullableFilter<"Empresa"> | string | null
    numero_endereco?: IntNullableFilter<"Empresa"> | number | null
  }, "id">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    id_regiao?: SortOrder
    id_estado?: SortOrder
    id_cidade?: SortOrder
    telefone?: SortOrder
    cnpj?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    site?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    endereco?: SortOrder
    complemento_endereco?: SortOrderInput | SortOrder
    numero_endereco?: SortOrderInput | SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _avg?: EmpresaAvgOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
    _sum?: EmpresaSumOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empresa"> | number
    nome?: StringWithAggregatesFilter<"Empresa"> | string
    id_regiao?: IntWithAggregatesFilter<"Empresa"> | number
    id_estado?: IntWithAggregatesFilter<"Empresa"> | number
    id_cidade?: IntWithAggregatesFilter<"Empresa"> | number
    telefone?: StringWithAggregatesFilter<"Empresa"> | string
    cnpj?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    email?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    site?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    cep?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    endereco?: StringWithAggregatesFilter<"Empresa"> | string
    complemento_endereco?: StringNullableWithAggregatesFilter<"Empresa"> | string | null
    numero_endereco?: IntNullableWithAggregatesFilter<"Empresa"> | number | null
  }

  export type Regiao_brWhereInput = {
    AND?: Regiao_brWhereInput | Regiao_brWhereInput[]
    OR?: Regiao_brWhereInput[]
    NOT?: Regiao_brWhereInput | Regiao_brWhereInput[]
    id?: IntFilter<"Regiao_br"> | number
    nome?: StringFilter<"Regiao_br"> | string
    Estado?: EstadoListRelationFilter
  }

  export type Regiao_brOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    Estado?: EstadoOrderByRelationAggregateInput
  }

  export type Regiao_brWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Regiao_brWhereInput | Regiao_brWhereInput[]
    OR?: Regiao_brWhereInput[]
    NOT?: Regiao_brWhereInput | Regiao_brWhereInput[]
    nome?: StringFilter<"Regiao_br"> | string
    Estado?: EstadoListRelationFilter
  }, "id">

  export type Regiao_brOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: Regiao_brCountOrderByAggregateInput
    _avg?: Regiao_brAvgOrderByAggregateInput
    _max?: Regiao_brMaxOrderByAggregateInput
    _min?: Regiao_brMinOrderByAggregateInput
    _sum?: Regiao_brSumOrderByAggregateInput
  }

  export type Regiao_brScalarWhereWithAggregatesInput = {
    AND?: Regiao_brScalarWhereWithAggregatesInput | Regiao_brScalarWhereWithAggregatesInput[]
    OR?: Regiao_brScalarWhereWithAggregatesInput[]
    NOT?: Regiao_brScalarWhereWithAggregatesInput | Regiao_brScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Regiao_br"> | number
    nome?: StringWithAggregatesFilter<"Regiao_br"> | string
  }

  export type EstadoWhereInput = {
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    id?: IntFilter<"Estado"> | number
    id_regiao?: IntFilter<"Estado"> | number
    codigo_ibge?: IntFilter<"Estado"> | number
    nome?: StringFilter<"Estado"> | string
    uf?: StringFilter<"Estado"> | string
    Cidade?: CidadeListRelationFilter
    Regiao_br?: XOR<Regiao_brScalarRelationFilter, Regiao_brWhereInput>
  }

  export type EstadoOrderByWithRelationInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    uf?: SortOrder
    Cidade?: CidadeOrderByRelationAggregateInput
    Regiao_br?: Regiao_brOrderByWithRelationInput
  }

  export type EstadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EstadoWhereInput | EstadoWhereInput[]
    OR?: EstadoWhereInput[]
    NOT?: EstadoWhereInput | EstadoWhereInput[]
    id_regiao?: IntFilter<"Estado"> | number
    codigo_ibge?: IntFilter<"Estado"> | number
    nome?: StringFilter<"Estado"> | string
    uf?: StringFilter<"Estado"> | string
    Cidade?: CidadeListRelationFilter
    Regiao_br?: XOR<Regiao_brScalarRelationFilter, Regiao_brWhereInput>
  }, "id">

  export type EstadoOrderByWithAggregationInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    uf?: SortOrder
    _count?: EstadoCountOrderByAggregateInput
    _avg?: EstadoAvgOrderByAggregateInput
    _max?: EstadoMaxOrderByAggregateInput
    _min?: EstadoMinOrderByAggregateInput
    _sum?: EstadoSumOrderByAggregateInput
  }

  export type EstadoScalarWhereWithAggregatesInput = {
    AND?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    OR?: EstadoScalarWhereWithAggregatesInput[]
    NOT?: EstadoScalarWhereWithAggregatesInput | EstadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estado"> | number
    id_regiao?: IntWithAggregatesFilter<"Estado"> | number
    codigo_ibge?: IntWithAggregatesFilter<"Estado"> | number
    nome?: StringWithAggregatesFilter<"Estado"> | string
    uf?: StringWithAggregatesFilter<"Estado"> | string
  }

  export type CidadeWhereInput = {
    AND?: CidadeWhereInput | CidadeWhereInput[]
    OR?: CidadeWhereInput[]
    NOT?: CidadeWhereInput | CidadeWhereInput[]
    id?: IntFilter<"Cidade"> | number
    id_estado?: IntFilter<"Cidade"> | number
    codigo_ibge?: IntFilter<"Cidade"> | number
    nome?: StringFilter<"Cidade"> | string
    Estado?: XOR<EstadoScalarRelationFilter, EstadoWhereInput>
    Bairro?: BairroListRelationFilter
  }

  export type CidadeOrderByWithRelationInput = {
    id?: SortOrder
    id_estado?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    Estado?: EstadoOrderByWithRelationInput
    Bairro?: BairroOrderByRelationAggregateInput
  }

  export type CidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CidadeWhereInput | CidadeWhereInput[]
    OR?: CidadeWhereInput[]
    NOT?: CidadeWhereInput | CidadeWhereInput[]
    id_estado?: IntFilter<"Cidade"> | number
    codigo_ibge?: IntFilter<"Cidade"> | number
    nome?: StringFilter<"Cidade"> | string
    Estado?: XOR<EstadoScalarRelationFilter, EstadoWhereInput>
    Bairro?: BairroListRelationFilter
  }, "id">

  export type CidadeOrderByWithAggregationInput = {
    id?: SortOrder
    id_estado?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    _count?: CidadeCountOrderByAggregateInput
    _avg?: CidadeAvgOrderByAggregateInput
    _max?: CidadeMaxOrderByAggregateInput
    _min?: CidadeMinOrderByAggregateInput
    _sum?: CidadeSumOrderByAggregateInput
  }

  export type CidadeScalarWhereWithAggregatesInput = {
    AND?: CidadeScalarWhereWithAggregatesInput | CidadeScalarWhereWithAggregatesInput[]
    OR?: CidadeScalarWhereWithAggregatesInput[]
    NOT?: CidadeScalarWhereWithAggregatesInput | CidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cidade"> | number
    id_estado?: IntWithAggregatesFilter<"Cidade"> | number
    codigo_ibge?: IntWithAggregatesFilter<"Cidade"> | number
    nome?: StringWithAggregatesFilter<"Cidade"> | string
  }

  export type BairroWhereInput = {
    AND?: BairroWhereInput | BairroWhereInput[]
    OR?: BairroWhereInput[]
    NOT?: BairroWhereInput | BairroWhereInput[]
    id?: IntFilter<"Bairro"> | number
    id_cidade?: IntFilter<"Bairro"> | number
    codigo_ibge?: IntFilter<"Bairro"> | number
    nome?: StringFilter<"Bairro"> | string
    Cidade?: XOR<CidadeScalarRelationFilter, CidadeWhereInput>
  }

  export type BairroOrderByWithRelationInput = {
    id?: SortOrder
    id_cidade?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    Cidade?: CidadeOrderByWithRelationInput
  }

  export type BairroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BairroWhereInput | BairroWhereInput[]
    OR?: BairroWhereInput[]
    NOT?: BairroWhereInput | BairroWhereInput[]
    id_cidade?: IntFilter<"Bairro"> | number
    codigo_ibge?: IntFilter<"Bairro"> | number
    nome?: StringFilter<"Bairro"> | string
    Cidade?: XOR<CidadeScalarRelationFilter, CidadeWhereInput>
  }, "id">

  export type BairroOrderByWithAggregationInput = {
    id?: SortOrder
    id_cidade?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    _count?: BairroCountOrderByAggregateInput
    _avg?: BairroAvgOrderByAggregateInput
    _max?: BairroMaxOrderByAggregateInput
    _min?: BairroMinOrderByAggregateInput
    _sum?: BairroSumOrderByAggregateInput
  }

  export type BairroScalarWhereWithAggregatesInput = {
    AND?: BairroScalarWhereWithAggregatesInput | BairroScalarWhereWithAggregatesInput[]
    OR?: BairroScalarWhereWithAggregatesInput[]
    NOT?: BairroScalarWhereWithAggregatesInput | BairroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bairro"> | number
    id_cidade?: IntWithAggregatesFilter<"Bairro"> | number
    codigo_ibge?: IntWithAggregatesFilter<"Bairro"> | number
    nome?: StringWithAggregatesFilter<"Bairro"> | string
  }

  export type Categoria_servicosWhereInput = {
    AND?: Categoria_servicosWhereInput | Categoria_servicosWhereInput[]
    OR?: Categoria_servicosWhereInput[]
    NOT?: Categoria_servicosWhereInput | Categoria_servicosWhereInput[]
    id?: IntFilter<"Categoria_servicos"> | number
    nome?: StringFilter<"Categoria_servicos"> | string
    observacao?: StringNullableFilter<"Categoria_servicos"> | string | null
    ativo?: BoolFilter<"Categoria_servicos"> | boolean
  }

  export type Categoria_servicosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    observacao?: SortOrderInput | SortOrder
    ativo?: SortOrder
  }

  export type Categoria_servicosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Categoria_servicosWhereInput | Categoria_servicosWhereInput[]
    OR?: Categoria_servicosWhereInput[]
    NOT?: Categoria_servicosWhereInput | Categoria_servicosWhereInput[]
    nome?: StringFilter<"Categoria_servicos"> | string
    observacao?: StringNullableFilter<"Categoria_servicos"> | string | null
    ativo?: BoolFilter<"Categoria_servicos"> | boolean
  }, "id">

  export type Categoria_servicosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    observacao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    _count?: Categoria_servicosCountOrderByAggregateInput
    _avg?: Categoria_servicosAvgOrderByAggregateInput
    _max?: Categoria_servicosMaxOrderByAggregateInput
    _min?: Categoria_servicosMinOrderByAggregateInput
    _sum?: Categoria_servicosSumOrderByAggregateInput
  }

  export type Categoria_servicosScalarWhereWithAggregatesInput = {
    AND?: Categoria_servicosScalarWhereWithAggregatesInput | Categoria_servicosScalarWhereWithAggregatesInput[]
    OR?: Categoria_servicosScalarWhereWithAggregatesInput[]
    NOT?: Categoria_servicosScalarWhereWithAggregatesInput | Categoria_servicosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria_servicos"> | number
    nome?: StringWithAggregatesFilter<"Categoria_servicos"> | string
    observacao?: StringNullableWithAggregatesFilter<"Categoria_servicos"> | string | null
    ativo?: BoolWithAggregatesFilter<"Categoria_servicos"> | boolean
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id?: IntFilter<"Servico"> | number
    id_categoria?: IntFilter<"Servico"> | number
    nome?: StringFilter<"Servico"> | string
    observacao?: StringNullableFilter<"Servico"> | string | null
    ativo?: BoolFilter<"Servico"> | boolean
  }

  export type ServicoOrderByWithRelationInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
    observacao?: SortOrderInput | SortOrder
    ativo?: SortOrder
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id_categoria?: IntFilter<"Servico"> | number
    nome?: StringFilter<"Servico"> | string
    observacao?: StringNullableFilter<"Servico"> | string | null
    ativo?: BoolFilter<"Servico"> | boolean
  }, "id">

  export type ServicoOrderByWithAggregationInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
    observacao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servico"> | number
    id_categoria?: IntWithAggregatesFilter<"Servico"> | number
    nome?: StringWithAggregatesFilter<"Servico"> | string
    observacao?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    ativo?: BoolWithAggregatesFilter<"Servico"> | boolean
  }

  export type Empresa_servicosWhereInput = {
    AND?: Empresa_servicosWhereInput | Empresa_servicosWhereInput[]
    OR?: Empresa_servicosWhereInput[]
    NOT?: Empresa_servicosWhereInput | Empresa_servicosWhereInput[]
    id?: IntFilter<"Empresa_servicos"> | number
    id_servico?: IntFilter<"Empresa_servicos"> | number
    id_empresa?: IntFilter<"Empresa_servicos"> | number
    observacao?: StringNullableFilter<"Empresa_servicos"> | string | null
  }

  export type Empresa_servicosOrderByWithRelationInput = {
    id?: SortOrder
    id_servico?: SortOrder
    id_empresa?: SortOrder
    observacao?: SortOrderInput | SortOrder
  }

  export type Empresa_servicosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Empresa_servicosWhereInput | Empresa_servicosWhereInput[]
    OR?: Empresa_servicosWhereInput[]
    NOT?: Empresa_servicosWhereInput | Empresa_servicosWhereInput[]
    id_servico?: IntFilter<"Empresa_servicos"> | number
    id_empresa?: IntFilter<"Empresa_servicos"> | number
    observacao?: StringNullableFilter<"Empresa_servicos"> | string | null
  }, "id">

  export type Empresa_servicosOrderByWithAggregationInput = {
    id?: SortOrder
    id_servico?: SortOrder
    id_empresa?: SortOrder
    observacao?: SortOrderInput | SortOrder
    _count?: Empresa_servicosCountOrderByAggregateInput
    _avg?: Empresa_servicosAvgOrderByAggregateInput
    _max?: Empresa_servicosMaxOrderByAggregateInput
    _min?: Empresa_servicosMinOrderByAggregateInput
    _sum?: Empresa_servicosSumOrderByAggregateInput
  }

  export type Empresa_servicosScalarWhereWithAggregatesInput = {
    AND?: Empresa_servicosScalarWhereWithAggregatesInput | Empresa_servicosScalarWhereWithAggregatesInput[]
    OR?: Empresa_servicosScalarWhereWithAggregatesInput[]
    NOT?: Empresa_servicosScalarWhereWithAggregatesInput | Empresa_servicosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Empresa_servicos"> | number
    id_servico?: IntWithAggregatesFilter<"Empresa_servicos"> | number
    id_empresa?: IntWithAggregatesFilter<"Empresa_servicos"> | number
    observacao?: StringNullableWithAggregatesFilter<"Empresa_servicos"> | string | null
  }

  export type UsuarioCreateInput = {
    id_clerk: string
    email: string
    nome: string
    dataCriacao?: Date | string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    id_clerk: string
    email: string
    nome: string
    dataCriacao?: Date | string
  }

  export type UsuarioUpdateInput = {
    id_clerk?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_clerk?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    id_clerk: string
    email: string
    nome: string
    dataCriacao?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id_clerk?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_clerk?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmpresaCreateInput = {
    nome: string
    id_regiao: number
    id_estado: number
    id_cidade: number
    telefone: string
    cnpj?: string | null
    email?: string | null
    site?: string | null
    cep?: string | null
    endereco: string
    complemento_endereco?: string | null
    numero_endereco?: number | null
  }

  export type EmpresaUncheckedCreateInput = {
    id?: number
    nome: string
    id_regiao: number
    id_estado: number
    id_cidade: number
    telefone: string
    cnpj?: string | null
    email?: string | null
    site?: string | null
    cep?: string | null
    endereco: string
    complemento_endereco?: string | null
    numero_endereco?: number | null
  }

  export type EmpresaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    id_regiao?: IntFieldUpdateOperationsInput | number
    id_estado?: IntFieldUpdateOperationsInput | number
    id_cidade?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    complemento_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero_endereco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_regiao?: IntFieldUpdateOperationsInput | number
    id_estado?: IntFieldUpdateOperationsInput | number
    id_cidade?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    complemento_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero_endereco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmpresaCreateManyInput = {
    id?: number
    nome: string
    id_regiao: number
    id_estado: number
    id_cidade: number
    telefone: string
    cnpj?: string | null
    email?: string | null
    site?: string | null
    cep?: string | null
    endereco: string
    complemento_endereco?: string | null
    numero_endereco?: number | null
  }

  export type EmpresaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    id_regiao?: IntFieldUpdateOperationsInput | number
    id_estado?: IntFieldUpdateOperationsInput | number
    id_cidade?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    complemento_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero_endereco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    id_regiao?: IntFieldUpdateOperationsInput | number
    id_estado?: IntFieldUpdateOperationsInput | number
    id_cidade?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    site?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    endereco?: StringFieldUpdateOperationsInput | string
    complemento_endereco?: NullableStringFieldUpdateOperationsInput | string | null
    numero_endereco?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Regiao_brCreateInput = {
    nome: string
    Estado?: EstadoCreateNestedManyWithoutRegiao_brInput
  }

  export type Regiao_brUncheckedCreateInput = {
    id?: number
    nome: string
    Estado?: EstadoUncheckedCreateNestedManyWithoutRegiao_brInput
  }

  export type Regiao_brUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    Estado?: EstadoUpdateManyWithoutRegiao_brNestedInput
  }

  export type Regiao_brUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    Estado?: EstadoUncheckedUpdateManyWithoutRegiao_brNestedInput
  }

  export type Regiao_brCreateManyInput = {
    id?: number
    nome: string
  }

  export type Regiao_brUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type Regiao_brUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoCreateInput = {
    codigo_ibge: number
    nome: string
    uf: string
    Cidade?: CidadeCreateNestedManyWithoutEstadoInput
    Regiao_br: Regiao_brCreateNestedOneWithoutEstadoInput
  }

  export type EstadoUncheckedCreateInput = {
    id?: number
    id_regiao: number
    codigo_ibge: number
    nome: string
    uf: string
    Cidade?: CidadeUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUpdateInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    Cidade?: CidadeUpdateManyWithoutEstadoNestedInput
    Regiao_br?: Regiao_brUpdateOneRequiredWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_regiao?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    Cidade?: CidadeUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoCreateManyInput = {
    id?: number
    id_regiao: number
    codigo_ibge: number
    nome: string
    uf: string
  }

  export type EstadoUpdateManyMutationInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_regiao?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
  }

  export type CidadeCreateInput = {
    codigo_ibge: number
    nome: string
    Estado: EstadoCreateNestedOneWithoutCidadeInput
    Bairro?: BairroCreateNestedManyWithoutCidadeInput
  }

  export type CidadeUncheckedCreateInput = {
    id?: number
    id_estado: number
    codigo_ibge: number
    nome: string
    Bairro?: BairroUncheckedCreateNestedManyWithoutCidadeInput
  }

  export type CidadeUpdateInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    Estado?: EstadoUpdateOneRequiredWithoutCidadeNestedInput
    Bairro?: BairroUpdateManyWithoutCidadeNestedInput
  }

  export type CidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estado?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    Bairro?: BairroUncheckedUpdateManyWithoutCidadeNestedInput
  }

  export type CidadeCreateManyInput = {
    id?: number
    id_estado: number
    codigo_ibge: number
    nome: string
  }

  export type CidadeUpdateManyMutationInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estado?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type BairroCreateInput = {
    codigo_ibge: number
    nome: string
    Cidade: CidadeCreateNestedOneWithoutBairroInput
  }

  export type BairroUncheckedCreateInput = {
    id?: number
    id_cidade: number
    codigo_ibge: number
    nome: string
  }

  export type BairroUpdateInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    Cidade?: CidadeUpdateOneRequiredWithoutBairroNestedInput
  }

  export type BairroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cidade?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type BairroCreateManyInput = {
    id?: number
    id_cidade: number
    codigo_ibge: number
    nome: string
  }

  export type BairroUpdateManyMutationInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type BairroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_cidade?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type Categoria_servicosCreateInput = {
    nome: string
    observacao?: string | null
    ativo?: boolean
  }

  export type Categoria_servicosUncheckedCreateInput = {
    id?: number
    nome: string
    observacao?: string | null
    ativo?: boolean
  }

  export type Categoria_servicosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Categoria_servicosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Categoria_servicosCreateManyInput = {
    id?: number
    nome: string
    observacao?: string | null
    ativo?: boolean
  }

  export type Categoria_servicosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Categoria_servicosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicoCreateInput = {
    id_categoria: number
    nome: string
    observacao?: string | null
    ativo?: boolean
  }

  export type ServicoUncheckedCreateInput = {
    id?: number
    id_categoria: number
    nome: string
    observacao?: string | null
    ativo?: boolean
  }

  export type ServicoUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicoCreateManyInput = {
    id?: number
    id_categoria: number
    nome: string
    observacao?: string | null
    ativo?: boolean
  }

  export type ServicoUpdateManyMutationInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Empresa_servicosCreateInput = {
    id_servico: number
    id_empresa: number
    observacao?: string | null
  }

  export type Empresa_servicosUncheckedCreateInput = {
    id?: number
    id_servico: number
    id_empresa: number
    observacao?: string | null
  }

  export type Empresa_servicosUpdateInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Empresa_servicosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_servico?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Empresa_servicosCreateManyInput = {
    id?: number
    id_servico: number
    id_empresa: number
    observacao?: string | null
  }

  export type Empresa_servicosUpdateManyMutationInput = {
    id_servico?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Empresa_servicosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_servico?: IntFieldUpdateOperationsInput | number
    id_empresa?: IntFieldUpdateOperationsInput | number
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    id_clerk?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    dataCriacao?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_clerk?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    dataCriacao?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    id_clerk?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    dataCriacao?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_regiao?: SortOrder
    id_estado?: SortOrder
    id_cidade?: SortOrder
    telefone?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    site?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    complemento_endereco?: SortOrder
    numero_endereco?: SortOrder
  }

  export type EmpresaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    id_estado?: SortOrder
    id_cidade?: SortOrder
    numero_endereco?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_regiao?: SortOrder
    id_estado?: SortOrder
    id_cidade?: SortOrder
    telefone?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    site?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    complemento_endereco?: SortOrder
    numero_endereco?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    id_regiao?: SortOrder
    id_estado?: SortOrder
    id_cidade?: SortOrder
    telefone?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    site?: SortOrder
    cep?: SortOrder
    endereco?: SortOrder
    complemento_endereco?: SortOrder
    numero_endereco?: SortOrder
  }

  export type EmpresaSumOrderByAggregateInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    id_estado?: SortOrder
    id_cidade?: SortOrder
    numero_endereco?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EstadoListRelationFilter = {
    every?: EstadoWhereInput
    some?: EstadoWhereInput
    none?: EstadoWhereInput
  }

  export type EstadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Regiao_brCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type Regiao_brAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Regiao_brMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type Regiao_brMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type Regiao_brSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CidadeListRelationFilter = {
    every?: CidadeWhereInput
    some?: CidadeWhereInput
    none?: CidadeWhereInput
  }

  export type Regiao_brScalarRelationFilter = {
    is?: Regiao_brWhereInput
    isNot?: Regiao_brWhereInput
  }

  export type CidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstadoCountOrderByAggregateInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    uf?: SortOrder
  }

  export type EstadoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type EstadoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    uf?: SortOrder
  }

  export type EstadoMinOrderByAggregateInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
    uf?: SortOrder
  }

  export type EstadoSumOrderByAggregateInput = {
    id?: SortOrder
    id_regiao?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type EstadoScalarRelationFilter = {
    is?: EstadoWhereInput
    isNot?: EstadoWhereInput
  }

  export type BairroListRelationFilter = {
    every?: BairroWhereInput
    some?: BairroWhereInput
    none?: BairroWhereInput
  }

  export type BairroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CidadeCountOrderByAggregateInput = {
    id?: SortOrder
    id_estado?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
  }

  export type CidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    id_estado?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type CidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    id_estado?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
  }

  export type CidadeMinOrderByAggregateInput = {
    id?: SortOrder
    id_estado?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
  }

  export type CidadeSumOrderByAggregateInput = {
    id?: SortOrder
    id_estado?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type CidadeScalarRelationFilter = {
    is?: CidadeWhereInput
    isNot?: CidadeWhereInput
  }

  export type BairroCountOrderByAggregateInput = {
    id?: SortOrder
    id_cidade?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
  }

  export type BairroAvgOrderByAggregateInput = {
    id?: SortOrder
    id_cidade?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type BairroMaxOrderByAggregateInput = {
    id?: SortOrder
    id_cidade?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
  }

  export type BairroMinOrderByAggregateInput = {
    id?: SortOrder
    id_cidade?: SortOrder
    codigo_ibge?: SortOrder
    nome?: SortOrder
  }

  export type BairroSumOrderByAggregateInput = {
    id?: SortOrder
    id_cidade?: SortOrder
    codigo_ibge?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Categoria_servicosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    observacao?: SortOrder
    ativo?: SortOrder
  }

  export type Categoria_servicosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Categoria_servicosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    observacao?: SortOrder
    ativo?: SortOrder
  }

  export type Categoria_servicosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    observacao?: SortOrder
    ativo?: SortOrder
  }

  export type Categoria_servicosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ServicoCountOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
    observacao?: SortOrder
    ativo?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
    observacao?: SortOrder
    ativo?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
    observacao?: SortOrder
    ativo?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
  }

  export type Empresa_servicosCountOrderByAggregateInput = {
    id?: SortOrder
    id_servico?: SortOrder
    id_empresa?: SortOrder
    observacao?: SortOrder
  }

  export type Empresa_servicosAvgOrderByAggregateInput = {
    id?: SortOrder
    id_servico?: SortOrder
    id_empresa?: SortOrder
  }

  export type Empresa_servicosMaxOrderByAggregateInput = {
    id?: SortOrder
    id_servico?: SortOrder
    id_empresa?: SortOrder
    observacao?: SortOrder
  }

  export type Empresa_servicosMinOrderByAggregateInput = {
    id?: SortOrder
    id_servico?: SortOrder
    id_empresa?: SortOrder
    observacao?: SortOrder
  }

  export type Empresa_servicosSumOrderByAggregateInput = {
    id?: SortOrder
    id_servico?: SortOrder
    id_empresa?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstadoCreateNestedManyWithoutRegiao_brInput = {
    create?: XOR<EstadoCreateWithoutRegiao_brInput, EstadoUncheckedCreateWithoutRegiao_brInput> | EstadoCreateWithoutRegiao_brInput[] | EstadoUncheckedCreateWithoutRegiao_brInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutRegiao_brInput | EstadoCreateOrConnectWithoutRegiao_brInput[]
    createMany?: EstadoCreateManyRegiao_brInputEnvelope
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
  }

  export type EstadoUncheckedCreateNestedManyWithoutRegiao_brInput = {
    create?: XOR<EstadoCreateWithoutRegiao_brInput, EstadoUncheckedCreateWithoutRegiao_brInput> | EstadoCreateWithoutRegiao_brInput[] | EstadoUncheckedCreateWithoutRegiao_brInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutRegiao_brInput | EstadoCreateOrConnectWithoutRegiao_brInput[]
    createMany?: EstadoCreateManyRegiao_brInputEnvelope
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
  }

  export type EstadoUpdateManyWithoutRegiao_brNestedInput = {
    create?: XOR<EstadoCreateWithoutRegiao_brInput, EstadoUncheckedCreateWithoutRegiao_brInput> | EstadoCreateWithoutRegiao_brInput[] | EstadoUncheckedCreateWithoutRegiao_brInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutRegiao_brInput | EstadoCreateOrConnectWithoutRegiao_brInput[]
    upsert?: EstadoUpsertWithWhereUniqueWithoutRegiao_brInput | EstadoUpsertWithWhereUniqueWithoutRegiao_brInput[]
    createMany?: EstadoCreateManyRegiao_brInputEnvelope
    set?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    disconnect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    delete?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    update?: EstadoUpdateWithWhereUniqueWithoutRegiao_brInput | EstadoUpdateWithWhereUniqueWithoutRegiao_brInput[]
    updateMany?: EstadoUpdateManyWithWhereWithoutRegiao_brInput | EstadoUpdateManyWithWhereWithoutRegiao_brInput[]
    deleteMany?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
  }

  export type EstadoUncheckedUpdateManyWithoutRegiao_brNestedInput = {
    create?: XOR<EstadoCreateWithoutRegiao_brInput, EstadoUncheckedCreateWithoutRegiao_brInput> | EstadoCreateWithoutRegiao_brInput[] | EstadoUncheckedCreateWithoutRegiao_brInput[]
    connectOrCreate?: EstadoCreateOrConnectWithoutRegiao_brInput | EstadoCreateOrConnectWithoutRegiao_brInput[]
    upsert?: EstadoUpsertWithWhereUniqueWithoutRegiao_brInput | EstadoUpsertWithWhereUniqueWithoutRegiao_brInput[]
    createMany?: EstadoCreateManyRegiao_brInputEnvelope
    set?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    disconnect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    delete?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    connect?: EstadoWhereUniqueInput | EstadoWhereUniqueInput[]
    update?: EstadoUpdateWithWhereUniqueWithoutRegiao_brInput | EstadoUpdateWithWhereUniqueWithoutRegiao_brInput[]
    updateMany?: EstadoUpdateManyWithWhereWithoutRegiao_brInput | EstadoUpdateManyWithWhereWithoutRegiao_brInput[]
    deleteMany?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
  }

  export type CidadeCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CidadeCreateWithoutEstadoInput, CidadeUncheckedCreateWithoutEstadoInput> | CidadeCreateWithoutEstadoInput[] | CidadeUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadeCreateOrConnectWithoutEstadoInput | CidadeCreateOrConnectWithoutEstadoInput[]
    createMany?: CidadeCreateManyEstadoInputEnvelope
    connect?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
  }

  export type Regiao_brCreateNestedOneWithoutEstadoInput = {
    create?: XOR<Regiao_brCreateWithoutEstadoInput, Regiao_brUncheckedCreateWithoutEstadoInput>
    connectOrCreate?: Regiao_brCreateOrConnectWithoutEstadoInput
    connect?: Regiao_brWhereUniqueInput
  }

  export type CidadeUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CidadeCreateWithoutEstadoInput, CidadeUncheckedCreateWithoutEstadoInput> | CidadeCreateWithoutEstadoInput[] | CidadeUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadeCreateOrConnectWithoutEstadoInput | CidadeCreateOrConnectWithoutEstadoInput[]
    createMany?: CidadeCreateManyEstadoInputEnvelope
    connect?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
  }

  export type CidadeUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CidadeCreateWithoutEstadoInput, CidadeUncheckedCreateWithoutEstadoInput> | CidadeCreateWithoutEstadoInput[] | CidadeUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadeCreateOrConnectWithoutEstadoInput | CidadeCreateOrConnectWithoutEstadoInput[]
    upsert?: CidadeUpsertWithWhereUniqueWithoutEstadoInput | CidadeUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CidadeCreateManyEstadoInputEnvelope
    set?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    disconnect?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    delete?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    connect?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    update?: CidadeUpdateWithWhereUniqueWithoutEstadoInput | CidadeUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CidadeUpdateManyWithWhereWithoutEstadoInput | CidadeUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CidadeScalarWhereInput | CidadeScalarWhereInput[]
  }

  export type Regiao_brUpdateOneRequiredWithoutEstadoNestedInput = {
    create?: XOR<Regiao_brCreateWithoutEstadoInput, Regiao_brUncheckedCreateWithoutEstadoInput>
    connectOrCreate?: Regiao_brCreateOrConnectWithoutEstadoInput
    upsert?: Regiao_brUpsertWithoutEstadoInput
    connect?: Regiao_brWhereUniqueInput
    update?: XOR<XOR<Regiao_brUpdateToOneWithWhereWithoutEstadoInput, Regiao_brUpdateWithoutEstadoInput>, Regiao_brUncheckedUpdateWithoutEstadoInput>
  }

  export type CidadeUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CidadeCreateWithoutEstadoInput, CidadeUncheckedCreateWithoutEstadoInput> | CidadeCreateWithoutEstadoInput[] | CidadeUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CidadeCreateOrConnectWithoutEstadoInput | CidadeCreateOrConnectWithoutEstadoInput[]
    upsert?: CidadeUpsertWithWhereUniqueWithoutEstadoInput | CidadeUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CidadeCreateManyEstadoInputEnvelope
    set?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    disconnect?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    delete?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    connect?: CidadeWhereUniqueInput | CidadeWhereUniqueInput[]
    update?: CidadeUpdateWithWhereUniqueWithoutEstadoInput | CidadeUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CidadeUpdateManyWithWhereWithoutEstadoInput | CidadeUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CidadeScalarWhereInput | CidadeScalarWhereInput[]
  }

  export type EstadoCreateNestedOneWithoutCidadeInput = {
    create?: XOR<EstadoCreateWithoutCidadeInput, EstadoUncheckedCreateWithoutCidadeInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutCidadeInput
    connect?: EstadoWhereUniqueInput
  }

  export type BairroCreateNestedManyWithoutCidadeInput = {
    create?: XOR<BairroCreateWithoutCidadeInput, BairroUncheckedCreateWithoutCidadeInput> | BairroCreateWithoutCidadeInput[] | BairroUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: BairroCreateOrConnectWithoutCidadeInput | BairroCreateOrConnectWithoutCidadeInput[]
    createMany?: BairroCreateManyCidadeInputEnvelope
    connect?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
  }

  export type BairroUncheckedCreateNestedManyWithoutCidadeInput = {
    create?: XOR<BairroCreateWithoutCidadeInput, BairroUncheckedCreateWithoutCidadeInput> | BairroCreateWithoutCidadeInput[] | BairroUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: BairroCreateOrConnectWithoutCidadeInput | BairroCreateOrConnectWithoutCidadeInput[]
    createMany?: BairroCreateManyCidadeInputEnvelope
    connect?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
  }

  export type EstadoUpdateOneRequiredWithoutCidadeNestedInput = {
    create?: XOR<EstadoCreateWithoutCidadeInput, EstadoUncheckedCreateWithoutCidadeInput>
    connectOrCreate?: EstadoCreateOrConnectWithoutCidadeInput
    upsert?: EstadoUpsertWithoutCidadeInput
    connect?: EstadoWhereUniqueInput
    update?: XOR<XOR<EstadoUpdateToOneWithWhereWithoutCidadeInput, EstadoUpdateWithoutCidadeInput>, EstadoUncheckedUpdateWithoutCidadeInput>
  }

  export type BairroUpdateManyWithoutCidadeNestedInput = {
    create?: XOR<BairroCreateWithoutCidadeInput, BairroUncheckedCreateWithoutCidadeInput> | BairroCreateWithoutCidadeInput[] | BairroUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: BairroCreateOrConnectWithoutCidadeInput | BairroCreateOrConnectWithoutCidadeInput[]
    upsert?: BairroUpsertWithWhereUniqueWithoutCidadeInput | BairroUpsertWithWhereUniqueWithoutCidadeInput[]
    createMany?: BairroCreateManyCidadeInputEnvelope
    set?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    disconnect?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    delete?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    connect?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    update?: BairroUpdateWithWhereUniqueWithoutCidadeInput | BairroUpdateWithWhereUniqueWithoutCidadeInput[]
    updateMany?: BairroUpdateManyWithWhereWithoutCidadeInput | BairroUpdateManyWithWhereWithoutCidadeInput[]
    deleteMany?: BairroScalarWhereInput | BairroScalarWhereInput[]
  }

  export type BairroUncheckedUpdateManyWithoutCidadeNestedInput = {
    create?: XOR<BairroCreateWithoutCidadeInput, BairroUncheckedCreateWithoutCidadeInput> | BairroCreateWithoutCidadeInput[] | BairroUncheckedCreateWithoutCidadeInput[]
    connectOrCreate?: BairroCreateOrConnectWithoutCidadeInput | BairroCreateOrConnectWithoutCidadeInput[]
    upsert?: BairroUpsertWithWhereUniqueWithoutCidadeInput | BairroUpsertWithWhereUniqueWithoutCidadeInput[]
    createMany?: BairroCreateManyCidadeInputEnvelope
    set?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    disconnect?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    delete?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    connect?: BairroWhereUniqueInput | BairroWhereUniqueInput[]
    update?: BairroUpdateWithWhereUniqueWithoutCidadeInput | BairroUpdateWithWhereUniqueWithoutCidadeInput[]
    updateMany?: BairroUpdateManyWithWhereWithoutCidadeInput | BairroUpdateManyWithWhereWithoutCidadeInput[]
    deleteMany?: BairroScalarWhereInput | BairroScalarWhereInput[]
  }

  export type CidadeCreateNestedOneWithoutBairroInput = {
    create?: XOR<CidadeCreateWithoutBairroInput, CidadeUncheckedCreateWithoutBairroInput>
    connectOrCreate?: CidadeCreateOrConnectWithoutBairroInput
    connect?: CidadeWhereUniqueInput
  }

  export type CidadeUpdateOneRequiredWithoutBairroNestedInput = {
    create?: XOR<CidadeCreateWithoutBairroInput, CidadeUncheckedCreateWithoutBairroInput>
    connectOrCreate?: CidadeCreateOrConnectWithoutBairroInput
    upsert?: CidadeUpsertWithoutBairroInput
    connect?: CidadeWhereUniqueInput
    update?: XOR<XOR<CidadeUpdateToOneWithWhereWithoutBairroInput, CidadeUpdateWithoutBairroInput>, CidadeUncheckedUpdateWithoutBairroInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EstadoCreateWithoutRegiao_brInput = {
    codigo_ibge: number
    nome: string
    uf: string
    Cidade?: CidadeCreateNestedManyWithoutEstadoInput
  }

  export type EstadoUncheckedCreateWithoutRegiao_brInput = {
    id?: number
    codigo_ibge: number
    nome: string
    uf: string
    Cidade?: CidadeUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type EstadoCreateOrConnectWithoutRegiao_brInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutRegiao_brInput, EstadoUncheckedCreateWithoutRegiao_brInput>
  }

  export type EstadoCreateManyRegiao_brInputEnvelope = {
    data: EstadoCreateManyRegiao_brInput | EstadoCreateManyRegiao_brInput[]
    skipDuplicates?: boolean
  }

  export type EstadoUpsertWithWhereUniqueWithoutRegiao_brInput = {
    where: EstadoWhereUniqueInput
    update: XOR<EstadoUpdateWithoutRegiao_brInput, EstadoUncheckedUpdateWithoutRegiao_brInput>
    create: XOR<EstadoCreateWithoutRegiao_brInput, EstadoUncheckedCreateWithoutRegiao_brInput>
  }

  export type EstadoUpdateWithWhereUniqueWithoutRegiao_brInput = {
    where: EstadoWhereUniqueInput
    data: XOR<EstadoUpdateWithoutRegiao_brInput, EstadoUncheckedUpdateWithoutRegiao_brInput>
  }

  export type EstadoUpdateManyWithWhereWithoutRegiao_brInput = {
    where: EstadoScalarWhereInput
    data: XOR<EstadoUpdateManyMutationInput, EstadoUncheckedUpdateManyWithoutRegiao_brInput>
  }

  export type EstadoScalarWhereInput = {
    AND?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
    OR?: EstadoScalarWhereInput[]
    NOT?: EstadoScalarWhereInput | EstadoScalarWhereInput[]
    id?: IntFilter<"Estado"> | number
    id_regiao?: IntFilter<"Estado"> | number
    codigo_ibge?: IntFilter<"Estado"> | number
    nome?: StringFilter<"Estado"> | string
    uf?: StringFilter<"Estado"> | string
  }

  export type CidadeCreateWithoutEstadoInput = {
    codigo_ibge: number
    nome: string
    Bairro?: BairroCreateNestedManyWithoutCidadeInput
  }

  export type CidadeUncheckedCreateWithoutEstadoInput = {
    id?: number
    codigo_ibge: number
    nome: string
    Bairro?: BairroUncheckedCreateNestedManyWithoutCidadeInput
  }

  export type CidadeCreateOrConnectWithoutEstadoInput = {
    where: CidadeWhereUniqueInput
    create: XOR<CidadeCreateWithoutEstadoInput, CidadeUncheckedCreateWithoutEstadoInput>
  }

  export type CidadeCreateManyEstadoInputEnvelope = {
    data: CidadeCreateManyEstadoInput | CidadeCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type Regiao_brCreateWithoutEstadoInput = {
    nome: string
  }

  export type Regiao_brUncheckedCreateWithoutEstadoInput = {
    id?: number
    nome: string
  }

  export type Regiao_brCreateOrConnectWithoutEstadoInput = {
    where: Regiao_brWhereUniqueInput
    create: XOR<Regiao_brCreateWithoutEstadoInput, Regiao_brUncheckedCreateWithoutEstadoInput>
  }

  export type CidadeUpsertWithWhereUniqueWithoutEstadoInput = {
    where: CidadeWhereUniqueInput
    update: XOR<CidadeUpdateWithoutEstadoInput, CidadeUncheckedUpdateWithoutEstadoInput>
    create: XOR<CidadeCreateWithoutEstadoInput, CidadeUncheckedCreateWithoutEstadoInput>
  }

  export type CidadeUpdateWithWhereUniqueWithoutEstadoInput = {
    where: CidadeWhereUniqueInput
    data: XOR<CidadeUpdateWithoutEstadoInput, CidadeUncheckedUpdateWithoutEstadoInput>
  }

  export type CidadeUpdateManyWithWhereWithoutEstadoInput = {
    where: CidadeScalarWhereInput
    data: XOR<CidadeUpdateManyMutationInput, CidadeUncheckedUpdateManyWithoutEstadoInput>
  }

  export type CidadeScalarWhereInput = {
    AND?: CidadeScalarWhereInput | CidadeScalarWhereInput[]
    OR?: CidadeScalarWhereInput[]
    NOT?: CidadeScalarWhereInput | CidadeScalarWhereInput[]
    id?: IntFilter<"Cidade"> | number
    id_estado?: IntFilter<"Cidade"> | number
    codigo_ibge?: IntFilter<"Cidade"> | number
    nome?: StringFilter<"Cidade"> | string
  }

  export type Regiao_brUpsertWithoutEstadoInput = {
    update: XOR<Regiao_brUpdateWithoutEstadoInput, Regiao_brUncheckedUpdateWithoutEstadoInput>
    create: XOR<Regiao_brCreateWithoutEstadoInput, Regiao_brUncheckedCreateWithoutEstadoInput>
    where?: Regiao_brWhereInput
  }

  export type Regiao_brUpdateToOneWithWhereWithoutEstadoInput = {
    where?: Regiao_brWhereInput
    data: XOR<Regiao_brUpdateWithoutEstadoInput, Regiao_brUncheckedUpdateWithoutEstadoInput>
  }

  export type Regiao_brUpdateWithoutEstadoInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type Regiao_brUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoCreateWithoutCidadeInput = {
    codigo_ibge: number
    nome: string
    uf: string
    Regiao_br: Regiao_brCreateNestedOneWithoutEstadoInput
  }

  export type EstadoUncheckedCreateWithoutCidadeInput = {
    id?: number
    id_regiao: number
    codigo_ibge: number
    nome: string
    uf: string
  }

  export type EstadoCreateOrConnectWithoutCidadeInput = {
    where: EstadoWhereUniqueInput
    create: XOR<EstadoCreateWithoutCidadeInput, EstadoUncheckedCreateWithoutCidadeInput>
  }

  export type BairroCreateWithoutCidadeInput = {
    codigo_ibge: number
    nome: string
  }

  export type BairroUncheckedCreateWithoutCidadeInput = {
    id?: number
    codigo_ibge: number
    nome: string
  }

  export type BairroCreateOrConnectWithoutCidadeInput = {
    where: BairroWhereUniqueInput
    create: XOR<BairroCreateWithoutCidadeInput, BairroUncheckedCreateWithoutCidadeInput>
  }

  export type BairroCreateManyCidadeInputEnvelope = {
    data: BairroCreateManyCidadeInput | BairroCreateManyCidadeInput[]
    skipDuplicates?: boolean
  }

  export type EstadoUpsertWithoutCidadeInput = {
    update: XOR<EstadoUpdateWithoutCidadeInput, EstadoUncheckedUpdateWithoutCidadeInput>
    create: XOR<EstadoCreateWithoutCidadeInput, EstadoUncheckedCreateWithoutCidadeInput>
    where?: EstadoWhereInput
  }

  export type EstadoUpdateToOneWithWhereWithoutCidadeInput = {
    where?: EstadoWhereInput
    data: XOR<EstadoUpdateWithoutCidadeInput, EstadoUncheckedUpdateWithoutCidadeInput>
  }

  export type EstadoUpdateWithoutCidadeInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    Regiao_br?: Regiao_brUpdateOneRequiredWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateWithoutCidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_regiao?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
  }

  export type BairroUpsertWithWhereUniqueWithoutCidadeInput = {
    where: BairroWhereUniqueInput
    update: XOR<BairroUpdateWithoutCidadeInput, BairroUncheckedUpdateWithoutCidadeInput>
    create: XOR<BairroCreateWithoutCidadeInput, BairroUncheckedCreateWithoutCidadeInput>
  }

  export type BairroUpdateWithWhereUniqueWithoutCidadeInput = {
    where: BairroWhereUniqueInput
    data: XOR<BairroUpdateWithoutCidadeInput, BairroUncheckedUpdateWithoutCidadeInput>
  }

  export type BairroUpdateManyWithWhereWithoutCidadeInput = {
    where: BairroScalarWhereInput
    data: XOR<BairroUpdateManyMutationInput, BairroUncheckedUpdateManyWithoutCidadeInput>
  }

  export type BairroScalarWhereInput = {
    AND?: BairroScalarWhereInput | BairroScalarWhereInput[]
    OR?: BairroScalarWhereInput[]
    NOT?: BairroScalarWhereInput | BairroScalarWhereInput[]
    id?: IntFilter<"Bairro"> | number
    id_cidade?: IntFilter<"Bairro"> | number
    codigo_ibge?: IntFilter<"Bairro"> | number
    nome?: StringFilter<"Bairro"> | string
  }

  export type CidadeCreateWithoutBairroInput = {
    codigo_ibge: number
    nome: string
    Estado: EstadoCreateNestedOneWithoutCidadeInput
  }

  export type CidadeUncheckedCreateWithoutBairroInput = {
    id?: number
    id_estado: number
    codigo_ibge: number
    nome: string
  }

  export type CidadeCreateOrConnectWithoutBairroInput = {
    where: CidadeWhereUniqueInput
    create: XOR<CidadeCreateWithoutBairroInput, CidadeUncheckedCreateWithoutBairroInput>
  }

  export type CidadeUpsertWithoutBairroInput = {
    update: XOR<CidadeUpdateWithoutBairroInput, CidadeUncheckedUpdateWithoutBairroInput>
    create: XOR<CidadeCreateWithoutBairroInput, CidadeUncheckedCreateWithoutBairroInput>
    where?: CidadeWhereInput
  }

  export type CidadeUpdateToOneWithWhereWithoutBairroInput = {
    where?: CidadeWhereInput
    data: XOR<CidadeUpdateWithoutBairroInput, CidadeUncheckedUpdateWithoutBairroInput>
  }

  export type CidadeUpdateWithoutBairroInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    Estado?: EstadoUpdateOneRequiredWithoutCidadeNestedInput
  }

  export type CidadeUncheckedUpdateWithoutBairroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estado?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EstadoCreateManyRegiao_brInput = {
    id?: number
    codigo_ibge: number
    nome: string
    uf: string
  }

  export type EstadoUpdateWithoutRegiao_brInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    Cidade?: CidadeUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateWithoutRegiao_brInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    Cidade?: CidadeUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type EstadoUncheckedUpdateManyWithoutRegiao_brInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
  }

  export type CidadeCreateManyEstadoInput = {
    id?: number
    codigo_ibge: number
    nome: string
  }

  export type CidadeUpdateWithoutEstadoInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    Bairro?: BairroUpdateManyWithoutCidadeNestedInput
  }

  export type CidadeUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    Bairro?: BairroUncheckedUpdateManyWithoutCidadeNestedInput
  }

  export type CidadeUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type BairroCreateManyCidadeInput = {
    id?: number
    codigo_ibge: number
    nome: string
  }

  export type BairroUpdateWithoutCidadeInput = {
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type BairroUncheckedUpdateWithoutCidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type BairroUncheckedUpdateManyWithoutCidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo_ibge?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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