import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  choseSidebarCollapse,
  choseSidebarLink,
  openSummaryCollapse,
  openPublishCollapse,
  openEngageCollapse,
  openListenCollapse,
  openReportCollapse,
} from '../../../features/sidebar/sidebarSlice'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { MdNotificationsActive } from 'react-icons/md'
import { AiOutlineLineChart } from 'react-icons/ai'
import { BsPencilSquare, BsDot } from 'react-icons/bs'
import { IoIosChatbubbles } from 'react-icons/io'
import { TbWaveSine } from 'react-icons/tb'
import { RiBarChartFill } from 'react-icons/ri'

function Brand3Sidebar() {
  const sidebarCollapse = useSelector((state) => state.sidebar.sidebarCollapse)
  const sidebarLink = useSelector((state) => state.sidebar.sidebarLink)

  const openSummary = useSelector((state) => state.sidebar.openSummary)
  const openPublish = useSelector((state) => state.sidebar.openPublish)
  const openEngage = useSelector((state) => state.sidebar.openEngage)
  const openListen = useSelector((state) => state.sidebar.openListen)
  const openReport = useSelector((state) => state.sidebar.openReport)

  const dispatch = useDispatch()

  return (
    <div className='flex flex-col'>
      <Link to='/twitter/notification'>
        <ListItemButton
          onClick={() => dispatch(choseSidebarCollapse('notification'))}
          style={sidebarCollapse === 'notification' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        >
          <ListItemIcon>
            <MdNotificationsActive
              style={sidebarCollapse === 'notification' ? { color: 'white' } : ''}
              className='text-red'
            />
          </ListItemIcon>
          <ListItemText primary='NOTIFICATIONS' />
          <ListItemText className='ml-1 px-2 border rounded-md  border-green' primary='29' />
        </ListItemButton>
      </Link>

      <ListItemButton
        style={sidebarCollapse === 'summary' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          dispatch(openSummaryCollapse(!openSummary))
          dispatch(choseSidebarCollapse('summary'))
        }}
      >
        <ListItemIcon>
          <AiOutlineLineChart style={sidebarCollapse === 'summary' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='SUMMARY' />
        {openSummary ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Link to='/brand3/summary'>
        <Collapse in={openSummary} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              onClick={() => {
                dispatch(choseSidebarLink('test'))
                dispatch(choseSidebarCollapse('summary'))
              }}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <BsDot style={sidebarLink === 'test' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                style={sidebarLink === 'test' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }}
                primary='Test'
              />
            </ListItemButton>
          </List>
        </Collapse>
      </Link>

      <ListItemButton
        style={sidebarCollapse === 'publish' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={(prev) => {
          dispatch(openPublishCollapse(!openPublish))
          dispatch(choseSidebarCollapse('publish'))
        }}
      >
        <ListItemIcon>
          <BsPencilSquare style={sidebarCollapse === 'publish' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='PUBLISH' />
        {openPublish ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPublish} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <Link to='/brand3/compose'>
            <ListItemButton
              onClick={() => {
                dispatch(choseSidebarCollapse('publish'))
                dispatch(choseSidebarLink('compose'))
              }}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <BsDot style={sidebarLink === 'compose' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                style={sidebarLink === 'compose' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }}
                primary='Compose'
              />
            </ListItemButton>
          </Link>
          <Link to='/brand3/feed'>
            <ListItemButton
              onClick={() => {
                dispatch(choseSidebarCollapse('publish'))
                dispatch(choseSidebarLink('feed'))
              }}
              sx={{ pl: 4 }}
            >
              <ListItemIcon>
                <BsDot style={sidebarLink === 'feed' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }} />
              </ListItemIcon>
              <ListItemText
                style={sidebarLink === 'feed' ? { color: 'rgb(245, 68, 97)' } : { color: 'white' }}
                primary='Feed'
              />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>

      <ListItemButton
        style={sidebarCollapse === 'engage' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          dispatch(openEngageCollapse(!openEngage))
          dispatch(choseSidebarCollapse('engage'))
        }}
      >
        <ListItemIcon>
          <IoIosChatbubbles style={sidebarCollapse === 'engage' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='ENGAGE' />
        {openEngage ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton
        style={sidebarCollapse === 'listen' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          dispatch(openListenCollapse(!openListen))
          dispatch(choseSidebarCollapse('listen'))
        }}
      >
        <ListItemIcon>
          <TbWaveSine style={sidebarCollapse === 'listen' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='LISTEN' />
        {openListen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <ListItemButton
        style={sidebarCollapse === 'report' ? { backgroundColor: 'rgb(245, 68, 97)' } : { color: 'white' }}
        onClick={() => {
          dispatch(openReportCollapse(!openReport))
          dispatch(choseSidebarCollapse('report'))
        }}
      >
        <ListItemIcon>
          <RiBarChartFill style={sidebarCollapse === 'report' ? { color: 'white' } : ''} className='text-red' />
        </ListItemIcon>
        <ListItemText primary='REPORT' />
        {openReport ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
    </div>
  )
}

export default Brand3Sidebar
