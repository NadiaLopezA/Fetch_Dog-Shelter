

export const getEnvVariables = () => {

    return {
        VITE_MODE: import.meta.env.VITE_MODE || "dev",
        VITE_API_URL: import.meta.env.VITE_API_URL || "https://frontend-take-home-service.fetch.com",
    }
}