import { React } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Details = (props) => {
    const batchContent = ['Choose Batch', 'Batch1 - 6:00 am to 7:00 am', 'Batch2 - 7:00 am to 8:00 am', 
    'Batch3 - 8:00 am to 9:00 am', 'Batch4 - 9:00 am to 10:00 am'];
    return (
    <div>
        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
                Enter Your Details
            </Typography>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={4}>
                    <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    defaultValue=""
                    fullWidth
                    autoComplete="fname"
                    value={props.detailsData.firstName}
                    onChange={(e) => props.changeDetailsData('firstName', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    defaultValue=""
                    fullWidth
                    autoComplete="lname"
                    value={props.detailsData.lastName}
                    onChange={(e) => props.changeDetailsData('lastName', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                    required
                    id="age"
                    name="age"
                    label="Age"
                    type="number"
                    fullWidth
                    autoComplete="age"
                    inputProps={{ min: 18, max: 65 }}
                    value={props.detailsData.age}
                    onChange={(e) => props.changeDetailsData('age', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                    required
                    id="number"
                    name="number"
                    label="Phone number"
                    type="number"
                    fullWidth
                    autoComplete="billing address-line1"
                    value={props.detailsData['number']}
                    onChange={(e) => props.changeDetailsData('number', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Choose Batch</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Choose Batch"
                            value={batchContent[props.batch]}
                            onChange={(e) => props.changeDetailsData('batch', e.target.value)}
                            >
                                <MenuItem value={1}>Batch1 - 6:00 am to 7:00 am</MenuItem>
                                <MenuItem value={2}>Batch2 - 7:00 am to 8:00 am</MenuItem>
                                <MenuItem value={3}>Batch3 - 8:00 am to 9:00 am</MenuItem>
                                <MenuItem value={4}>Batch4 - 9:00 am to 10:00 am</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="address"
                    name="address"
                    label="Address line"
                    fullWidth
                    autoComplete="billing address-line1"
                    value={props.detailsData['address']}
                    onChange={(e) => props.changeDetailsData('address', e.target.value)}
                    />
                </Grid>
            </Grid>
        </Typography>
    </div>
    )
}

export default Details;