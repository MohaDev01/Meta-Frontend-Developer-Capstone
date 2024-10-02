import { render } from '@testing-library/react';
import Main from '../Main/Main';
import { fetchAPI } from '../../utilities/API';

// Mock fetchAPI
jest.mock('../../utilities/API', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));

describe('Main Component', () => {
  it('should initialize times with fetchAPI', () => {
    // Arrange: Set up the mock to return a fixed set of times
    fetchAPI.mockReturnValue(['17:00', '17:30', '18:00']);

    // Act: Render the Main component
    render(<Main />);

    // Assert: Verify that fetchAPI was called and times are initialized correctly
    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    // Add additional assertions based on how times are used in the component
  });
});


// Mock fetchAPI
jest.mock('../../utilities/API', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn()
}));

describe('Main Component', () => {
  it('should update times based on dispatched date', () => {
    // Arrange: Set up the mock to return a fixed set of times for the date
    fetchAPI.mockReturnValue(['17:00', '17:30', '18:00']);

    // Act: Render the Main component
    const { container } = render(<Main />);
    
    // Dispatch an action to update times
    const dispatch = container.querySelector('some-element'); // Use appropriate element or method to dispatch action
    dispatch({ type: 'UPDATE_TIMES', payload: '2024-09-18' });

    // Assert: Verify that fetchAPI was called with the correct date and times are updated
    expect(fetchAPI).toHaveBeenCalledWith(new Date('2024-09-18'));
    // Verify that the state is updated or the component renders updated times
  });
});
