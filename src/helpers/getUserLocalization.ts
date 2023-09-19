
export const getUserLocalization = () => {    

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude_coor = position.coords.latitude;
                const longitude_coor = position.coords.longitude;
                
                return { latitude_coor, longitude_coor};
            },
            (error) => {
                console.error(error);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }

}