import { useState } from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import SideBar from "../components/SideBar.tsx";
import Header from "../components/Header.tsx";
import ExamModal from "../components/Modals/ExamModal.tsx";
import { useTheme } from "../constants/theme/useTheme.ts";
import { SectionContainer } from "../components/SectionContainer.tsx";
import CardUniversal from "../components/CardUniversal.tsx";
import { ContainerUniversal } from "../components/ContainerUniversal.tsx";

const Exam = () => {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <ContainerUniversal>
      <Header />
      <SideBar />
      <SectionContainer>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{
              color: "primary.dark",
            }}
          >
            <Box
              component="h1"
              sx={{
                p: 0,
                mt: 0,
                color: darkMode ? "common.white" : "primary.main",
              }}
            >
              CONSULTAS E EXAMES
            </Box>
          </Typography>
          <Button
            onClick={handleModal}
            sx={{
              backgroundColor: darkMode ? "primary.dark" : "primary.light",
              fontWeight: "bold",
              padding: "14px",
              color: "white",
              fontSize: "14px",
            }}
          >
            + Adicionar Exame ou Consulta
          </Button>
        </Stack>

        <Grid container spacing={3} pb="75px">
          <CardUniversal
          type="events"
            title="CONSULTA"
            description="CONSULTA MÉDICA - HMPA DR. LULINHA"
            dateTime="12/04 ÀS 14H"
          />
          <CardUniversal
          type="events"
            title="CONSULTA"
            description="CONSULTA MÉDICA - HMPA DR. LULINHA"
            dateTime="12/04 ÀS 14H"
          />
          <CardUniversal
          type="events"
            title="CONSULTA"
            description="CONSULTA MÉDICA - HMPA DR. LULINHA"
            dateTime="12/04 ÀS 14H"
          />
        </Grid>
      </SectionContainer>

      {open && <ExamModal open={open} onClose={handleModal} />}
    </ContainerUniversal>
  );
};

export default Exam;
