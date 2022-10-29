import { Box, Grid, Typography } from '@mui/material';
import Icon from "@mui/material/Icon";
import { numberWithCommas } from '../../Helpers/NumberHelper';
import { cardStyles } from './Style/Card';
interface CardProps {
    name: string,
    value: number,
    icon: string
}

const Card = ({ name, value, icon }: CardProps) => {


    return (
        <Box component="div" style={cardStyles.container}>
            <Grid container justifyContent="space-between" >
                <Grid item lg={6}>
                    <Box component="div" sx={cardStyles.wordsContainer}>
                        <Typography sx={cardStyles.header}>
                            {name}
                        </Typography>
                        <Typography sx={cardStyles.subHeader}>
                            {numberWithCommas(value)}
                        </Typography>
                    </Box>
                </Grid>

                <Grid item lg={6}>
                    <Box sx={cardStyles.iconContainer}>
                        <Icon sx={cardStyles.icon} >
                            add_box
                        </Icon>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )

}


export default Card;