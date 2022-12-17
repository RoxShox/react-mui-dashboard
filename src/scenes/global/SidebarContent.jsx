import React, { useState, useEffect } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import PeopleOutlined from '@mui/icons-material/PeopleOutlined'
import ContactsOutlined from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlined from '@mui/icons-material/ReceiptOutlined'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlined from '@mui/icons-material/HelpOutlined'
import BarChartOutlined from '@mui/icons-material/BarChartOutlined'
import PieChartOutlineOutlined from '@mui/icons-material/PieChartOutlineOutlined'
import TimelineOutlined from '@mui/icons-material/TimelineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import { useNavigate } from 'react-router-dom'
const Item = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mod)

	return (
		<MenuItem
			active={selected === title}
			style={{ color: `${colors.gray[100]} !important` }}
			onClick={() => setSelected(title)}
			icon={icon}
			routerLink={<Link to={to} />}>
			<Typography>{title}</Typography>
		</MenuItem>
	)
}

const SidebarContent = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)
	const navigate = useNavigate()
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [selected, setSelected] = useState('Dashboard')

	useEffect(() => {
		navigate('')
	}, [])
	return (
		<Box
			sx={{
				'& .ps-sidebar-root ': {
					borderRight: 'none  !important',
				},
				'& .ps-sidebar-container': {
					background: `${colors.primary[400]} !important`,
				},
				'& .pro-icon-wrapper': {
					bacckgroundColor: 'transparent !important',
				},
				'& .pro-inner-item': {
					padding: '5px 35px 5px 20px !important',
				},
				'& .pro-inner-item:hover': {
					color: '#868dfb !important',
				},
				'& .ps-menuitem-root.ps-active': {
					color: '#6870fa !important',
					background: 'transparent',
				},
				'& .ps-menu-button ': {
					background: 'transparent',
				},
				'& .ps-menu-button:hover': {
					background: 'transparent',
					color: '#6870fa !important',
				},
			}}>
			<Sidebar style={{ height: '100vh' }}>
				<Menu iconShape="square">
					{/* Logo & menuIcon */}
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: '10px 0 20px 0',
							color: colors.gray[100],
						}}>
						{!isCollapsed && (
							<Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
								<Typography variant="h3" color={colors.gray[100]}>
									ADMINIS
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>
					{/* USER */}
					{!isCollapsed && (
						<Box mb="25px">
							<Box display="flex" justifyContent="center" alignItems="center">
								<img
									src={`../../assets/user.png`}
									alt="profile-user"
									width="100px"
									height="100px"
									style={{ cursor: 'pointer', borderRadius: '50%' }}
								/>
							</Box>
							<Box textAlign="center">
								<Typography
									variant="h2"
									color={colors.gray[100]}
									fontWeight="bolx"
									sx={{ m: '10px 0 0 0' }}>
									V KOR
								</Typography>
								<Typography variant="h5" color={colors.greenAccent[500]}>
									V Admin
								</Typography>
							</Box>
						</Box>
					)}
					{/* Menu items */}
					<Box paddingLeft={isCollapsed ? undefined : '10%'}>
						<Item
							title="Dashboard"
							to="/"
							icon={<HomeOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography variant="h6" color={colors.gray[300]} sx={{ m: '15px 0 5px 20px' }}>
							Data
						</Typography>
						<Item
							title="Manage Team"
							to="/team"
							icon={<PeopleOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Contacts"
							to="/contacts"
							icon={<ContactsOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Invoices Balances"
							to="/invoices"
							icon={<ReceiptOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>

						<Typography variant="h6" color={colors.gray[300]} sx={{ m: '15px 0 5px 20px' }}>
							Pages
						</Typography>
						<Item
							title="Profile Form"
							to="/form"
							icon={<PersonOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Calendar"
							to="/calendar"
							icon={<CalendarTodayOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="FAQ Page"
							to="/faq"
							icon={<HelpOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Typography variant="h6" color={colors.gray[300]} sx={{ m: '15px 0 5px 20px' }}>
							Charts
						</Typography>
						<Item
							title="Bar Chart"
							to="/bar"
							icon={<BarChartOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Pie Chart"
							to="/pie"
							icon={<PieChartOutlineOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Line Chart"
							to="/line"
							icon={<TimelineOutlined />}
							selected={selected}
							setSelected={setSelected}
						/>
						<Item
							title="Geography"
							to="/geography"
							icon={<MapOutlinedIcon />}
							selected={selected}
							setSelected={setSelected}
						/>
					</Box>
				</Menu>
			</Sidebar>
		</Box>
	)
}

export default SidebarContent
