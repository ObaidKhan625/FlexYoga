import { React,  useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Details from '../../components/Details/Details';
import LoadingScreen from "react-loading-screen";
import PaymentIcon from '@mui/icons-material/Payment';
import Confetti from 'react-confetti';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import swal from "sweetalert";

const FormPage = () => {
  const [detailsData, setDetailsData] = useState({firstName: '', lastName: '', age: '', number: '', address: '', batch: 0});
  const [runPaymentSuccess, setRunPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openFailureDialog, setOpenFailureDialog] = useState(false);
  const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight});

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, [windowDimension]);

  const handleClickOpenSuccessDialog = () => {
    setOpenSuccessDialog(true);
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
    swal({
      title: "Done!",
      text: "Payment Done!",
      icon: "success",
      dangerMode: true,
      button: false,
      timer: 1000,
    });
  };
  const handleCloseFailureDialog = () => {
    setOpenFailureDialog(false);
  };

  const showResponse = (resp) => {
    if(resp['status'] === "Already Paid") {
      setOpenFailureDialog(true);
    }
    else if(resp['discount'] === 'No') {
      setRunPaymentSuccess(true);
      swal({
        title: "Done!",
        text: "Payment Done!",
        icon: "success",
        dangerMode: true,
        button: false,
        timer: 1000,
      });
    }
    else {
      setRunPaymentSuccess(true);
      handleClickOpenSuccessDialog();
    }
    setLoading(false);
  }
  const proceedPayment = () => {
    if(!validateDetails())
      return;
    setLoading(true);
    const baseURL = 'http://localhost:8000/api/createOrUpdateRecord/';
    fetch(baseURL, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(detailsData)
      }
    )
    .then(resp => resp.json())
    .then(resp => showResponse(resp));
  }

  const validateDetails = () => {
    if(!detailsData['firstName'] || detailsData['firstName'].length === 0) {
      alert("Enter first Name"); return false;
    }
    else if(!detailsData['lastName'] || detailsData['lastName'].length === 0) {
      alert("Enter last Name"); return false;
    }
    else if(!detailsData['age'] || detailsData['age'] < 18 || detailsData['age'] > 65) {
      alert("You're too young/old to enroll :)"); return false;
    }
    else if(!detailsData['number'] || detailsData['number'].length !== 10) {
      alert("Enter a valid Indian Number"); return false;
    }
    else if(detailsData['batch'] === 0) {
      alert("Enter a Batch"); return false;
    }
    return true;
  }

  const changeDetailsData = (detailSection, detailContent) => {
    if(detailSection === 'firstName')
      setDetailsData({...detailsData, 'firstName': detailContent});
    if(detailSection === 'lastName')
      setDetailsData({...detailsData, 'lastName': detailContent});
    if(detailSection === 'age')
      setDetailsData({...detailsData, 'age': detailContent});
    if(detailSection === 'number')
      setDetailsData({...detailsData, 'number': detailContent});
    if(detailSection === 'address')
      setDetailsData({...detailsData, 'address': detailContent});
    if(detailSection === 'batch')
      setDetailsData({...detailsData, 'batch': detailContent});
  };

  return (
    <LoadingScreen
      loading={loading}
      bgColor="white"
      spinnerColor="#00C851"
      textColor="black"
      text="Please Wait"
    >
      <Confetti
        run={runPaymentSuccess}
        width={windowDimension.width}
        height={windowDimension.height}
      />
      <Dialog
        open={openSuccessDialog}
        keepMounted
        onClose={handleCloseSuccessDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"You get a Discount!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Since this is your first time at Flex Yoga, you get a 50% off for the month🎉🎉🎉
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSuccessDialog}>Okay</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openFailureDialog}
        keepMounted
        onClose={handleCloseFailureDialog}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Payment not done."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You have already enrolled in a batch for this month, this cannot be changed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseFailureDialog}>Okay</Button>
        </DialogActions>
      </Dialog>
      <Container fixed>
        <h1 style={{ textAlign: 'center', fontStyle: 'italic', color: '#00C851', fontSize: '7vh' }}>Flexyoga</h1>
        <Box sx={{ width: '100%', color: '#00C851' }}>
          <div style={{ minHeight: '60vh' }}>
            <Details detailsData={detailsData} changeDetailsData={changeDetailsData} />
          </div>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={proceedPayment} sx={{ mr: 1, color: 'black', backgroundColor: '#00C851' }} >
              <PaymentIcon />
            </Button>
          </Box>
        </Box>
      </Container>
    </LoadingScreen>
  )
}

export default FormPage;