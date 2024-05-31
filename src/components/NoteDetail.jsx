import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

function NoteDetail({ title, body, createdAt }) {
    return (
        <div>
            <h2 className='detail-pagetitle'>{title}</h2>
            <h3 className='detail-pagecreatedAt'>{showFormattedDate(createdAt)}</h3>
            {body && <div className='detail-pagebody' dangerouslySetInnerHTML={{ __html: body }}></div>}
        </div>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
}

export default NoteDetail;