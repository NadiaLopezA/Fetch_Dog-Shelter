
export const useValidationFields = () => {

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    const validateUsername = (username: string) => {
        if(typeof username !== 'string') return false;
        if(username.length > 10 || username.length < 3) return false;

        return true;
    }

    return {
        validateEmail,
        validateUsername
    }
}
