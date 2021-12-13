window.onload = function() { 
    // Colour variables
    var colorWhite = "#FFFFFF"
    var colorGrey = "#939393";
    var colorOrange = "#ED730D";
    var colorLighGrey = "#E2E2E2";
    var colorDarkGrey = "#555555";
    var colorBlue = "#128CF2";
    var colorYellow = "#FABD14";
    var colorRed = "#E30817"
    // Font variable
    var fontMontSerrat = "Montserrat, sans-serif";
    fontCoHeadline = "";

    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
      container: 'cloudm-canvas',
      width: width,
      height: height,
    });
    var layer = new Konva.Layer();
    stage.add(layer);

    // Inner circle section.
    var innerCircle = new Konva.Circle({
      x: 1800,
      y: stage.height() / 2,
      radius: 180,
      fill: colorLighGrey,
    });

    var innerCircleText = new Konva.Text({
        x: 1705,
        y: (stage.height() / 2) + 75,
        text: 'Avoid vendor lock in',
        fontSize: 24,
        fontFamily: 'Calibri', // change to variable
        fill: colorOrange,
    });

    var innerCircleGoogleLogo = new Image();
    innerCircleGoogleLogo.onload = function () {
      var innerCircleGoogleLogoImage = new Konva.Image({
        x: 1635,
        y: (stage.height() / 2) - 45,
        image: innerCircleGoogleLogo,
        width: 90,
        height: 90,
      });
      layer.add(innerCircleGoogleLogoImage);
      innerCircleGoogleLogoImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      innerCircleGoogleLogoImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    innerCircleGoogleLogo.src = '../assets/google-logo.svg';

    var innerCircleMicrosoft365Logo = new Image();
    innerCircleMicrosoft365Logo.onload = function () {
      var innerCircleMicrosoft365LogoImage = new Konva.Image({
        x: 1875,
        y: (stage.height() / 2) - 45,
        image: innerCircleMicrosoft365Logo,
        width: 90,
        height: 90,
      });
      layer.add(innerCircleMicrosoft365LogoImage);
      innerCircleMicrosoft365LogoImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      innerCircleMicrosoft365LogoImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    }
    innerCircleMicrosoft365Logo.src = "../assets/microsoft365-logo.svg";

    var innerCircleTwoWayArrow = new Image();
    innerCircleTwoWayArrow.onload = function () {
      var innerCircleTwoWayArrowImage = new Konva.Image({
        x: 1760,
        y: (stage.height() / 2) - 22.5,
        image: innerCircleTwoWayArrow,
        width: 75,
        height: 45,
      });
      layer.add(innerCircleTwoWayArrowImage);
    }
    innerCircleTwoWayArrow.src = "../assets/two-way-dotted-arrow.svg";


    // Outer circle section.
    var outerCircle = new Konva.Circle({
      x: 1800,
      y: stage.height() / 2,
      radius: 350,
      fill: 'transparent',
      stroke: colorGrey,
      strokeWidth: 15
    });

    var outerCircleMoversBackground = new Konva.Circle({
      x: 1385 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var outerCircleMovers = new Image();
    outerCircleMovers.onload = function () {
      var outerCircleMoversImage = new Konva.Image({
        x: 1385,
        y: (stage.height() / 2) - 70,
        image: outerCircleMovers,
        width: 140,
        height: 140,
      });
      layer.add(outerCircleMoversImage);
      outerCircleMoversImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      outerCircleMoversImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    outerCircleMovers.src = '../assets/movers-circle.svg';

    var outerCircleMoversTitle = new Konva.Text({
      x: 1200,
      y: (stage.height() / 2) - 19,
      text: 'Movers',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorOrange
    });

    var outerCircleJoinersBackground = new Konva.Circle({
      x: 1720 + 70,
      y: 250 + 70,
      radius: 69,
      fill: colorWhite,
    });

    var outerCircleJoiners = new Image();
    outerCircleJoiners.onload = function () {
      var outerCircleJoinersImage = new Konva.Image({
        x: 1720,
        y: 250,
        image: outerCircleJoiners,
        width: 140,
        height: 140,
      });
      layer.add(outerCircleJoinersImage);
      outerCircleJoinersImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      outerCircleJoinersImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
      outerCircleJoinersImage.on('click', function () {
        outerCircleJoinersLink1.show();
        outerCircleJoinersLink2.show();
        outerCircleJoinersLink3.show();
        layer.transform({
          point: (1720, 250)
        });
        layer.scale({
          x: 3,
          y: 3,
        })
      });
    };

    outerCircleJoiners.src = '../assets/joiners-circle.svg';

    var outerCircleJoinersTitle = new Konva.Text({
      x: 1720,
      y: 200,
      text: 'Joiners',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorOrange
    });

    var outerCircleJoinersLink1 = new Konva.Text({
      x: 1640,
      y: 165,
      text: 'SaaS License Management',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var outerCircleJoinersLink2 = new Konva.Text({
      x: 1690,
      y: 130,
      text: 'Email Signatures',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var outerCircleJoinersLink3 = new Konva.Text({
      x: 1670,
      y: 95,
      text: 'Files/Folder/Calendar',
      fontSize: 22,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey,
      visible: false
    });

    var outerCircleAutomateBackground = new Konva.Circle({
      x: 2075 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var outerCircleAutomate = new Image();
    outerCircleAutomate.onload = function () {
      var outerCircleAutomateImage = new Konva.Image({
        x: 2075,
        y: (stage.height() / 2) - 70,
        image: outerCircleAutomate,
        width: 140,
        height: 140,
      });
      layer.add(outerCircleAutomateImage);
      outerCircleAutomateImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      outerCircleAutomateImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    outerCircleAutomate.src = '../assets/automate-circle.svg';

    var outerCircleAutomateTitle = new Konva.Text({
      x: 2250,
      y: (stage.height() / 2) - 19,
      text: 'Automate',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorOrange
    });


    // Migrate / Starters branch section.
    var topBranch = new Image();
    topBranch.onload = function () {
      var topBranchImage = new Konva.Image({
        x: 720,
        y: 150,
        image: topBranch,
        width: 1000,
        height: 350,
      });
      layer.add(topBranchImage);
      
    };
    topBranch.src = '../assets/dotted-branch-left.svg';

    var topBranchMigrateText = new Konva.Text({
      x: 413,
      y: 135,
      text: 'Migrate',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorBlue
    });

    var topBranchMigrateBackground = new Konva.Circle({
      x: 100 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var topBranchMigrateCircle = new Image();
    topBranchMigrateCircle.onload = function () {
      var topBranchMigrateCircleImage = new Konva.Image({
        x: 600,
        y: 84,
        image: topBranchMigrateCircle,
        width: 140,
        height: 140,
      });
      layer.add(topBranchMigrateCircleImage);
    };
    topBranchMigrateCircle.src = '../assets/migrate-circle.svg';

    var topBranchStartersText = new Konva.Text({
      x: 413,
      y: 472,
      text: 'Starters',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorYellow
    });

    var topBranchStartersBackground = new Konva.Circle({
      x: 100 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var topBranchStartersCircle = new Image();
    topBranchStartersCircle.onload = function () {
      var topBranchStartersCircleImage = new Konva.Image({
        x: 600,
        y: 420,
        image: topBranchStartersCircle,
        width: 140,
        height: 140,
      });
      layer.add(topBranchStartersCircleImage);
    };
    topBranchStartersCircle.src = '../assets/starters-circle.svg';

    // Leavers / Archive branch section.
    var bottomBranch = new Image();
    bottomBranch.onload = function () {
      var bottomBranchImage = new Konva.Image({
        x: 720,
        y: 830,
        image: bottomBranch,
        width: 1000,
        height: 350,
      });
      layer.add(bottomBranchImage);
    };
    bottomBranch.src = '../assets/dotted-branch-left.svg';

    var bottomBranchLeaversText = new Konva.Text({
      x: 413,
      y: 815,
      text: 'Leavers',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorRed
    });

    var bottomBranchLeaversBackground = new Konva.Circle({
      x: 100 + 70,
      y: 800,
      radius: 69,
      fill: colorWhite,
    });

    var bottomBranchLeaversCircle = new Image();
    bottomBranchLeaversCircle.onload = function () {
      var bottomBranchLeaversCircleImage = new Konva.Image({
        x: 600,
        y: 765,
        image: bottomBranchLeaversCircle,
        width: 140,
        height: 140,
      });
      layer.add(bottomBranchLeaversCircleImage);
      bottomBranchLeaversCircleImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      bottomBranchLeaversCircleImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    bottomBranchLeaversCircle.src = '../assets/leavers-circle.svg';

    var bottomBranchArchiveText = new Konva.Text({
      x: 413,
      y: 1150,
      text: 'Archive',
      fontSize: 40,
      // fontStyle: 'bold',
      fontFamily: fontMontSerrat,
      fill: colorDarkGrey
    });

    var bottomBranchArchiveBackground = new Konva.Circle({
      x: 100 + 70,
      y: stage.height() / 2,
      radius: 69,
      fill: colorWhite,
    });

    var bottomBranchArchiveCircle = new Image();
    bottomBranchArchiveCircle.onload = function () {
      var bottomBranchArchiveCircleImage = new Konva.Image({
        x: 600,
        y: 1100,
        image: bottomBranchArchiveCircle,
        width: 140,
        height: 140,
      });
      layer.add(bottomBranchArchiveCircleImage);
      bottomBranchArchiveCircleImage.on('mouseenter', function () {
        stage.container().style.cursor = 'pointer';
      });
      bottomBranchArchiveCircleImage.on('mouseleave', function () {
        stage.container().style.cursor = 'default';
      });
    };
    bottomBranchArchiveCircle.src = '../assets/archive-circle.svg';

    // Events
    // Outer circle
    outerCircleMoversTitle.on('mouseenter', function () {
      stage.container().style.cursor = 'pointer';
    });
    outerCircleMoversTitle.on('mouseleave', function () {
      stage.container().style.cursor = 'default';
    });
    outerCircleJoinersTitle.on('mouseenter', function () {
      stage.container().style.cursor = 'pointer';
    });
    outerCircleJoinersTitle.on('mouseleave', function () {
      stage.container().style.cursor = 'default';
    });
    outerCircleAutomateTitle.on('mouseenter', function () {
      stage.container().style.cursor = 'pointer';
    });
    outerCircleAutomateTitle.on('mouseleave', function () {
      stage.container().style.cursor = 'default';
    });

    outerCircleJoinersTitle.on('click', function () {
      outerCircleJoinersLink1.show();
      outerCircleJoinersLink2.show();
      outerCircleJoinersLink3.show();
    });


    // Migrate / Starters branch
    topBranchMigrateText.on('mouseover', function () {
      stage.container().style.cursor = 'pointer';
    });
    topBranchMigrateText.on('mouseleave', function () {
      stage.container().style.cursor = 'default';
    });
    topBranchStartersText.on('mouseover', function () {
      stage.container().style.cursor = 'pointer';
    });
    topBranchStartersText.on('mouseleave', function () {
      stage.container().style.cursor = 'default';
    });

    // Leavers / Archive branch
    bottomBranchLeaversText.on('mouseover', function () {
      stage.container().style.cursor = 'pointer';
    });
    bottomBranchLeaversText.on('mouseleave', function () {
      stage.container().style.cursor = 'default';
    });
    bottomBranchArchiveText.on('mouseover', function () {
      stage.container().style.cursor = 'pointer';
    });
    bottomBranchArchiveText.on('mouseleave', function () {
      stage.container().style.cursor = 'default';
    });

    var period = 2000;
    
    // Create our animations
    // var joinersZoomInAnimation = Konva.Animation(function (frame) {
    //   var scale = Math.sin((frame.time * 2 * Math.PI) / period) + 0.001;
    //   layer.scale({x: scale, y:scale})
    // }, layer);

    // add the shapes to the layer
    layer.add(innerCircle);
    layer.add(innerCircleText);
    layer.add(outerCircle);
    layer.add(outerCircleMoversBackground);
    layer.add(outerCircleJoinersBackground);
    layer.add(outerCircleAutomateBackground);
    layer.add(outerCircleMoversTitle);
    layer.add(outerCircleJoinersTitle);
    layer.add(outerCircleAutomateTitle);
    layer.add(topBranchMigrateBackground);
    layer.add(topBranchMigrateText);
    layer.add(topBranchStartersBackground);
    layer.add(topBranchStartersText);
    layer.add(bottomBranchLeaversText);
    layer.add(bottomBranchLeaversBackground);
    layer.add(bottomBranchArchiveText);
    layer.add(bottomBranchArchiveBackground);
    layer.add(outerCircleJoinersLink1);
    layer.add(outerCircleJoinersLink2);
    layer.add(outerCircleJoinersLink3);
}