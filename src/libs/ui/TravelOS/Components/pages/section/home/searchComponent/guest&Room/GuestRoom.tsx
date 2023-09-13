import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';

import './guestRoom.css';

const GuestRoom = () => {
  const [guestAdults, setGuestAdults] = useState(0);
  const [guestChildren, setGuestChildren] = useState(0);
  const [guestBox, setGuestBox] = useState([1]);

  const addBox = () => {
    setGuestBox([...guestBox, 1]);
  };

  const Remove = (id: any) => {
    const fileterData = guestBox?.filter((ite, index) => id !== index);
    setGuestBox(fileterData);
  };

  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: '#252525',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box pl={2}>
            <Typography color={'primary'}>Destination</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box>
              <Typography color={'primary'}>Room</Typography>
            </Box>
            {guestBox?.map((item, index) => {
              return (
                <>
                  {guestBox.length > 1 ? (
                    <Box
                      display={'flex'}
                      justifyContent={'end'}
                      marginRight={3}
                    >
                      <ClearIcon
                        onClick={() => {
                          Remove(index);
                        }}
                      />
                    </Box>
                  ) : (
                    ''
                  )}

                  <Grid container spacing={2}>
                    <Grid item xs={6} padding={3}>
                      <Box
                        display={'flex '}
                        justifyContent={'space-between'}
                        borderBottom={3}
                        borderColor={'white'}
                      >
                        <Box>
                          <Typography color={'primary'}>ADULTS</Typography>
                        </Box>
                        <Box display={'flex'}>
                          <Box>
                            <Typography>
                              <RemoveIcon
                                className="guest_icon"
                                onClick={() => {
                                  setGuestAdults(guestAdults - 1);
                                }}
                              />
                            </Typography>
                          </Box>
                          <Box marginX={4}>
                            <Typography color={'primary'}>
                              {guestAdults}
                            </Typography>
                          </Box>
                          <Box>
                            <AddIcon
                              className="guest_icon"
                              onClick={() => {
                                setGuestAdults(guestAdults + 1);
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box marginTop={2}>
                        <Typography variant={'body2'} color={'primary'}>
                          12 YEARS AND OLDER
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={6} padding={3}>
                      <Box
                        display={'flex '}
                        justifyContent={'space-between'}
                        borderBottom={3}
                        borderColor={'white'}
                      >
                        <Box>
                          <Typography color={'primary'}>CHILDREN</Typography>
                        </Box>
                        <Box display={'flex'}>
                          <Box>
                            <Typography>
                              <RemoveIcon
                                className="guest_icon"
                                onClick={() => {
                                  setGuestChildren(guestChildren - 1);
                                }}
                              />
                            </Typography>
                          </Box>
                          <Box marginX={4}>
                            <Typography color={'primary'}>
                              {guestChildren}
                            </Typography>
                          </Box>
                          <Box>
                            <AddIcon
                              className="guest_icon"
                              onClick={() => {
                                setGuestChildren(guestChildren + 1);
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box marginTop={2}>
                        <Typography variant={'body2'} color={'primary'}>
                          11 YEARS AND YOUNGER
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              );
            })}
            <Grid container spacing={2}>
              <Grid item xs={6} padding={3}>
                <Box display={'flex'} justifyContent={'center'} marginY={3}>
                  <Button
                    startIcon={<AddIcon />}
                    color={'info'}
                    onClick={() => {
                      addBox();
                    }}
                  >
                    ADD ANOTHER ROOM
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6} padding={3}>
                <Box display={'flex'} justifyContent={'center'} marginY={3}>
                  <Button
                    startIcon={<AddIcon />}
                    variant={'contained'}
                    color={'primary'}
                  >
                    ADD ANOTHER ROOM
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default GuestRoom;