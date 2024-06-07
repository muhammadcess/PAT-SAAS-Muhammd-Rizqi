import React from 'react';
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material';
import Title from './Title';
// img
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';

const GetStarted = () => {

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    });
    
    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    });

    return (
        <>
            <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}   
            sx={{
                py: 10,
                px: 2,
            }}>
                <Grid item xs={12} sm={4} md={4}>
                    <img src={imgDetail} alt="Gedung Utama GYMSchool" 
                    style={{
                        width: '100%',
                    }} />
                    <CustomTypography>
                        Gedung Utama GYMSchool<br />
                        beginilah tampak gedung utama GYMSchool.<br />
                        Dengan Background Pantai dan Gunung.<br />
                    </CustomTypography>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <img src={imgDetail2} alt="Villa Elite GYMSchool" 
                    style={{ 
                        width: "100%",
                    }} />
                    <CustomTypography>
                        Villa Elite GYMSchool<br />
                        Villa disediakan sebagai sarana tempat tinggal bagi para pembicara/Coach.<br /> 
                        Hanya berlaku bagi tamu yang diundang.
                    </CustomTypography>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <img src={imgDetail} alt="Gedung Utama GYMSchool" 
                    style={{
                        width: '100%',
                    }} />
                    <CustomTypography>
                        Gedung Utama GYMSchool<br />
                        beginilah tampak gedung utama GYMSchool.<br />
                        Dengan Background Pantai dan Gunung.<br />
                    </CustomTypography>
                </Grid>
            </Grid>
            <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}   
            sx={{
                px: 2,
            }}>
            </Grid>
            <Grid container spacing={{ xs: 4, sm: 4, md: 4 }}   
            sx={{
                px: 2,
                py: 4,
            }}>
                <Grid item xs={12} sm={8} md={8}>
                    <Box component='article'
                    sx={{
                        px: 4,
                    }}>
                        <Title text={'List Section'} textAlign={'start'} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6}>
                                <CustomTypography>
                                    <b>Item 1</b><br />
                                    Description for item 1.<br />
                                </CustomTypography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CustomTypography>
                                    <b>Item 2</b><br />
                                    Description for item 2.<br />
                                </CustomTypography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CustomTypography>
                                    <b>Item 3</b><br />
                                    Description for item 3.<br />
                                </CustomTypography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CustomTypography>
                                    <b>Item 4</b><br />
                                    Description for item 4.<br />
                                </CustomTypography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CustomTypography>
                                    <b>Item 5</b><br />
                                    Description for item 5.<br />
                                </CustomTypography>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>
                                <CustomTypography>
                                    <b>Item 6</b><br />
                                    Description for item 6.<br />
                                </CustomTypography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <img src={imgDetail2} alt="List Image" 
                    style={{
                        width: '100%',
                    }} />
                </Grid>
            </Grid>
        </>
    );
}

export default GetStarted;
