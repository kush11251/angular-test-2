import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test-2';

  productCount = 5253;
  
  filters = ['Sort by', 'Price', 'Emi', 'Color', 'Brand', 'Sim'];
  
  promos = [
    { 
      title: 'Mobile on Easy EMI', 
      subtitle: 'Stay connected with the latest mobile', 
      actionText: 'Check Offer', 
      hasTag: false 
    },
    { 
      title: 'Smartphone on Easy EMI Loan', 
      subtitle: 'Get loan offer up to ₹500000', 
      actionText: 'Check Eligibility', 
      hasTag: true, 
      tagText: 'Cashback flat ₹1500' 
    }
  ];

  products = [
    {
      name: 'Samsung Galaxy A07 5G 128 GB Storage Light Violet (4 GB RAM)',
      emiStarting: '₹916',
      price: '₹16,479',
      mrp: '₹16,479',
      discount: '0% off'
    },
    {
      name: 'OnePlus 15R 5G 512 GB Storage Electric Violet',
      emiStarting: '₹1,250',
      price: '₹42,999',
      mrp: '₹45,999',
      discount: '6% off'
    }
  ];

  priceRanges = [
    '₹6,999.00 - ₹51,588.00', 
    '₹51,589.00 - ₹96,178.00', 
    '₹96,179.00 - ₹140,000.00'
  ];

  navItems = [
    { icon: '🏠', label: 'Home', active: false },
    { icon: '👤', label: 'Service', active: true },
    { icon: '🔄', label: 'More', active: false },
    { icon: '🧾', label: 'Pay EMIs', active: false },
    { icon: '☰', label: 'Menu', active: false },
    { icon: '💬', label: 'Chat', active: false }
  ];
}
