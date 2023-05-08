$(document).ready(function () {
    /* Home Section - btnContact transition content */
    $('#btnContact').hover(function () {
        $(this).text('Javad.yaali@gmail.com');
    }, function () {
        $(this).text('CONTACT ME');
    });

    /* Data for Zing Chart - chartSkills in Skills Section */
    ZC.LICENSE = ['7b185ca19b4be2cba68fdcd369c663a9'];

    /* Colors */
    var white = '#8D92A1';
    var transparent = 'transparent';
    var lightRed = '#606B83';

    /* Chart Skills */
    var chartSkillsData = {
        type: 'radar',
        globals: {
            fontFamily: 'Raleway',
        },
        backgroundColor: transparent,
        plot: {
            aspect: 'area',
            alphaArea: '.6',
        },
        scaleK: {
            labels: ['Pytorch', 'MLFlow', 'Kedro', 'PostgreSQL', 'DVC', 'HyperOpt'],
            item: {
                fontColor: white,
                rules: [{
                    rule: '%i == 0 || %i == 1 || %i == 3',
                    fontColor: white
                }]
            },
            guide: {
                lineStyle: 'solid',
                lineColor: white,
                backgroundColor: transparent,
            },
            tick: {
                lineColor: white
            }
        },
        scaleV: {
            item: {
                visible: false
            },
            guide: {
                lineStyle: 'solid',
                lineColor: white,
                backgroundColor: transparent
            }
        },
        series: [{
            values: [70, 70, 40, 50, 20, 35],
            backgroundColor: lightRed,
            lineColor: lightRed,
            legendItem: {
                fontColor: lightRed
            }
        }]
    }

    zingchart.render({
        id: 'chartSkills',
        data: chartSkillsData,
        height: '100%',
        width: '100%'
    });



});