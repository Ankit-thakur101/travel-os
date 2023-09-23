import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

const GuestDetail = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box height={'100vh'} paddingY={5} paddingX={'150px'}>
      <Box>
        <Box>
          <TextField
            id="standard-basic"
            fullWidth
            label="AGENT EMAIL ID"
            variant="standard"
          />
        </Box>
        <Box my={2}>
          <TextField
            id="standard-basic"
            fullWidth
            label="BOOKING REFERENCE NAME (IF ANY)"
            variant="standard"
          />
        </Box>
        <Box>
          <TextField
            id="standard-basic"
            fullWidth
            label="AGENT REFERENCE INFO (IF ANY)"
            variant="standard"
          />
        </Box>
      </Box>
      <Box my={4} paddingTop={3}>
        <Typography variant="h5">Guest Details</Typography>
      </Box>
      <Box>
        <Box>
          <Typography>Guest 1</Typography>
        </Box>
        <Grid container>
          <Grid item xs={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
              <InputLabel id="demo-simple-select-standard-label">
                TITLE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                fullWidth
                onChange={handleChange}
                label="TITLE"
              >
                <MenuItem value={10} selected>
                  Mr.
                </MenuItem>
                <MenuItem value={20}>Ms.</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            paddingRight={5}
            display={'flex'}
            alignItems={'end'}
          >
            <TextField
              id="standard-basic"
              fullWidth
              label="FIRST NAME"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4} paddingLeft={5} display={'flex'} alignItems={'end'}>
            <TextField
              id="standard-basic"
              fullWidth
              label="LAST NAME"
              variant="standard"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box>
          <Typography>Guest 2</Typography>
        </Box>
        <Grid container>
          <Grid item xs={4}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 350 }}>
              <InputLabel id="demo-simple-select-standard-label">
                TITLE
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                fullWidth
                onChange={handleChange}
                label="TITLE"
              >
                <MenuItem value={10} selected>
                  Mr.
                </MenuItem>
                <MenuItem value={20}>Ms.</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            display={'flex'}
            paddingRight={5}
            alignItems={'end'}
          >
            <TextField
              id="standard-basic"
              fullWidth
              label="FIRST NAME"
              variant="standard"
            />
          </Grid>
          <Grid item xs={4} paddingLeft={5} display={'flex'} alignItems={'end'}>
            <TextField
              id="standard-basic"
              fullWidth
              label="LAST NAME"
              variant="standard"
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h5" my={4} paddingTop={3}>
          Any Special Request?
        </Typography>
      </Box>
      <Box my={3}>
        <Input
          id="standard-adornment-weight"
          endAdornment={<InputAdornment position="end">ADD +</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          fullWidth
          placeholder="Please us know of any special requests we can forword to our customer care team"
          inputProps={{
            'aria-label': 'weight',
          }}
        />
      </Box>
      <Box>
        <Typography variant="subtitle1">
          Can't find what you're looking in the list above?
        </Typography>
      </Box>
    </Box>
  );
};

export default GuestDetail;