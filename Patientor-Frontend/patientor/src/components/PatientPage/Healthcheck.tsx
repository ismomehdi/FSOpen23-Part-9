import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { HealthCheckProps } from '../../types'

const HealthCheck = ( { entry }: HealthCheckProps ) => {
    let healthColor = entry.healthCheckRating > 0 ? 'green' : 'red';


    return (
        <>
        <MedicalInformationIcon />
        <br/>
        <span style={{color: healthColor}}>Health rate: {entry.healthCheckRating}</span>
        </>
    )

    
}

export default HealthCheck