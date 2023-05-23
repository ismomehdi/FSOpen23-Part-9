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

interface ExerciseValues {
    target: number;
    hourArray: number[];
}

const parseExerciseArguments = (args: string[]): ExerciseValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    const targetArg = args[2]
    args.splice(0, 3)
    const hourArgs = args.map(Number);

    if (!isNaN(Number(targetArg)) && hourArgs.every(e => !isNaN(e))) {
        return {
            target: Number(targetArg),
            hourArray: hourArgs
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

try {
    const { target, hourArray } = parseExerciseArguments(process.argv);
    console.log(calculateExercises(hourArray, target))
} catch (error: unknown) {
    let errorMessage = 'Something bad happened. '
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage)
}