import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import Icon from "@mui/material/Icon";
import { numberWithCommas } from '../../Helpers/NumberHelper';
import { CardProps } from './Models/ICard';
import { cardStyles } from './Style/Card';


const Card = ({ name, value, icon, isLoading = false }: CardProps) => {

    return (
        <Box component="div" style={cardStyles.container}>
            <Grid container justifyContent="space-between" >
                <Grid item lg={6}>
                    {isLoading ?
                        <Box sx={cardStyles.loader}>
                            <CircularProgress />
                        </Box>
                        :
                        <Box component="div" sx={cardStyles.wordsContainer}>
                            <Typography sx={cardStyles.header}>
                                {name}
                            </Typography>
                            <Typography sx={cardStyles.subHeader}>
                                {numberWithCommas(value)}
                            </Typography>
                        </Box>
                    }
                </Grid>

                <Grid item lg={6}>
                    <Box sx={cardStyles.iconContainer}>
                        <Icon sx={cardStyles.icon} >
                            {icon}
                        </Icon>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )

}


export default Card;