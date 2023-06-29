import './init'
import '../App.css'

import {useState} from 'react';
import PropTypes from 'prop-types';

import { Box, styled } from "@mui/material"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'


const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`


const Editor = ({heading, icon, color, value, onChange}) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

  return (
    <Container style={open ?  null : {flexGrow: 0}}>
        <Header>
            <Heading>
                <Box  // ye box span ki tarah work karega
                    component='span' 
                    style={{
                        background: color,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '20px',
                        height: '20px', 
                        borderRadius: 5,
                        color: '#000',
                        marginRight: '5px'
                    }}
                >{icon}</Box>
                {heading}
            </Heading>

            <CloseFullscreenIcon
                fontSize="small"
                style={{ alignSelf: 'center'}}
                onClick={() => setOpen(preState => !preState)}
            />
        </Header>

        <ControlledEditor 
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                lineNumbers: true,
                theme: 'material',
                mode: 'xml',
            }}

        /> 
            
    </Container>
  )
}

Editor.propTypes = {
    heading: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
}

export default Editor