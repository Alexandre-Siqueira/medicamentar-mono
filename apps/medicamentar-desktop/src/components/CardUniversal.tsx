import {
  Box,
  Card,
  Grid,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import EditOutlinedIcon from "@assets/icons/EditOutlined";
import AccessAlarmOutlinedIcon from "@assets/icons/AccessAlarmOutlinedIcon";
import DeleteOutlineOutlinedIcon from "@assets/icons/DeleteOutlineOutlinedIcon";

import dayjs from "dayjs";
import { longDate } from "../types/sanitizeDate";
import { useTheme } from "@constants/theme/useTheme";

interface CardUniversalProps {
  type: "medication" | "events";
  title: string;
  continuousUse?: boolean;
  dose?: number;
  qtpDose?: number;
  period?: number;
  dateTime: dayjs.Dayjs | string;
  description?: string;
  onDelete?: () => void;
  onEdit?: () => void;
}

const CardUniversal: React.FC<CardUniversalProps> = ({
  type,
  title,
  continuousUse,
  dose,
  qtpDose,
  period,
  dateTime,
  description,
  onDelete,
  onEdit,
}) => {
  const { darkMode } = useTheme();
  const isMedication = type === "medication";
  const isEvents = type === "events";
  const location = useLocation().pathname;

  const titleCard = {
    width: 1,
    minWidth: "30%",
    fontSize: "12px",
    maxHeigth: "50px",
    marginInline: "5%",
    fontWeight: "bold",
    textAlign: "center",
    wordWrap: "break-word",
    py: location === "/home" ? "5px" : 0,
    color: darkMode ? "text.primary" : "background.default",
  };
  const cardButton = {
    height: "30px",
    display: "flex",
    cursor: "pointer",
    boxShadow: "none",
    alignItems: "center",
    justifyContent: "center",
  };

  const infoCard = {
    fontSize: "12px",
    wordWrap: "break-word",
    color: darkMode ? "common.black" : "common.black",
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      {isMedication && (
        <Card
          sx={{
            minHeight: 260,
            display: "flex",
            maxWidth: "300px",
            minWidth: "120px",
            boxShadow: "none",
            borderRadius: "5px",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { xs: "95%", sm: "95%", md: "90%", lg: "99%" },
            backgroundColor: darkMode ? "text.secondary" : "background.paper",
          }}
        >
          <Box
            sx={{
              padding: "2px",
              display: "flex",
              maxHeight: "100px",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: darkMode ? "primary.dark" : "primary.light",
            }}
          >
            <Tooltip title="Editar" placement="top">
              <IconButton onClick={onEdit}>
                <EditOutlinedIcon />
              </IconButton>
            </Tooltip>

            <Typography sx={{ ...titleCard }}>{title}</Typography>

            <Tooltip title="Deletar" placement="top">
              <IconButton onClick={onDelete}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              height: "72%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "219px",
                maxWidth: "100%",
              }}
            >
              <Typography sx={infoCard}>
                USO CONTÍNUO: {continuousUse ? "SIM" : "NÃO"}
              </Typography>
              <Typography sx={infoCard}>QUANTIDADE: {qtpDose}</Typography>
              <Typography sx={infoCard}>DOSE: {dose}</Typography>
              <Typography sx={infoCard}>PERÍODO: {period}</Typography>
            </Box>
            <Box
              sx={{
                margin: "6%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AccessAlarmOutlinedIcon></AccessAlarmOutlinedIcon>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "700",
                  paddingLeft: "5px",
                  textAlign: "center",
                  color: "common.black",
                }}
              >
                {longDate(dateTime)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...cardButton,
              backgroundColor: darkMode ? "text.primary" : "text.secondary",
            }}
          >
            <Typography
              sx={{
                fontSize: "8px",
                fontWeight: "700",
                textAlign: "center",
                color: darkMode ? "background.paper" : "background.default",
              }}
            >
              CLIQUE APÓS TOMAR O MEDICAMENTO
            </Typography>
          </Box>
        </Card>
      )}

      {isEvents && (
        <Card
          sx={{
            height: 180,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: darkMode ? "text.secondary" : "background.paper",
            width: { xs: "100%", sm: "95%", md: "90%", lg: "90%" },
          }}
        >
          <Box
            sx={{
              px: "8px",
              py: "4px",
              backgroundColor: darkMode ? "primary.dark" : "primary.light",
            }}
          >
            <Box
              sx={{
                display: "flex",
                maxHeight: "100px",
                alignItems: "center",
                backgroundColor: darkMode ? "primary.dark" : "primary.light",
              }}
            >
              {location !== "/home" && (
                <Tooltip title="Editar" placement="top">
                  <IconButton onClick={onEdit}>
                    <EditOutlinedIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Typography sx={{ ...titleCard }}>{title}</Typography>
              {location !== "/home" && (
                <Tooltip title="Deletar" placement="top">
                  <IconButton onClick={onDelete}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "70%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  width: "auto",
                  color: "#62636C",
                  maxWidth: "150px",
                  textAlign: "center",
                }}
              >
                {description}
              </Typography>
              <Typography
                sx={{
                  m: 1,
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "common.black",
                }}
              >
                {dateTime.toString()}
              </Typography>
            </Box>
          </Box>
        </Card>
      )}
    </Grid>
  );
};
export default CardUniversal;
