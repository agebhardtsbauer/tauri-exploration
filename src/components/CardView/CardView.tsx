import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

//two by 3 grid of cards with lorem ipusm text
//container margin left 300px
function CardView() {
  return (
    <div style={{ marginLeft: 250 }}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <Card>
            <CardHeader title="Card 1" />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Card>
            <CardHeader title="Card 2" />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
                libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Card>
            <CardHeader title="Card 3" />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Card>
            <CardHeader title="Card 4" />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Card>
            <CardHeader title="Card 5" />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Card>
            <CardHeader title="Card 6" />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardView;
