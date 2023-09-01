import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  servicesData: Service[] = [
    {
      title: 'Garden Design',
      description: 'Transform your outdoor space with our expert garden design services.',
      imageUrl: 'assets/gardens.jpg',
    },
    {
      title: 'Cleaning Services',
      description: 'Keep your home spotless with our professional cleaning services.',
      imageUrl: 'assets/cleaning.jpg',
    },
    {
      title: 'Lawn Care',
      description: 'Maintain a lush, green lawn with our specialized lawn care services.',
      imageUrl: 'assets/lawn-care.jpg',
    },
    {
      title: 'Interior Cleaning',
      description: 'Revive the interior of your home with our interior cleaning solutions.',
      imageUrl: 'assets/interior-cleaning.jpg',
    },
    { 
      title: 'Pest Control', 
      description: 'Get rid of pests with our pest control services.', 
      imageUrl: 'assets/pest-control.jpg' 
    },
    { 
      title: 'Snow Removal',
      description: 'Keep your driveway and walkways clear with our snow removal services.',
      imageUrl: 'assets/snow-removal.jpg'  
    },
  ];

  constructor() {}

  ngOnInit() {}

  showMore(service: Service) {
    // You can implement functionality to display more details about the selected service.
    // For example, open a modal or navigate to a separate service details page.
    console.log('Read more about:', service.title);
  }
}

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}
