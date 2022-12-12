import { React, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@mui/material/Button';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentBox from '../PaymentBox/PaymentBox';

const PaymentSection = (props) => {
    const [paymentStatus, setPaymentStatus] = useState('pending');
    const proceedPayment = () => {
        setPaymentStatus('waiting');
        const baseURL = 'http://localhost:8000/api/createOrUpdateRecord/';
        fetch(baseURL).then(resp => resp.json()).then(resp => console.log(resp));
        setPaymentStatus('done');
    }
    return (
        <Grid container justifyContent="center" spacing={2}>
            {[0, 1, 2, 3, 4, 5].map((value) => (
                <Grid item xs={12} md={4}>
                    <PaymentBox detailsData={props.detailsData} monthsData={props.monthsData[value]}
                    paymentStatus={paymentStatus} />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button onClick={proceedPayment}>
                    <PaymentIcon />
                </Button>
            </Grid>
        </Grid>
    )
}

export default PaymentSection;