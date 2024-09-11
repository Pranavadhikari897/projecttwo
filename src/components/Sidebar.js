import React from 'react';
import { Form } from 'react-bootstrap';

const Sidebar = ({ filters, onFilterChange, onSortChange }) => {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <Form>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" onChange={(e) => onFilterChange('category', e.target.value)}>
            <option value="">All</option>
            <option value="Dress">Dress</option>
            {/* Add more categories if needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Max Price" onChange={(e) => onFilterChange('price', e.target.value)} />
        </Form.Group>

        <Form.Group controlId="sort">
          <Form.Label>Sort By</Form.Label>
          <Form.Control as="select" onChange={(e) => onSortChange(e.target.value)}>
            <option value="">Default</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Sidebar;