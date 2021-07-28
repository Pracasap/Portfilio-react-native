import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchProjects = () => dispatch => {

    dispatch(projectsLoading());

    return fetch(baseUrl + 'projects')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)));
};


export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING
});

export const projectsFailed = errMess => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errMess
})

export const addProjects = projects => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});