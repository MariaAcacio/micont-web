import { IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';

export default function RoundedButton({
  onClick,
  icon,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
}): React.JSX.Element {
  return (
    <IconButton
      onClick={onClick}
      color="primary"
      sx={theme => ({
        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
        '&:hover': {
          backgroundColor: alpha(theme.palette.secondary.main, 0.5),
        },
      })}
    >
      {icon}
    </IconButton>
  );
}
