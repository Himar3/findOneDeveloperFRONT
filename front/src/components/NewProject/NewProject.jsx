import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Button, InputLabel, OutlinedInput, FormControl, TextField, Chip, MenuItem, Select, Box } from '@mui/material'  
import { useNavigate } from 'react-router'
import { useTheme } from '@mui/material/styles';
import { createProject } from '../../services/project.services'
import { addTechesToProject } from '../../services/project.services'
import getAllTechs from '../../services/tech.services';
import './NewProject.css'

function NewProject() {
  const [ techs, setTechs] = useState([])
  const [techName, setTechName] = React.useState([]);
  
  const getTechs = async() => {
    const teches = await getAllTechs()
    setTechs(teches)
  }
  
  const renderTechs = () => {
    return techs?.map((tech) => {
        return (
          <MenuItem
            key={tech.name}
            value={tech.name}
            style={getStyles(tech.name, techName, theme)}
          >
            {tech.name}
          </MenuItem>
        )
    })
  }
        
  const ITEM_HEIGHT = 70;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 2 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, TechName, theme) {
    return {
      fontWeight:
        TechName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();

  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setTechName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const navigate = useNavigate()
  
  const [members, setMembers ] = useState([])
  
  const handleDelete = (e) => {
    // setMembers(members.filter(members.indexOf(e.parentNode.target),1))
  }
  
  const addMember = () => {
    setMembers(members => [...members, values.team]) 
  }
  
  const renderProvisionalMember = (members) => {
    return members?.map((member, i) => <Chip key= {i} value={member} sx={{ marginRight: '5px', marginBottom: '5px' }} label={member} onDelete={handleDelete}/>)
  }
  
  const [values, setValues] = React.useState({
    title: '',
    type:'',
    link: '',
    image: '',
    description: '',
    team: ''
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  
  const newProject = async () => {
    const project = {
      title: values.title,
      type: values.type,
      link: values.link,
      image: values.image,
      description: values.description,
      team: members
    }
    const response = await createProject(project)
      const knowledge = {
        techs: techName,
        projectId: response.id
      }
      const res = await addTechesToProject(knowledge)
      navigate(`/projects/${response.id}`) 
    
  }
    
  useEffect(() => renderProvisionalMember()) 
  useEffect(() => { getTechs() }, []) 
  return (
    <Card className="profileBox" sx={{ maxWidth: 1500, minHeight: 500 }}>   
      <CardContent id="profile-content">
        <div className='mid-top mid-top-margin-plus'>
          <div className='profile-name-email'>
          <div className="profile-title">
          <Typography variant="h3" >PROJECT</Typography>
          </div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Title</Typography>  
            <div className="profile-data">     
            <FormControl className='input-newProject' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel>Title</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type={values.title}
              value={values.title}
              onChange={handleChange('title')}
              label="Title"
            />
          </FormControl>
          </div>
          <br></br>
            <Typography className='profile-subtitles mid-top-margin' variant="h6" color="text.secondary">Type</Typography>
            <div className="profile-data">
            <FormControl className='input-newProject' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel>Type</InputLabel>
            <OutlinedInput 
              sx={{ width: '100%' }}
              id="outlined-adornment-name"
              type={values.type}
              value={values.type}
              onChange={handleChange('type')}
              label="Type"
            />
          </FormControl>
            </div>
          </div>
          <div className='btn-profile-container top-margin-plus'>
          <Typography className='profile-subtitles' variant="h6" color="text.secondary">Team</Typography>
          <Button onClick={() => addMember()} className='profile-btn' variant="contained" sx={{borderRadius: '5px'}}>Add Member</Button>
            <div className="profile-data">
            <FormControl className='input-newProject' sx={{ m: 1, width: '25ch' }} variant="outlined">            
          <InputLabel>Team</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              type="Team"
              value={values.team}
              onChange={handleChange('team')}
              label="Team"
            />
          </FormControl>
            {renderProvisionalMember(members)}
            </div>   
          <Typography className='profile-subtitles' variant="h6" color="text.secondary">Picture</Typography>
              <div className="profile-data-description">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="Copy your picture link here:    ---'https://www.mypic/pic.com'---"
                multiline
                maxRows={1}
                value={values.image}
                onChange={handleChange('image')}
              />
              </div>
          </div>
            <div id='img-box'>
            <CardMedia
              className='project-img'
              component="img"
              src={require("../../assets/GitHub-Mark.png")}
              alt="Image Dev"
            />
          </div>
        </div>
        <div className='mid-bottom'>  
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Technologies</Typography>
            <div className='profile-data-description mid-top-margin'>
            <FormControl sx={{ m: 1, width: '100%' }}>
            <InputLabel id="demo-multiple-chip-label">Technologies</InputLabel>
              <Select
                  sx={{ maxWidth: "100%"}}
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={techName}
                  onChange={handleChangeSelect}
                  input={<OutlinedInput id="select-multiple-chip" label="technologies" />}
                  renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                  )}
                MenuProps={MenuProps}
              >
                {renderTechs(techs)}
              </Select>
            </FormControl>
          </div>
          </div>     
        <Typography className='profile-subtitles' variant="h6" color="text.secondary">Link</Typography>
        <div className="profile-data-description mid-top-margin">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="Link"
                multiline
                maxRows={1}
                value={values.link}
                onChange={handleChange('link')}
              />
            </div>
          <div>
            <Typography className='profile-subtitles' variant="h6" color="text.secondary">Description</Typography>
            <div className="profile-data-description mid-top-margin">
              <TextField sx={{width: '100%'}}
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                value={values.description}
                onChange={handleChange('description')}
              />
            </div>
          </div> 
          <div className='group-edit-btn'>
            <Button onClick={() => newProject()} className='profile-btn' variant="contained" sx={{ alignSelf:'center', marginTop:'30px', borderRadius: '5px'}}>Create Project</Button>
            <Button 
              onClick={()=> navigate('/developer/profile')}
              className='profile-btn' 
              variant="contained" 
              sx={{ alignSelf:'center', marginTop:'40px', borderRadius: '5px'}}>
                Cancel
            </Button>
          </div>
        </div>
        
      </CardContent>
    </Card>
  )
}

export default NewProject