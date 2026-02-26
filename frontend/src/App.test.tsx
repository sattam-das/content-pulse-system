import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputScreen from './components/InputScreen';
import '@testing-library/jest-dom/vitest';

describe('InputScreen Validation', () => {
  it('shows error when submitting empty URL', async () => {
    const mockSubmit = vi.fn();
    const mockNavigate = vi.fn();

    render(
      <InputScreen
        onSubmit={mockSubmit}
        isSubmitting={false}
        onNavigate={mockNavigate}
      />
    );

    const submitBtn = screen.getByRole('button', { name: /Analyze Now/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Please enter a YouTube URL')).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it('shows error when submitting invalid URL format', async () => {
    const mockSubmit = vi.fn();
    const mockNavigate = vi.fn();

    render(
      <InputScreen
        onSubmit={mockSubmit}
        isSubmitting={false}
        onNavigate={mockNavigate}
      />
    );

    const input = screen.getByPlaceholderText('Paste YouTube URL here...');
    await userEvent.type(input, 'not_a_valid_youtube_link');
    
    const submitBtn = screen.getByRole('button', { name: /Analyze Now/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Please enter a valid YouTube video URL')).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it('calls onSubmit when valid URL is provided', async () => {
    const mockSubmit = vi.fn();
    const mockNavigate = vi.fn();

    render(
      <InputScreen
        onSubmit={mockSubmit}
        isSubmitting={false}
        onNavigate={mockNavigate}
      />
    );

    const input = screen.getByPlaceholderText('Paste YouTube URL here...');
    await userEvent.type(input, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    
    const submitBtn = screen.getByRole('button', { name: /Analyze Now/i });
    fireEvent.click(submitBtn);

    expect(mockSubmit).toHaveBeenCalledWith('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    expect(screen.queryByText('Please enter a valid YouTube video URL')).not.toBeInTheDocument();
  });
});
