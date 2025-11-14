import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Share2, Clock, BookOpen, Sun, Trophy, Award, Gamepad2, Trophy as TrophyIcon, Smartphone, Cloud, Utensils, Heart, Plane, GraduationCap, Briefcase, DollarSign, Music, Film, Dumbbell, Coffee, Moon, Wifi, ShoppingBag, Smile, Frown, Meh, ThumbsUp, ThumbsDown, Battery, Wrench, Bike, Car, Bus, Train, Ship, Anchor, Camera, Headphones, Book, PenTool, Mic, Phone, Mail, MessageSquare, User, Users, Home, Map, Navigation, Compass, Globe, Watch, Calendar, CreditCard, Key, Lock, Unlock, Gift, Bell, Star, Flag, Trash2, Download, Upload, Edit, Copy, Save, Plus, Minus, X, Check, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCw, RefreshCw, Power, Volume2, VolumeX, Sliders, Settings, HelpCircle, AlertCircle, Info, Lightbulb, Zap, Shield, Feather, Droplet, Wind, Thermometer, Umbrella, Leaf, Trees as Tree, Bug, Fish, Bird, Cat, Dog, PawPrint, Wine, Image, Wallet, Package, Eye, Paperclip, Link2, Bookmark, Github, GitFork } from 'lucide-react'
import Countdown from "react-countdown";
import {
  FacebookShareButton,
  TwitterShareButton,
  WeiboShareButton,
  FacebookIcon,
  TwitterIcon,
  WeiboIcon,
} from "react-share";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toPng } from 'html-to-image';

