import React, { Component } from 'react';

export class FooterComponent extends Component {

    render() {
        return (
            <div className="row" style={{ backgroundColor: '#F0F0F0', paddingBottom: '2px', textAlign: 'center' }}>
                <div className="col-sm-4">
                    <h4>Design</h4>
                    <p>@Nguyễn Dương</p>
                </div>
                <div className="col-sm-4">
                    <h4>Developer</h4>
                    <p>@Nguyễn Dương</p>
                </div>
                <div className="col-sm-4">
                    <h4>Manager</h4>
                    <p>@Nguyễn Dương</p>
                </div>
            </div>
        );
    }
}
