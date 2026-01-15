export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_env || 'env',
    mongodb: process.env.MONGODB_URL,
    port: process.env.PORT || 3001
})  