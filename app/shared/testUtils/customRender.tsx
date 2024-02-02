import { render, RenderOptions } from '@testing-library/react';
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { FC, PropsWithChildren, ReactElement } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
