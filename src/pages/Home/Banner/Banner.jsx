// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../../../assets/images/banner/a1.jpg";
import img2 from "../../../assets/images/banner/a2.jpg";
import img3 from "../../../assets/images/banner/a6.jpg";
import img4 from "../../../assets/images/banner/a7.jpg";
import img5 from "../../../assets/images/banner/a5.jpg";
// import img3 from "../../../assets/images/banner/a3.jpg";
// import img4 from "../../../assets/images/banner/a4.jpg";
const Banner = () => {
  return (
    // <div className="mx-56">
    //   <Carousel>
    //     <div className="relative">
    //       <img src={img1} className="" />
    //     </div>
    //     <div>
    //       <img src={img2}  />
    //     </div>
    //     <div>
    //       <img src={img3}  />
    //     </div>
    //     <div>
    //       <img src={img4}  />
    //     </div>

    //   </Carousel>
    // </div>
    <div className="mx-52">
    <Carousel className="rounded-xl">
     
     
      <div className="relative h-full w-full">
        <img
          src={img1}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-gradient-to-t from-black/80 via-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               Dive into the World of Colors & Brushstrokes!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Unleash your creativity and learn various painting techniques and mediums, from vibrant acrylics to delicate watercolors. Explore the magic of colors and express yourself through captivating brushstrokes.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img4}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-gradient-to-t from-black/80 via-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               Get Your Hands Dirty and Create with Clay!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
               Experience the joy of working with clay as you learn wheel throwing and hand-building techniques. Discover the art of pottery and create functional and decorative ceramic pieces that showcase your craftsmanship and unique style.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-gradient-to-t from-black/80 via-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Shape Your Imagination into Masterpieces!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
               Discover the art of sculpture and learn to create captivating three-dimensional forms using clay, wood, and other materials. Let your imagination run wild as you mold and shape unique sculptures that reflect your creativity.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img5}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-gradient-to-t from-black/80 via-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Unfold the Artistry of Paper! 
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
            Explore the world of paper crafts and dive into the art of origami, card-making, and more. Learn to transform simple sheets of paper into intricate designs and personalized creations that will delight and inspire.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  );
};

export default Banner;
