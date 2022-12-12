import { React, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const PaymentBox = (props) => {
    return (
        <Paper
            sx={{
            height: 140,
            width: 300,
            backgroundColor: () => !props.paymentStatus ? 'white' : (props.paymentStatus === 'waiting' ? 'gray' : '#00C851'),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            }}

        >
            {!props.paymentStatus?
            <>Pending</>
            :
            (
            props.paymentStatus === 'waiting'?
            <>Loading</>
            :
            <>Done</>
            )
        }
        <button>Click</button>
        </Paper>
    )
}

export default PaymentBox;