import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import picbk from "../../assets/images/picbk.jpg";
import React, { useState } from 'react'
import "./Portfolio.css";
import resumeData from '../../utils/resumeData';

const Portfolio = () => {
    const [tabValue, setTabValue] = useState("All");
    const [projectDialog, setprojectDialog] = useState(false)


    return (
        <Grid container spacing={1} className="section pb_45 pt_45">
            {/* Title */}
            <Grid item className="section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs 
                    value={tabValue} 
                    indicatorColor='white' 
                    className='customTabs' 
                    onChange={(event, newValue) => setTabValue(newValue)}>
                    <Tab 
                        label='All' 
                        value='All' 
                        className={
                            tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'
                        } 
                    />

                    {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
                        (tag) => (
                        <Tab 
                            label={tag}
                            value={tag}
                            className={
                                tabValue === tag
                                    ? "customTabs_item active"
                                    : "customTabs_item"
                            }
                        />
                    ))}
                </Tabs>
            </Grid>
            
            {/* Project */}
            <Grid item xs ={12}>
                <Grid container spacing={3}>
                    {resumeData.portfolio.map((projects) => (
                      <>
                      {tabValue == projects.tag || tabValue == 'All' ? (
                        <Grid item xs={12} sm={6} md={4}>
                          <Grow in timeout={1000}>
                              <Card className='customCard' onClick={() => setprojectDialog(projects)}>
                                  <CardActionArea>
                                      <CardMedia className='customCard_image' image={picbk} title={projects.title} />
                                      <CardContent>
                                          <Typography varient={'body2'} className='customCard_title'>{projects.title}</Typography>
                                          <Typography variant='body2' className='customCard_description'>{projects.caption}</Typography>
                                      </CardContent>
                                  </CardActionArea>
                              </Card>
                          </Grow>
                        </Grid>
                      ) : null}
                      </>
                    ))}
                </Grid>
            </Grid>
            <Dialog open={projectDialog} onClose={() => setprojectDialog(false)} className='projectDialog' fullWidth>
                <DialogTitle onClose={() => setprojectDialog(false)}>{projectDialog.title}</DialogTitle>
                <img src={picbk} alt="" className='projectDialog_image' />
                <DialogContent>
                <Typography className='projectDialog_description'>{projectDialog.description}</Typography>  
                </DialogContent>
                <DialogActions className='projectDialog_actions'>
                    {projectDialog?.links?.map((link) => (
                        <a href={link.links} target='_blank' className='projectDialog_icon'>
                        {link.icon}
                        </a>
                    ))}
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Portfolio;
