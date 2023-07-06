export const convertStringToHoursAndMinutes = (dateString: string) => {
    const date = new Date(dateString);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    return { hours: hours, minutes: minutes };

};

export const getHoursAndMinsBetweenTwoDates = (startDate: Date, endDate: Date): string => {
    const diffMilliseconds = endDate.getTime() - startDate.getTime();
    const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;
    
    return `${hours}h ${minutes}m`; 
};
