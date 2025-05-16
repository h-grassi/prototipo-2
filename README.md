# prototipo-2
npm run dev: abre a aplicação em desenvolvimento (menos validação)
npm run build: debuga a aplicação a procura de erros, utilizar antes do deploy
npx prisma: cria a pasta prisma, comando utilizado apenas uma vez
------------------------------------------------------------------------------
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm
------------------------------------------------------------------------------
npx prisma generate: sempre que que o esquema for modificado

 Prisma is a modern DB toolkit to query, migrate and model your database (https://prisma.io)

    Usage

      $ prisma [command]

    Commands

                init   Set up Prisma for your app
            generate   Generate artifacts (e.g. Prisma Client)
                  db   Manage your database schema and lifecycle
             migrate   Migrate your database
              studio   Browse your data with Prisma Studio
            validate   Validate your Prisma schema
              format   Format your Prisma schema
             version   Displays Prisma version info
               debug   Displays Prisma debug info
                 mcp   Starts an MCP server to use with AI development tools

    Flags

         --preview-feature   Run Preview Prisma commands
         --help, -h          Show additional information about a command

┌──────────────────────────────────────────────────────────────────────────────────────┐
│  Optimize performance through connection pooling and caching with Prisma Accelerate  │
│  and capture real-time events from your database with Prisma Pulse.                  │
│  Learn more at https://pris.ly/cli/pdp                                               │
└──────────────────────────────────────────────────────────────────────────────────────┘

    Examples

      Set up a new Prisma project
      $ prisma init

      Generate artifacts (e.g. Prisma Client)
      $ prisma generate

      Browse your data
      $ prisma studio

      Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
      $ prisma migrate dev

      Pull the schema from an existing database, updating the Prisma schema
      $ prisma db pull

      Push the Prisma schema state to the database
      $ prisma db push

      Validate your Prisma schema
      $ prisma validate

      Format your Prisma schema
      $ prisma format

      Display Prisma version info
      $ prisma version

      Display Prisma debug info
      $ prisma debug