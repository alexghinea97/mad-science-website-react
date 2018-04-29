import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    width: '90%',
    height: 600,
    overflowY: 'auto'
  }
};

const tilesData = [
  {
    img: 'images/template-images-cover/img_temp_band.jpg',
    title: 'Band Template',
    url: 'templates/band-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_gourmet_catering.jpg',
    title: 'Gourmet Catering Template',
    url: 'templates/gourmet-catering-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_architect.jpg',
    title: 'Architect Template',
    url: 'templates/architect-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_parallax.jpg',
    title: 'Parallax Template',
    url: 'templates/parallax-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_blog.jpg',
    title: 'Blog Template',
    url: 'templates/blog-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_food_blog.jpg',
    title: 'Food Blog Template',
    url: 'templates/food-blog-templates.html'
  },
  {
    img: 'images/template-images-cover/img_temp_fashion_blog.jpg',
    title: 'Fashion Blog Template',
    url: 'templates/fashion-blog-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_cafe.jpg',
    title: 'Cafe Template',
    url: 'templates/cafe-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_clothing_store.jpg',
    title: 'Clothing Store Template',
    url: 'templates/clothing-store-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_cv.jpg',
    title: 'CV Template',
    url: 'templates/cv-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_comingsoon.jpg',
    title: 'Coming Soon Template',
    url: 'templates/comingsoon-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_wedding.jpg',
    title: 'Wedding Invitation Template',
    url: 'templates/wedding-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_photo.jpg',
    title: 'Photo Template',
    url: 'templates/photo-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_photo2.jpg',
    title: 'Black & White Photo Template',
    url: 'templates/black-and-white-photo-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_photo3.jpg',
    title: 'Photo Portfolio Template',
    url: 'templates/photo-portfolio-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_portfolio.jpg',
    title: 'Nature Portfolio Template',
    url: 'templates/nature-portfolio-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_portfolio2.jpg',
    title: 'People Portfolio Template',
    url: 'templates/people-portfolio-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_portfolio3.jpg',
    title: 'People Portfolio II Template',
    url: 'templates/people-portfolio-second-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_dark_icon.jpg',
    title: 'Dark Portfolio Template',
    url: 'templates/dark-portfolio-second-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_bw_port.jpg',
    title: 'Black & White Portfolio Template',
    url: 'templates/black-and-white-portfolio-second-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_interior_design.jpg',
    title: 'Interior Design Template',
    url: 'templates/interior-design-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_modal_restaurant.jpg',
    title: 'Modal Restaurant Template',
    url: 'templates/modal-restaurant-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_pizza.jpg',
    title: 'Pizza Restaurant Template',
    url: 'templates/pizza-restaurant-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_startpage.jpg',
    title: 'Start Page Template',
    url: 'templates/start-page-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_startup.jpg',
    title: 'Startup Template',
    url: 'templates/startup-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_app_launch.jpg',
    title: 'App Launch Template',
    url: 'templates/app-launch-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_marketing.jpg',
    title: 'Marketing Template',
    url: 'templates/marketing-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_website.jpg',
    title: 'Marketing / Website Template',
    url: 'templates/marketing-website-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_art.jpg',
    title: 'Art Template',
    url: 'templates/art-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_webpage.jpg',
    title: 'Web Page Template',
    url: 'templates/web-page-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_social.jpg',
    title: 'Social Media Template',
    url: 'templates/social-media-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_analytics.jpg',
    title: 'Analytics Template',
    url: 'templates/analitycs-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_apartment_rental.jpg',
    title: 'Apartment Rental Template',
    url: 'templates/apartment-rental-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_hotel.jpg',
    title: 'Hotel Template',
    url: 'templates/hotel-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_travel2.jpg',
    title: 'Travel Template',
    url: 'templates/travel-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_travel.jpg',
    title: 'Travel Agency Template',
    url: 'templates/travel-agency-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_design.jpg',
    title: 'House Design Template',
    url: 'templates/house-design-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_fifty.jpg',
    title: 'Screen 50/50 Template',
    url: 'templates/screen-fifty-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_mail.jpg',
    title: 'Mail Template',
    url: 'templates/mail-template.html'
  },
  {
    img: 'images/template-images-cover/img_temp_demosite.jpg',
    title: 'Kitchen Sink/W3.CSS Demo Template',
    url: 'templates/kitchen-sink-template.html'
  }
];

export default function Tempaltes() {
  return (
    <div>
      <h4>Templates</h4>
      <div style={styles.root}>
        <GridList cellHeight={180} style={styles.gridList}>
          {tilesData.map(tile => (
            <GridTile key={tile.img} title={tile.title} url={tile.url}>
              <a href={tile.url} target="blank">
                <img src={tile.img} />
              </a>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
