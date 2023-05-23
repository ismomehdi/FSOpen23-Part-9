interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}  

const calculateExercises = ( hours: number[], target: number ): ExerciseResult => {
    const periodLength = hours.length;
    const trainingDays = hours.filter(h => h > 0).length;
    const totalHours = hours.reduce((accumulator, currentValue) => 
        accumulator + currentValue, 0);
    const average = totalHours / periodLength;
    const success = average >= target;
    const percentage = average / target;

    const rate = () : number => {
        if (percentage >= 1) {
            return 3;
        } else if (percentage >= 0.8) {
            return 2;
        } else {
            return 1;
        }
    };

    const rating = rate();

    const ratingDescription = () : string => {
        switch (rating) {
            case 3:
                return 'great!';
            case 2:
                return 'not too bad but could be better';
            default:
                return 'terrible...';
            }
    };
      
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription: ratingDescription(),
        target,
        average,
    };
}


console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))