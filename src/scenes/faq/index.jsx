import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'
import Header from '../../components/Header'
const FAQ = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently Asked Questions Page" />
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						An Importan question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta, dolor omnis alias
						itaque voluptate veritatis incidunt delectus deleniti dolorum, facere possimus vitae qui
						at reprehenderit, repellat asperiores dolore? Sit?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						An Importan question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta, dolor omnis alias
						itaque voluptate veritatis incidunt delectus deleniti dolorum, facere possimus vitae qui
						at reprehenderit, repellat asperiores dolore? Sit?
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						An Importan question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta, dolor omnis alias
						itaque voluptate veritatis incidunt delectus deleniti dolorum, facere possimus vitae qui
						at reprehenderit, repellat asperiores dolore? Sit?
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}

export default FAQ
