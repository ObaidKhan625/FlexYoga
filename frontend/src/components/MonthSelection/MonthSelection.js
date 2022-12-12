import { React, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';

const MonthSelection = (props) => {
    const [month1, setMonth1] = useState('');
    const [month2, setMonth2] = useState('');
    const [month3, setMonth3] = useState('');
    const [month4, setMonth4] = useState('');
    const [month5, setMonth5] = useState('');
    const [month6, setMonth6] = useState('');
    const batchContent = ['', 'Batch1 - 6:00 am to 7:00 am', 'Batch2 - 7:00 am to 8:00 am', 
    'Batch3 - 8:00 am to 9:00 am', 'Batch4 - 9:00 am to 10:00 am'];

    return (
        <div style={{ paddingLeft: '5vw', paddingRight: '5vw' }}>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">December</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="December"
                            value={props.monthsData.month1}
                            onChange={(e) => { props.changeMonthsData('month1', e.target.value); setMonth1(batchContent[e.target.value]); } }
                            >
                                <MenuItem value={0} sx={{color: 'gray'}}>December</MenuItem>
                                <MenuItem value={1}>Batch1 - 6:00 am to 7:00 am</MenuItem>
                                <MenuItem value={2}>Batch2 - 7:00 am to 8:00 am</MenuItem>
                                <MenuItem value={3}>Batch3 - 8:00 am to 9:00 am</MenuItem>
                                <MenuItem value={4}>Batch4 - 9:00 am to 10:00 am</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">January</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="December"
                            value={props.monthsData.month2}
                            onChange={(e) => { props.changeMonthsData('month2', e.target.value); setMonth2(batchContent[e.target.value]); } }
                            >
                                <MenuItem value={0} sx={{color: 'gray'}}>January</MenuItem>
                                <MenuItem value={1}>Batch1 - 6:00 am to 7:00 am</MenuItem>
                                <MenuItem value={2}>Batch2 - 7:00 am to 8:00 am</MenuItem>
                                <MenuItem value={3}>Batch3 - 8:00 am to 9:00 am</MenuItem>
                                <MenuItem value={4}>Batch4 - 9:00 am to 10:00 am</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">February</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="February"
                            value={props.monthsData.month3}
                            onChange={(e) => { props.changeMonthsData('month3', e.target.value); setMonth3(batchContent[e.target.value]); } }
                            >
                                <MenuItem value={0} sx={{color: 'gray'}}>February</MenuItem>
                                <MenuItem value={1}>Batch1 - 6:00 am to 7:00 am</MenuItem>
                                <MenuItem value={2}>Batch2 - 7:00 am to 8:00 am</MenuItem>
                                <MenuItem value={3}>Batch3 - 8:00 am to 9:00 am</MenuItem>
                                <MenuItem value={4}>Batch4 - 9:00 am to 10:00 am</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">March</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="March"
                            value={props.monthsData.month4}
                            onChange={(e) => { props.changeMonthsData('month4', e.target.value); setMonth4(batchContent[e.target.value]); } }
                            >
                                <MenuItem value={0} sx={{color: 'gray'}}>March</MenuItem>
                                <MenuItem value={1}>Batch1 - 6:00 am to 7:00 am</MenuItem>
                                <MenuItem value={2}>Batch2 - 7:00 am to 8:00 am</MenuItem>
                                <MenuItem value={3}>Batch3 - 8:00 am to 9:00 am</MenuItem>
                                <MenuItem value={4}>Batch4 - 9:00 am to 10:00 am</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">April</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="April"
                            value={props.monthsData.month5}
                            onChange={(e) => { props.changeMonthsData('month5', e.target.value); setMonth5(batchContent[e.target.value]); } }
                            >
                                <MenuItem value={0} sx={{color: 'gray'}}>April</MenuItem>
                                <MenuItem value={1}>Batch1 - 6:00 am to 7:00 am</MenuItem>
                                <MenuItem value={2}>Batch2 - 7:00 am to 8:00 am</MenuItem>
                                <MenuItem value={3}>Batch3 - 8:00 am to 9:00 am</MenuItem>
                                <MenuItem value={4}>Batch4 - 9:00 am to 10:00 am</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">May</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="May"
                            value={props.monthsData.month6}
                            onChange={(e) => { props.changeMonthsData('month6', e.target.value); setMonth6(batchContent[e.target.value]); } }
                            >
                                <MenuItem value={0} sx={{color: 'gray'}}>May</MenuItem>
                                <MenuItem value={1}>Batch1 - 6:00 am to 7:00 am</MenuItem>
                                <MenuItem value={2}>Batch2 - 7:00 am to 8:00 am</MenuItem>
                                <MenuItem value={3}>Batch3 - 8:00 am to 9:00 am</MenuItem>
                                <MenuItem value={4}>Batch4 - 9:00 am to 10:00 am</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Typography>
        </div>
    );
}

export default MonthSelection;