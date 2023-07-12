/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    serverRuntimeConfig: {
        connectionString: "mongodb+srv://didacr97:ZpQT6hdu6MHiy8ik@loredb.jj0tv5e.mongodb.net/mydatabase",
    }
}

module.exports = nextConfig;