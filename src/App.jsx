import React from "react";
import Navbar from "./components/Navbar";
import MyComponent from "./components/MyComponent";
import Picture from "./components/Picture";
import Global from "./components/Global";
import Studio from "./components/Studio";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import TabsSection from "./components/TabsSection";
import HomePageWithRectangle from "./components/HomePageWithRectangle";
import TopBar from "./components/TopBar";
const App = () => {
  const data = [
    {
      name: "Windows 11",
      des: "Modernize VCL apps for Windows 11 with up-to-date user interface controls, WinRT APIs, and HighDPI-related features",
      image: "./image/microsoft.png",
    },
    {
      name: "User Experience",
      des: "Completely rebuilt Welcome Page with a native look and feel, and a UI that fits the IDE, and customizable layout and content.",
      image: "./image/user.png",
    },
    {
      name: "Android",
      des: "Support for the latest Android Level 32 API and latest Billing APIs, and migration to use the AndroidX libraries. Android support for multiple classes.",
      image: "./image/android.png",
    },
    {
      name: "Single Code Base",
      des: "Create apps for all major platforms with less coding effort. Write once, compile everywhere..",
      image: "./image/window.png",
    },
    {
      name: "Productivity",
      des: "VCL Styles with design-time support: Prototype stylish UIs even faster by seeing immediately at design-time how your styled forms and controls will look when running..",
      image: "./image/productivity.png",
    },
    {
      name: "Linux",
      des: "Develop both server and FireMonkey GUI applications for Linux. Delphi now has LLDB version 12 support for debugging on Linux, also adopted for iOS Simulator.",
      image: "./image/linux.png",
    },
    {
      name: "Single Code Base",
      des: "Create apps for all major platforms with less coding effort. Write once, compile everywhere..",
      image: "./image/window.png",
    },
    {
      name: "Productivity",
      des: "VCL Styles with design-time support: Prototype stylish UIs even faster by seeing immediately at design-time how your styled forms and controls will look when running..",
      image: "./image/productivity.png",
    },
    {
      name: "Linux",
      des: "Develop both server and FireMonkey GUI applications for Linux. Delphi now has LLDB version 12 support for debugging on Linux, also adopted for iOS Simulator.",
      image: "./image/linux.png",
    },
    {
      name: "Windows 11",
      des: "Modernize VCL apps for Windows 11 with up-to-date user interface controls, WinRT APIs, and HighDPI-related features",
      image: "./image/microsoft.png",
    },
    {
      name: "User Experience",
      des: "Completely rebuilt Welcome Page with a native look and feel, and a UI that fits the IDE, and customizable layout and content.",
      image: "./image/user.png",
    },
    {
      name: "Android",
      des: "Support for the latest Android Level 32 API and latest Billing APIs, and migration to use the AndroidX libraries. Android support for multiple classes.",
      image: "./image/android.png",
    },
    ,
    {
      name: "User Experience",
      des: "Completely rebuilt Welcome Page with a native look and feel, and a UI that fits the IDE, and customizable layout and content.",
      image: "./image/user.png",
    },
    {
      name: "Cloud Sync",
      des: "Seamlessly sync your data across all devices with real-time updates.",
      image: "https://img.icons8.com/ios-filled/48/cloud.png",
    },
    {
      name: "Dark Mode",
      des: "Switch to dark mode for better eye comfort during night usage.",
      image: "https://img.icons8.com/ios-filled/48/moon-symbol.png",
    },
    {
      name: "Analytics",
      des: "Get insights into app usage and performance through advanced analytics.",
      image: "https://img.icons8.com/ios-filled/48/combo-chart.png",
    },
    {
      name: "Notifications",
      des: "Receive timely notifications to stay up-to-date with app activities.",
      image: "https://img.icons8.com/ios-filled/48/appointment-reminders.png",
    },
    {
      name: "Multi-Language",
      des: "Use the app in multiple languages to reach a wider audience.",
      image: "https://img.icons8.com/ios-filled/48/language.png",
    },
    
    {
      name: "Security",
      des: "Advanced security features protect your data with encryption.",
      image: "https://img.icons8.com/ios-filled/48/lock.png",
    },
    {
      name: "Collaboration",
      des: "Work together with your team in real-time efficiently.",
      image: "https://img.icons8.com/ios-filled/48/conference-call.png",
    },
    {
      name: "Customization",
      des: "Tailor the app experience to your personal preferences.",
      image: "https://img.icons8.com/ios-filled/48/settings.png",
    },
    {
      name: "AI Assistance",
      des: "Get smart suggestions and assistance powered by AI.",
      image: "https://img.icons8.com/ios-filled/48/artificial-intelligence.png",
    },
    {
      name: "File Sharing",
      des: "Easily share files and documents with colleagues or friends.",
      image: "https://img.icons8.com/ios-filled/48/share.png",
    },
    
    {
      name: "Calendar Integration",
      des: "Sync with your calendar to manage tasks and events.",
      image: "https://img.icons8.com/ios-filled/48/calendar.png",
    },
    {
      name: "Multi-Language",
      des: "Use the app in multiple languages to reach a wider audience.",
      image: "https://img.icons8.com/ios-filled/48/language.png",
    },
    {
      name: "Tasks Management",
      des: "Organize and prioritize your tasks efficiently.",
      image: "https://img.icons8.com/ios-filled/48/checklist.png",
    },
    {
      name: "Real-time Chat",
      des: "Instant messaging feature for seamless communication.",
      image: "https://img.icons8.com/ios-filled/48/chat.png",
    },
    {
      name: "Data Export",
      des: "Export your reports and data in multiple formats.",
      image: "https://img.icons8.com/ios-filled/48/export.png",
    },
    {
      name: "Custom Alerts",
      des: "Set personalized alerts and reminders for important events.",
      image: "https://img.icons8.com/ios-filled/48/alarm.png",
    },
    {
      name: "Integration API",
      des: "Connect with third-party apps using our robust API.",
      image: "https://img.icons8.com/ios-filled/48/api.png",
    },
    {
      name: "Performance Metrics",
      des: "Track app performance and optimize your workflow.",
      image: "https://img.icons8.com/ios-filled/48/speed.png",
    },
    {
      name: "Geolocation",
      des: "Use location-based features for enhanced functionality.",
      image: "https://img.icons8.com/ios-filled/48/marker.png",
    },
    {
      name: "Support",
      des: "24/7 customer support to resolve all your queries quickly.",
      image: "https://img.icons8.com/ios-filled/48/customer-support.png",
    },
    {
      name: "Cloud Sync",
      des: "Seamlessly sync your data across all devices with real-time updates.",
      image: "https://img.icons8.com/ios-filled/48/cloud.png",
    },
    {
      name: "Dark Mode",
      des: "Switch to dark mode for better eye comfort during night usage.",
      image: "https://img.icons8.com/ios-filled/48/moon-symbol.png",
    },
    {
      name: "Analytics",
      des: "Get insights into app usage and performance through advanced analytics.",
      image: "https://img.icons8.com/ios-filled/48/combo-chart.png",
    },
    {
      name: "Notifications",
      des: "Receive timely notifications to stay up-to-date with app activities.",
      image: "https://img.icons8.com/ios-filled/48/appointment-reminders.png",
    },
    {
      name: "Multi-Language",
      des: "Use the app in multiple languages to reach a wider audience.",
      image: "https://img.icons8.com/ios-filled/48/language.png",
    },
    {
      name: "Security",
      des: "Advanced security features protect your data with encryption.",
      image: "https://img.icons8.com/ios-filled/48/lock.png",
    },
    {
      name: "Collaboration",
      des: "Work together with your team in real-time efficiently.",
      image: "https://img.icons8.com/ios-filled/48/conference-call.png",
    },
    {
      name: "Customization",
      des: "Tailor the app experience to your personal preferences.",
      image: "https://img.icons8.com/ios-filled/48/settings.png",
    },
    {
      name: "AI Assistance",
      des: "Get smart suggestions and assistance powered by AI.",
      image: "https://img.icons8.com/ios-filled/48/artificial-intelligence.png",
    },
    {
      name: "File Sharing",
      des: "Easily share files and documents with colleagues or friends.",
      image: "https://img.icons8.com/ios-filled/48/share.png",
    },
    
    {
      name: "Calendar Integration",
      des: "Sync with your calendar to manage tasks and events.",
      image: "https://img.icons8.com/ios-filled/48/calendar.png",
    },
    {
      name: "Tasks Management",
      des: "Organize and prioritize your tasks efficiently.",
      image: "https://img.icons8.com/ios-filled/48/checklist.png",
    },
    {
      name: "Real-time Chat",
      des: "Instant messaging feature for seamless communication.",
      image: "https://img.icons8.com/ios-filled/48/chat.png",
    },
    {
      name: "Data Export",
      des: "Export your reports and data in multiple formats.",
      image: "https://img.icons8.com/ios-filled/48/export.png",
    },
    {
      name: "Custom Alerts",
      des: "Set personalized alerts and reminders for important events.",
      image: "https://img.icons8.com/ios-filled/48/alarm.png",
    },
    {
      name: "Integration API",
      des: "Connect with third-party apps using our robust API.",
      image: "https://img.icons8.com/ios-filled/48/api.png",
    },
    {
      name: "Performance Metrics",
      des: "Track app performance and optimize your workflow.",
      image: "https://img.icons8.com/ios-filled/48/speed.png",
    },

    {
      name: "Geolocation",
      des: "Use location-based features for enhanced functionality.",
      image: "https://img.icons8.com/ios-filled/48/marker.png",
    },
    {
      name: "Support",
      des: "24/7 customer support to resolve all your queries quickly.",
      image: "https://img.icons8.com/ios-filled/48/customer-support.png",
    },
  ];
  const BlogData = [
    {
      heading: "Learning & Development",
      Title: "3 Main C++ Compiler Tips to Develop Successful Apps",
      end: "Read More ",
    },
    {
      heading: "Learning & Development",
      Title: "Top 5 Platforms for Windows Application Development In 2022",
      end: "Read More ",
    },
    {
      heading: "Learning & Development",
      Title: "Everything You Need to Know About Cross-Platform Development",
      end: "Read More ",
    },
    {
      heading: "Learning & Development",
      Title: "A Complete Guide To Programming In C++ – Visual Programming",
      end: "Read More ",
    },
    {
      heading: "Learning & Development",
      Title:
        "A Complete Guide To Programming In C++ – Object Oriented Programming",
      end: "Read More ",
    },
    {
      heading: "Learning & Development",
      Title: "How C++ Works With Libraries and More",
      end: "Read More ",
    },
  ];
  const tabsData = {
    Design: [
      {
        image: "./image/real.png",
        heading: "Design beautiful desktop and mobile app UIs with RAD Studio.",
        bullets: [
          "Use Delphi's award-winning VCL framework for Windows and the FireMonkey (FMX) visual framework for cross-platform responsive UIs.",
          "Enjoy the new high-DPI compatible IDE on 4k+ screens",
          "VCL library improved for use of Microsoft’s WebView 2 control in both TEdgeBrowser and TWebBrowser components, with better support for UserDataFolder and ExecutableFolder configurations.",
          "Use VCL Styles at design time! Prototype stylish UIs even faster by seeing immediately at design-time how your styled forms and controls will look when running.",
          "FireMonkey design-time guidelines: Prototype faster with visual lines and enhanced margin and padding support.",
          "Improved TPathData processing and rendering in FireMonkey library, including quadratic Bézier curve commands and other transformations.",
        ],
        lastText: "Download RAD Studio Feature Matrix",
      },
    ],
    Develop: [
      {
        image: "./image/image2.png",
        heading: "Code Faster and Smarter with Delphi",
        bullets: [
          "IDE support for Markdown documents and VCL-based HTML preview.",
          "Utilize the powerful, versatile and easy-to-learn Object Pascal language and customize the IDE to meet your coding style.",
          "Use Code Insight™ for code completion via a modern Language Server Protocol based on your code while libraries help you code quickly and accurately.",
          "Get hints and tips from inline documentation as you code.",
          "Keep development agile with the VCL designer, Agile refactoring and Live Templates.",
          "Integrate with version control systems including Git, Subversion and Mercurial.",
        ],
        lastText: "Download RAD Studio Feature Matrix",

      },
    ],
    Debug: [
      {
        image: "./image/image3.png",
        heading: "Debug Faster with RAD Studio’s Integrated Native Debugging.",
        bullets: [
          "Add conditional breakpoints to quickly pause program execution at a specified location or when a particular condition occurs.",
          "Explore the entire call stack to trace the route the executing code took to reach its location.",
          "Inspect the current value of variables while your program pauses during debugging.",
          "Keep Code Insight™ code completion running while debugging.",
          "Debug on any device! Deploy your app to any iOS, Android, macOS, or Linux device and debug as if it were running locally.",
          "LLDB debugging for Delphi’s Linux toolchain.",
        ],
        lastText: " Download RAD Studio Feature Matrix",
 
      },
    ],
    Deploy: [
      {
        image: "./image/image4.png",
        heading: "Compile and Deploy High-Performance Native Apps with Delphi",
        bullets: [
          "Provision your apps for Windows 11 with integrated MSIX support! Be ready for Microsoft's new release.",
          "Support for Microsoft's WebView 2 control (Edge Chromium) in the WebBrowser component.",
          "Go from Ad Hoc to App Store fast. Rapidly produce application bundles that can be deployed to Windows Store, Apple App Store and Google Play Store.",
          "View your apps with iOS Simulator for Delphi by generating binaries for macOS devices running on ARM-64 (M1 or M2 CPUs)",
          "Compile for macOS (M-series Apple Silicon) and use the new universal package for AppStore submission. You can now compile for both existing Intel, and the new M-series macOS processors (Apple Silicon).",
          "Compile for Android API 32! Android API and Libraries updated - API 30, Google Play V3, Android 12. Keep current with the latest requirements for Android as the platform evolves. - This includes latest billing API.",
          "Updated FireDAC library supports latest Microsoft ODBC Driver for SQL Server, MongoDB new transaction feature, improved FDMonitor and FDExplorer tools, text editor support for SQL syntax highlighting in FireDAC SQL text property editor, and reFind files for migration of dbGo (classic ADO) projects to FireDAC.",
          "Updated RAD Server has auth token/session expiration option, IP Address and DateTime to logging, and simplified creation of client applications with EMSFireDACClient component.",
          "View your apps with iOS Simulator for Delphi by generating binaries for macOS devices running on ARM-64 (M1 or M2 CPUs)",
        ],
        lastText: "Download RAD Studio Feature Matrix",
        
      },
    ],
    Quality: [
      {
        image: "./image/image5.png",
        heading: "Improve the Quality of Your Code with Delphi",
        bullets: [
          "Find coding errors automatically and solve them with Fast Error Insight.",
          "Use Visual Studio Code to edit Delphi source with full code completion.",
          "LSP awareness of Include files and auto-restart of LSP server.",
          "RTL Quality focus: TZipFile, 64bit improvements for large data structures, Bluetooth LE Record Helper for TDateTime in System.DateUtils.",
          "Use built-in refactoring to streamline, simplify and improve both the performance and readability of your application code.",
          "Leverage well-tested and highly optimized cross-platform libraries to build better code fast.",
          "Build unit tests for all of your code using the integrated DUnit and DUnitX frameworks.",
          "Dive into your project without interrupting the application flow by adding live log-in with CodeSite Logging.",
          "Use Visual Studio Code to edit Delphi source with full code completion.",
        ],
        lastText: "Download RAD Studio Feature Matrix",
      },
    ],
    Collaborate: [
      {
        image: "./image/image2.png",
        heading:
          "Collaborate Better with Delphi Teamwork and Remote Desktop Features",
        bullets: [
          "Use enhanced Remote Desktop support (for VCL and IDE) to collaborate remotely with your team.",
          "Track and manage changes quickly using version control systems including Subversion, Git and Mercurial repositories.",
          "Easily navigate changes and history using the history tab in the code viewer with the built-in difference viewer.",
          "Use RAD Studio command-line compilers ideal for quickly integrating into continuous build configurations using our support for MSBuild.",
        ],
        lastText: "Download RAD Studio Feature Matrix",
        customHeight: "h-[330px] w-[200px] ",
        
      },
    ],
    Extend: [
      {
        image: "./image/image7.png",
        heading: "Extend the Delphi IDE With Hundreds of Components",
        bullets: [
          "Use GetIt Package Manager to rapidly improve the functionality of your applications by downloading and integrating new component",
          "Extend the IDE with tools and components from Embarcadero Technology Partners",
          "Employ powerful integrated tools and components like Beyond Compare, FastReport, TeeChart, InterBase, IP*Works, and CodeSight!",
          "Extend the IDE even further with addons and plugins from dozens of third parties and customize the IDE to work your way.",
        ],
        lastText: "Download RAD Studio Feature Matrix",
       
      },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      <TopBar />
      <Navbar />
      <HomePageWithRectangle />
      <Studio />
      <MyComponent items={data} />
      <TabsSection tabsData={tabsData} />
      <Picture />
      <CardList data={BlogData} />
      <Global />
      <Footer />
    </div>
  );
};

export default App;
