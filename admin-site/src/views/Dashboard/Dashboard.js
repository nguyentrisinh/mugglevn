import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import UserTable from './Components/Usertable'
import SocialBlock from './Components/social_block'

const brandPrimary =  '#20a8d8';
// const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';
// const brandDanger =   '#f86c6b';

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ],
};

const cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }],
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
};

var dataCompany = {
    company:[
        {
            avatar: "img/avatars/1.jpg",
            name: "Yiorgos Avraamu",
            type_member: "New",
            register_day: "Registered: Jan 1, 2015",
            nation_icon: "img/flags/USA.png",
            post_percentage: "50",
            post_count: "15",
            total_post: "30",
            last_post: "10 sec ago"
        },
        {
            avatar: "img/avatars/1.jpg",
            name: "Yiorgos Avraamu",
            type_member: "New",
            register_day: "Registered: Jan 1, 2015",
            nation_icon: "img/flags/USA.png",
            post_percentage: "50",
            post_count: "15",
            total_post: "30",
            last_post: "10 sec ago"
        },
        {
            avatar: "img/avatars/1.jpg",
            name: "Yiorgos Avraamu",
            type_member: "New",
            register_day: "Registered: Jan 1, 2015",
            nation_icon: "img/flags/USA.png",
            post_percentage: "50",
            post_count: "15",
            total_post: "30",
            last_post: "10 sec ago"
        },
        {
            avatar: "img/avatars/1.jpg",
            name: "Yiorgos Avraamu",
            type_member: "New",
            register_day: "Registered: Jan 1, 2015",
            nation_icon: "img/flags/USA.png",
            post_percentage: "50",
            post_count: "15",
            total_post: "30",
            last_post: "10 sec ago"
        }
    ]
};




class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">Users

        {/*Statistic Block*/}
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-primary">
              <div className="card-block pb-0">
                {/*<div className="btn-group float-right">*/}
                  {/*<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>*/}
                    {/*<button onClick={this.toggle} className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>*/}
                      {/*<i className="icon-settings"></i>*/}
                    {/*</button>*/}

                    {/*<DropdownMenu>*/}

                      {/*<DropdownItem>Action</DropdownItem>*/}
                      {/*<DropdownItem>Another action</DropdownItem>*/}
                      {/*<DropdownItem>Something else here</DropdownItem>*/}

                    {/*</DropdownMenu>*/}
                  {/*</Dropdown>*/}
                {/*</div>*/}
                <h4 className="mb-0">9.823</h4>
                <p>New register user</p>
              </div>
              <div className="chart-wrapper px-3">
                <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
              </div>
            </div>
          </div>



          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-info">
              <div className="card-block pb-0">
                {/*<button type="button" className="btn btn-transparent active p-0 float-right">*/}
                  {/*<i className="icon-location-pin"></i>*/}
                {/*</button>*/}
                <h4 className="mb-0">9.823</h4>
                <p>Members online</p>
              </div>
              <div className="chart-wrapper px-3">
                <Line data={cardChartData2} options={cardChartOpts2} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-warning">
              <div className="card-block pb-0">
                {/*<div className="btn-group float-right">*/}
                  {/*<button type="button" className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                    {/*<i className="icon-settings"></i>*/}
                  {/*</button>*/}
                  {/*<div className="dropdown-menu dropdown-menu-right">*/}
                    {/*<a className="dropdown-item" href="#">Action</a>*/}
                    {/*<a className="dropdown-item" href="#">Another action</a>*/}
                    {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                  {/*</div>*/}
                {/*</div>*/}
                <h4 className="mb-0">9.823</h4>
                <p>Company Register</p>
              </div>
              <div className="chart-wrapper">
                <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                {/*<div className="btn-group float-right">*/}
                  {/*<button type="button" className="btn btn-transparent active dropdown-toggle p-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                    {/*<i className="icon-settings"></i>*/}
                  {/*</button>*/}
                  {/*<div className="dropdown-menu dropdown-menu-right">*/}
                    {/*<a className="dropdown-item" href="#">Action</a>*/}
                    {/*<a className="dropdown-item" href="#">Another action</a>*/}
                    {/*<a className="dropdown-item" href="#">Something else here</a>*/}
                  {/*</div>*/}
                {/*</div>*/}
                <h4 className="mb-0">9.823</h4>
                <p>Total Jobs</p>
              </div>
              <div className="chart-wrapper px-3">
                <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
              </div>
            </div>
          </div>
        </div>

        <SocialBlock/>

        {/*<UserTable data={dataCompany}> </UserTable>*/}


      </div>
    )
  }
}

export default Dashboard;
