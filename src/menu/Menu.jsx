import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../navbar/japanese-food.png'; // Your logo path
import './Menu.css';
import pizza from '../menu/pizza.png'; 
import Cheese from '../menu/cheese.jpg'; // Your pizza image
import { Drawer } from 'antd';
import { Row, Col } from 'react-bootstrap';
import Vegiee from '../menu/veggiepizza.png';
import Fajita from '../menu/fajita.jpg';
import Molten from '../menu/molten.jpg';
import Fantasy from '../menu/kitkat.jpg';
import Shake from '../menu/shakes.jpg';
import Brownie from '../menu/brown.jpg'
import BreakFast from '../menu/breakfast.jpg'
import Chai from '../menu/chai.jpg'
import Chuppa from '../menu/cuppa.jpg'
import parata from '../menu/parata.jpg'
import Burger from '../menu/burger.jpg'
import Fries from '../menu/fried.jpg'
import Biryani from '../menu/biryani.jpg'
import Roll from '../menu/roll.jpg'
// Sample menu items
const menuItems = [
    { id: 1, name: 'HomeMade Pizza', price: 10, image: pizza, category: 'Main Course' },
    { id: 2, name: 'Cheese Pizza', price: 12, image: Cheese, category: 'Main Course' },
    { id: 3, name: 'Vegetable Pizza', price: 8, image: Vegiee, category: 'Main Course' },
    { id: 4, name: 'fajita pizza', price: 12, image: Fajita, category: 'Main Course' },
    { id: 5, name: 'Egg', price: 5, image: BreakFast, category: 'BreakFast' },
    { id: 6, name: 'Chai', price: 5, image: Chai, category: 'BreakFast' },
    { id: 7, name: 'Parahata', price: 5, image: parata, category: 'BreakFast' },
    { id: 8, name: 'Cappuccino', price: 5, image: Chuppa, category: 'BreakFast' },
   
    { id: 9, name: 'Ice Cream', price: 5, image: Molten, category: 'Dessert' },
    { id: 10, name: 'Kitkat Fantasy', price: 6, image: Fantasy ,category: 'Dessert' },
    { id: 11, name: 'MilkShake', price: 6, image: Shake, category: 'Dessert' },
    { id: 12, name: 'Brownie', price: 6, image: Brownie, category: 'Dessert' },

    { id: 13, name: 'Burger', price: 6, image:Burger, category: 'FastFood' },
    { id: 14, name: 'Fries', price: 6, image:Fries, category: 'FastFood' },
    { id: 15, name: 'Biryani', price: 6, image:Biryani, category: 'FastFood' },   
     { id: 16, name: 'Roll', price: 6, image:Roll, category: 'FastFood' },

    // Add more items as needed
];

// Menu Item Card Component
const MenuItemCard = ({ item, addToOrder }) => {
    return (
        <Card className="menu-card">
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: ${item.price}</Card.Text>
                <Button className='order' onClick={() => addToOrder(item)}>
                    Add to Order
                </Button>
            </Card.Body>
        </Card>
    );
};

const Menu = () => {
    const [order, setOrder] = useState([]); // State for tracking the order
    const [drawerOpen, setDrawerOpen] = useState(false); // State for controlling drawer visibility
    const [selectedCategory, setSelectedCategory] = useState('Main Course'); // Default category

    const addToOrder = (item) => {
        setOrder((prevOrder) => {
            const existingItem = prevOrder.find((orderItem) => orderItem.id === item.id);
            if (existingItem) {
                return prevOrder.map((orderItem) =>
                    orderItem.id === item.id
                        ? { ...existingItem, quantity: existingItem.quantity + 1 }
                        : orderItem
                );
            }
            return [...prevOrder, { ...item, quantity: 1 }];
        });
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleCheckout = () => {
        console.log('Checkout:', order);
        setDrawerOpen(false); // Close drawer after checkout
    };

    // Filter items based on selected category
    const filteredItems = menuItems.filter(item => item.category === selectedCategory);

    return (
        <div className="container">
            {/* Logo and Cart Button */}
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" height={50} />
                    <h3>Bistro Bliss</h3>
                </div>
                <Button className="cart-btn" onClick={toggleDrawer}>
                    <ShoppingCartOutlined /> ({order.length})
                </Button>
            </div>

            {/* Category Buttons */}
            <div className="category-buttons">
                {['Main Course', 'Dessert' , 'BreakFast','FastFood'].map((category) => (
                    <Button
                        key={category}
                        className="category-btn"
                        onClick={() => setSelectedCategory(category)}
                        active={selectedCategory === category}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            {/* Menu Cards */}
            <Row className="menu-items">
                {filteredItems.map((item) => (
                    <Col xs={12} sm={6} md={3} key={item.id} className="menu-item-col">
                        <MenuItemCard item={item} addToOrder={addToOrder} />
                    </Col>
                ))}
            </Row>

            {/* Order Drawer */}
            <Drawer
                closable
                destroyOnClose
                title="Your Order"
                placement="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                width={400}
            >
                <div>
                    {order.length === 0 ? (
                        <p>Your order is empty!</p>
                    ) : (
                        <div>
                            {order.map((item) => (
                                <div key={item.id}>
                                    <p>
                                        {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
                                    </p>
                                </div>
                            ))}
                            <h5>Total: ${totalPrice}</h5>
                        </div>
                    )}
                </div>
                <Button
                    className="checkout-btn"
                    onClick={handleCheckout}
                    disabled={order.length === 0}
                >
                    Checkout
                </Button>
            </Drawer>
        </div>
    );
};

export default Menu;