const Index = () => {
  const printRef = useRef(null);

  const loadFromLocalStorage = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error loading from localStorage:', e);
        return defaultValue;
      }
    }
    return defaultValue;
  };

  const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  };

  const [lifeStart, setLifeStart] = useState(() => 
    new Date(loadFromLocalStorage('lifeStart', "2000-01-01"))
  );
  const [lifeEnd, setLifeEnd] = useState(() => 
    new Date(loadFromLocalStorage('lifeEnd', "2080-01-01"))
  );

  const [activities, setActivities] = useState(() => 
    loadFromLocalStorage('activities', [])
  );
  const [newActivity, setNewActivity] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(true);
  const [achievements, setAchievements] = useState(() => 
    loadFromLocalStorage('achievements', {
      internship: false, travel: false, relationship: false, postgraduate: false,
      studyAbroad: false, job: false, lottery: false, learnedSkill: false, madeFriend: false,
      gaming: false, douyin: false, daydreaming: false, goodPoop: false, deliciousFood: false,
      expelled: false, sleptWell: false, watchedMovie: false, listenedMusic: false,
      workedOut: false, drankCoffee: false, stayedUpLate: false, connectedWifi: false,
      wentShopping: false, feltHappy: false, feltSad: false, feltMeh: false,
      likedSomething: false, dislikedSomething: false, chargedPhone: false,
      fixedSomething: false, rodeBike: false, gotFired: false, brokeUp: false,
      gotDrunk: false, madeMeme: false, lostWallet: false, foundMoney: false,
      gotHaircut: false, boughtClothes: false, ateSpicy: false, criedAlone: false,
      laughedAloud: false, watchedSunset: false, sleptPastNoon: false,
      forgotPassword: false, metStranger: false, tookSelfie: false,
      deletedSocialMedia: false, reinstalledSocialMedia: false, arguedOnline: false,
      wonArgument: false, lostGame: false, wonLottery: false, missedBus: false,
      brokePhone: false, atePizza: false, watchedCat: false, playedMahjong: false,
      sangKTV: false, dancedAlone: false, burntFood: false, plantedFlower: false,
      killedPlant: false, learnedRecipe: false, forgotMask: false, sawRainbow: false,
      stepInPoop: false, sawCelebrity: false, gotScammed: false, wonRedPacket: false,
      missedDelivery: false, foundOldThing: false, triedNewFood: false,
      gotAllergic: false, brokeGlasses: false, lostKey: false, stuckInElevator: false,
      sawShooting: false, madeIceCream: false, burnedTongue: false, ranInRain: false,
      sawFireworks: false, builtLego: false, drewPicture: false, wrotePoem: false,
      playedInstrument: false, tookNap: false, watchedSunrise: false, foldedPaper: false,
      playedWithPet: false, cleanedRoom: false, organizedPhotos: false,
      deletedExes: false, stalkedCrush: false, sentWrongMessage: false,
      recoverMessage: false, blockedEx: false, unblockedEx: false,
      changedHairstyle: false, dyedHair: false, gotPiercing: false, gotTattoo: false,
      joinedGym: false, quitGym: false, startedDiet: false, brokeDict: false,
      learnedDance: false, forgotDance: false, playedBasketball: false,
      playedFrisbee: false, wentSwimming: false, gotSunburned: false, hadHotpot: false,
      hadBBQ: false, orderedTakeout: false, cookedMeal: false, watchedDrama: false,
      bingeDrama: false, playedSwitch: false, boughtGame: false, completedGame: false,
      uninstalledGame: false, installedGame: false, watchedAnime: false,
      readManga: false, readNovel: false, wroteStory: false, startedBlog: false,
      abandonedBlog: false, learnedLanguage: false, forgotLanguage: false,
      madePlaylist: false, deletedPlaylist: false, watchedTutorial: false,
      failedTutorial: false, joinedClub: false, quitClub: false, startedHobby: false,
      quitHobby: false, gotLost: false, foundWayBack: false, brokePromise: false,
      keptPromise: false, lostBet: false, wonBet: false, gotPranked: false,
      prankedOthers: false, toldJoke: false, laughedAtJoke: false,
      startedDiary: false, quitDiary: false, triedMeditation: false,
      fellAsleep: false, joinedParty: false, leftEarly: false, gotCompliment: false,
      gaveCompliment: false, helpedStranger: false, gotHelped: false, madeWish: false,
      wishCameTrue: false, brokeRule: false, gotCaught: false, escapedTrouble: false,
      causedTrouble: false, savedMoney: false, spentAll: false,
    })
  );
  const [score, setScore] = useState(0);

  // Memoized calculation function
  const calculateLifeValue = () => {
    let currentScore = 0;
    const majorAchievementsList = [
      'internship', 'travel', 'relationship', 'postgraduate',
      'studyAbroad', 'job', 'lottery', 'learnedSkill', 'madeFriend'
    ];
    
    majorAchievementsList.forEach(achievement => {
      if (achievements[achievement]) {
        currentScore += 10;
      }
    });
    
    Object.keys(achievements).forEach(key => {
      if (!majorAchievementsList.includes(key) && achievements[key]) {
        currentScore += 3;
      }
    });
    
    currentScore += activities.length * 10;
    
    return Math.round(currentScore);
  };

  useEffect(() => {
    saveToLocalStorage('lifeStart', lifeStart.toISOString());
    saveToLocalStorage('lifeEnd', lifeEnd.toISOString());
    saveToLocalStorage('activities', activities);
    saveToLocalStorage('achievements', achievements);
    setScore(calculateLifeValue());
  }, [lifeStart, lifeEnd, activities, achievements]);

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const addActivity = () => {
    if (newActivity.trim()) {
      setActivities([...activities, newActivity.trim()]);
      setNewActivity("");
    }
  };

  const removeActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const toggleAchievement = (key) => {
    setAchievements(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getScoreComment = (currentScore) => {
    if (currentScore === 0) return "你的人生太不值了，退学吧";
    if (currentScore < 29) return "你的人生太不值了";
    if (currentScore >= 29 && currentScore < 39) return "你的人生要再加把劲了";
    if (currentScore >= 39 && currentScore < 49) return "你的人生勉强及格，但还是很废";
    if (currentScore >= 49 && currentScore < 59) return "还行吧，至少没完全浪费";
    if (currentScore >= 59 && currentScore < 69) return "不错不错，有点东西";
    if (currentScore >= 69 && currentScore < 79) return "哇塞，你是人生卷王吧";
    if (currentScore >= 79 && currentScore < 89) return "你怎么不上天呢？";
    if (currentScore >= 89 && currentScore < 99) return "神仙下凡辛苦了";
    return "你他娘的还真是个天才！";
  };

  const getNextMilestone = (currentScore) => {
    const milestones = [
      { score: 28, comment: "过得不太值" }, { score: 38, comment: "仍需努力" },
      { score: 48, comment: "勉强及格" }, { score: 58, comment: "还不错" },
      { score: 68, comment: "相当精彩" }, { score: 78, comment: "人生大师" },
      { score: 88, comment: "人中龙凤" }, { score: 98, comment: "神仙下凡" },
      { score: Infinity, comment: "你真是个天才！" },
    ];
    const next = milestones.find(m => currentScore < m.score);
    return next ? `下一个里程碑: ${next.score}分 (${next.comment})` : "你已达到人生的巅峰！";
  };
  
  const handleScreenshot = async () => {
    if (!printRef.current) return;
    try {
      const dataUrl = await toPng(printRef.current, { 
        cacheBust: true,
        backgroundColor: '#f9fafb',
      });
      const link = document.createElement('a');
      link.download = 'my-life-in-review.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert('抱歉，截图失败了。');
    }
  };

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>人生已结束，开始新的轮回吧！</span>;
    } else {
      return (
        <div className="text-center">
          <div className="text-2xl font-bold">
          你的人生还剩下 {days}天 {hours}时 {minutes}分 {seconds}秒
          </div>
        </div>
      );
    }
  };

  const getAchievementDisplay = (key) => {
    const displays = {
      internship: { name: "找到实习", icon: Briefcase }, travel: { name: "去旅行", icon: Plane },
      relationship: { name: "脱单", icon: Heart }, postgraduate: { name: "考上研", icon: GraduationCap },
      studyAbroad: { name: "留学", icon: Globe }, job: { name: "找到工作", icon: Briefcase },
      lottery: { name: "中彩票", icon: DollarSign }, learnedSkill: { name: "学会新技能", icon: Lightbulb },
      madeFriend: { name: "交到新朋友", icon: Users }, gaming: { name: "打游戏", icon: Gamepad2 },
      douyin: { name: "刷抖音", icon: Smartphone }, daydreaming: { name: "发呆", icon: Cloud },
      goodPoop: { name: "拉屎通畅", icon: ThumbsUp }, deliciousFood: { name: "吃好吃的", icon: Utensils },
      expelled: { name: "被退学", icon: GraduationCap }, sleptWell: { name: "睡得好", icon: Moon },
      watchedMovie: { name: "看电影", icon: Film }, listenedMusic: { name: "听音乐", icon: Music },
      workedOut: { name: "健身", icon: Dumbbell }, drankCoffee: { name: "喝咖啡", icon: Coffee },
      stayedUpLate: { name: "熬夜", icon: Moon }, connectedWifi: { name: "连上WiFi", icon: Wifi },
      wentShopping: { name: "购物", icon: ShoppingBag }, feltHappy: { name: "感到开心", icon: Smile },
      feltSad: { name: "感到难过", icon: Frown }, feltMeh: { name: "感到无聊", icon: Meh },
      likedSomething: { name: "点赞", icon: ThumbsUp }, dislikedSomething: { name: "点踩", icon: ThumbsDown },
      chargedPhone: { name: "充电", icon: Battery }, fixedSomething: { name: "修东西", icon: Wrench },
      rodeBike: { name: "骑自行车", icon: Bike }, gotFired: { name: "被炒鱿鱼", icon: Briefcase },
      brokeUp: { name: "分手", icon: Heart }, gotDrunk: { name: "喝醉", icon: Wine },
      madeMeme: { name: "制作表情包", icon: Image }, lostWallet: { name: "丢钱包", icon: Wallet },
      foundMoney: { name: "捡到钱", icon: DollarSign }, tookSelfie: { name: "自拍", icon: Camera },
      deletedSocialMedia: { name: "卸载社交软件", icon: Trash2 }, reinstalledSocialMedia: { name: "重装社交软件", icon: Download },
      arguedOnline: { name: "网上吵架", icon: MessageSquare }, wonArgument: { name: "吵赢了", icon: Trophy },
      lostGame: { name: "游戏连跪", icon: Gamepad2 }, wonLottery: { name: "中了5块钱", icon: DollarSign },
      missedBus: { name: "错过末班车", icon: Bus }, brokePhone: { name: "手机摔碎", icon: Smartphone },
      atePizza: { name: "吃披萨", icon: Utensils }, watchedCat: { name: "看猫咪视频", icon: Cat },
      playedMahjong: { name: "打麻将", icon: Gamepad2 }, sangKTV: { name: "唱K", icon: Mic },
      dancedAlone: { name: "一个人跳舞", icon: Music }, burntFood: { name: "把饭煮糊了", icon: Utensils },
      plantedFlower: { name: "种了一盆花", icon: Leaf }, killedPlant: { name: "花养死了", icon: Leaf },
      learnedRecipe: { name: "学会新菜", icon: Utensils }, forgotMask: { name: "出门忘带口罩", icon: Shield },
      sawRainbow: { name: "看到彩虹", icon: Sun }, stepInPoop: { name: "踩到狗屎", icon: PawPrint },
      sawCelebrity: { name: "偶遇明星", icon: Star }, gotScammed: { name: "被骗钱", icon: AlertCircle },
      wonRedPacket: { name: "抢到大红包", icon: Gift }, missedDelivery: { name: "快递放丢了", icon: Package },
      foundOldThing: { name: "翻到老物件", icon: Download }, triedNewFood: { name: "尝试新食物", icon: Utensils },
      gotAllergic: { name: "食物过敏", icon: Droplet }, brokeGlasses: { name: "眼镜摔坏", icon: Wrench },
      lostKey: { name: "丢钥匙", icon: Key }, stuckInElevator: { name: "电梯卡住", icon: Wrench },
      sawShooting: { name: "看到流星", icon: Star }, madeIceCream: { name: "自制冰淇淋", icon: Utensils },
      burnedTongue: { name: "烫到舌头", icon: Thermometer }, ranInRain: { name: "雨中奔跑", icon: Umbrella },
      sawFireworks: { name: "看到烟花", icon: Star }, builtLego: { name: "拼乐高", icon: Package },
      drewPicture: { name: "画画", icon: PenTool }, wrotePoem: { name: "写诗", icon: PenTool },
      playedInstrument: { name: "弹琴", icon: Music }, tookNap: { name: "午睡", icon: Moon },
      watchedSunrise: { name: "看日出", icon: Sun }, foldedPaper: { name: "折纸", icon: Paperclip },
      playedWithPet: { name: "逗宠物", icon: PawPrint }, cleanedRoom: { name: "大扫除", icon: Wrench },
      organizedPhotos: { name: "整理照片", icon: Image }, deletedExes: { name: "删前任照片", icon: Trash2 },
      stalkedCrush: { name: "偷看暗恋对象", icon: Eye }, sentWrongMessage: { name: "发错群消息", icon: MessageSquare },
      recoverMessage: { name: "撤回消息", icon: RotateCw }, blockedEx: { name: "拉黑前任", icon: Lock },
      unblockedEx: { name: "取消拉黑", icon: Unlock }, changedHairstyle: { name: "换新发型", icon: User },
      dyedHair: { name: "染头发", icon: Droplet }, gotPiercing: { name: "打耳洞", icon: User },
      gotTattoo: { name: "纹身", icon: Heart }, joinedGym: { name: "办健身卡", icon: Dumbbell },
      quitGym: { name: "健身卡闲置", icon: X }, startedDiet: { name: "开始减肥", icon: Droplet },
      brokeDict: { name: "破戒", icon: X }, learnedDance: { name: "学跳舞", icon: Music },
      forgotDance: { name: "忘记舞步", icon: X }, playedBasketball: { name: "打篮球", icon: Dumbbell },
      playedFrisbee: { name: "玩飞盘", icon: Paperclip }, wentSwimming: { name: "游泳", icon: Droplet },
      gotSunburned: { name: "晒伤", icon: Sun }, hadHotpot: { name: "吃火锅", icon: Utensils },
      hadBBQ: { name: "烧烤", icon: Utensils }, orderedTakeout: { name: "点外卖", icon: ShoppingBag },
      cookedMeal: { name: "自己做饭", icon: Utensils }, watchedDrama: { name: "追剧", icon: Film },
      bingeDrama: { name: "熬夜追剧", icon: Moon }, playedSwitch: { name: "玩switch", icon: Gamepad2 },
      boughtGame: { name: "买新游戏", icon: DollarSign }, completedGame: { name: "通关游戏", icon: Trophy },
      uninstalledGame: { name: "卸载游戏", icon: Trash2 }, installedGame: { name: "重装游戏", icon: Download },
      watchedAnime: { name: "看动漫", icon: Film }, readManga: { name: "看漫画", icon: Book },
      readNovel: { name: "看小说", icon: Book }, wroteStory: { name: "写小说", icon: PenTool },
      startedBlog: { name: "开始写博客", icon: PenTool }, abandonedBlog: { name: "放弃写博客", icon: X },
      learnedLanguage: { name: "学新语言", icon: Book }, forgotLanguage: { name: "忘记语言", icon: X },
      madePlaylist: { name: "做歌单", icon: Music }, deletedPlaylist: { name: "删歌单", icon: Trash2 },
      watchedTutorial: { name: "看教程", icon: Book }, failedTutorial: { name: "教程没看懂", icon: X },
      joinedClub: { name: "加入社团", icon: Users }, quitClub: { name: "退出社团", icon: X },
      startedHobby: { name: "开始新爱好", icon: Heart }, quitHobby: { name: "放弃爱好", icon: X },
      gotLost: { name: "迷路", icon: Compass }, foundWayBack: { name: "找到路", icon: ArrowRight },
      brokePromise: { name: "失约", icon: X }, keptPromise: { name: "守约", icon: Check },
      lostBet: { name: "打赌输了", icon: X }, wonBet: { name: "打赌赢了", icon: Trophy },
      gotPranked: { name: "被整蛊", icon: X }, prankedOthers: { name: "整蛊他人", icon: X },
      toldJoke: { name: "讲笑话", icon: Smile }, laughedAtJoke: { name: "笑话被笑", icon: Smile },
      startedDiary: { name: "开始写日记", icon: PenTool }, quitDiary: { name: "放弃写日记", icon: X },
      triedMeditation: { name: "尝试冥想", icon: Moon }, fellAsleep: { name: "冥想睡着", icon: Moon },
      joinedParty: { name: "参加派对", icon: Users }, leftEarly: { name: "提前离场", icon: ArrowLeft },
      gotCompliment: { name: "被夸奖", icon: ThumbsUp }, gaveCompliment: { name: "夸奖他人", icon: ThumbsUp },
      helpedStranger: { name: "帮助陌生人", icon: Users }, gotHelped: { name: "被帮助", icon: Users },
      madeWish: { name: "许愿", icon: Star }, wishCameTrue: { name: "愿望成真", icon: Star },
      brokeRule: { name: "违反规定", icon: X }, gotCaught: { name: "被抓到", icon: X },
      escapedTrouble: { name: "逃过一劫", icon: Shield }, causedTrouble: { name: "惹祸", icon: X },
      savedMoney: { name: "存钱", icon: DollarSign }, spentAll: { name: "花光存款", icon: X },
    };
    return displays[key] || { name: key, icon: Check };
  };

  const renderAchievementItem = (key, value) => {
    const display = getAchievementDisplay(key);
    const Icon = display.icon;

    return (
      <label key={key} className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors">
        <input
          type="checkbox"
          checked={value}
          onChange={() => toggleAchievement(key)}
          className="h-4 w-4"
        />
        {Icon && <Icon className="h-4 w-4" />}
        <span className="text-sm">{display.name}</span>
      </label>
    );
  };

  const renderAchievementsList = () => {
    const majorAchievementsList = [
      'internship', 'travel', 'relationship', 'postgraduate',
      'studyAbroad', 'job', 'lottery', 'learnedSkill', 'madeFriend'
    ];
    const minorAchievementsList = Object.entries(achievements).filter(([key]) => !majorAchievementsList.includes(key));
    
    return (
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2 text-lg">大事件（每项10分）</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {majorAchievementsList.map(key => renderAchievementItem(key, achievements[key]))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-2 text-lg">小确幸（每项3分）</h3>
          <ScrollArea className="h-[400px] w-full rounded-md border p-4 mt-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {minorAchievementsList.map(([key, value]) => renderAchievementItem(key, value))}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };
  
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };
  const bookmarkPage = () => {
    alert('请按 ' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Ctrl/Cmd' : 'CTRL') + ' + D 收藏本页面。');
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50 text-gray-800 font-sans-serif selection:bg-blue-200" ref={printRef}>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          这b人生过的值不值
          <span className="block text-2xl text-gray-500 font-normal tracking-normal mt-2">（做过划掉，算算这辈子到底值不值！）</span>
        </h1>
        <div className="flex justify-center items-center gap-4 mt-6">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open("https://github.com/ktwu01/ZuoGuoHuaDiao", "_blank")}
          >
            <Github className="h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="default"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://github.com/ktwu01/ZuoGuoHuaDiao/fork", "_blank")}
          >
            <GitFork className="h-4 w-4" />
            Fork
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => window.open("https://github.com/ktwu01/ZuoGuoHuaDiao", "_blank")}
          >
            <Star className="h-4 w-4" />
            Star
          </Button>
        </div>
      </header>

      <Card className="mb-6 bg-white shadow-lg border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center text-gray-900">
            <Clock className="mr-3 text-blue-500" />
            人生倒计时
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <label htmlFor="start-date" className="block text-sm font-medium text-gray-700 mb-1">人生开始日期</label>
              <input
                id="start-date"
                type="date"
                value={lifeStart.toISOString().split("T")[0]}
                onChange={(e) => setLifeStart(new Date(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="end-date" className="block text-sm font-medium text-gray-700 mb-1">人生结束日期</label>
              <input
                id="end-date"
                type="date"
                value={lifeEnd.toISOString().split("T")[0]}
                onChange={(e) => setLifeEnd(new Date(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mt-4 text-center text-gray-800">
            <Countdown
              date={lifeEnd}
              renderer={countdownRenderer}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white shadow-lg border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center text-gray-900">
            <Trophy className="mr-3 text-yellow-500" />
            我的人生清单
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Collapsible open={isAchievementsOpen} onOpenChange={setIsAchievementsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full mb-4 text-lg">
                {isAchievementsOpen ? "收起清单" : "展开清单"}
                <Sun className="ml-2" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {renderAchievementsList()}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white shadow-lg border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center text-gray-900">
            <BookOpen className="mr-3 text-green-500" />
            我的人生经历
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newActivity}
              onChange={(e) => setNewActivity(e.target.value)}
              placeholder="添加一件你做过的事"
              className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Button onClick={addActivity} className="bg-blue-500 hover:bg-blue-600 text-white">添加</Button>
          </div>
          <ul className="space-y-2">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                <span>{activity}</span>
                <Button variant="ghost" size="sm" onClick={() => removeActivity(index)}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6 bg-white shadow-lg border-gray-200 sticky top-4 z-10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center text-gray-900">
            <Award className="mr-3 text-purple-500" />
            我的人生价值
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-extrabold text-center text-blue-600 mb-4">
            {score}
          </p>
          <p className="text-xl text-center text-gray-700 mb-4">
            {getScoreComment(score)}
          </p>
          <p className="text-md text-center text-gray-500">
            {getNextMilestone(score)}
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-lg border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center text-gray-900">
            <Share2 className="mr-3 text-indigo-500" />
            分享你的人生
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center mb-4 text-gray-600">
            分享给朋友，让他们也来算算自己的人生值不值！
          </p>
          <div className="flex justify-center gap-4">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WeiboShareButton url={shareUrl}>
              <WeiboIcon size={32} round />
            </WeiboShareButton>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <Button onClick={handleScreenshot} variant="outline">点击截屏</Button>
            <Button onClick={copyUrlToClipboard} variant="outline">复制链接</Button>
            <Button onClick={bookmarkPage} variant="outline">收藏页面</Button>
          </div>
        </CardContent>
      </Card>
      
      {showCopyNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
          链接已复制到剪贴板！
        </div>
      )}

      <footer className="text-center mt-8 text-sm text-gray-500">
            <p className="mt-2">
              <Link2 className="h-4 w-4 inline-block mr-1" />
              <a
                href="https://github.com/ktwu01/ZuoGuoHuaDiao"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                觉得好用？给这项目点个⭐Star吧！
              </a>
              灵感来源：
              <a
                href="https://worthjob.zippland.com/"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                "这b班上的值不值测算版"
              </a>
            </p>
        <p className="mt-2">
          人生苦短，及时行乐。做你想做的事，才是最有价值的。
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} 做过划掉（这b人生过的值不值）
        </p>
      </footer>
    </div>
  );
};

export default Index;
