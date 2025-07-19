import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Share2, Clock, BookOpen, Sun, Trophy, Award, Gamepad2, Trophy as TrophyIcon, Smartphone, Cloud, Utensils, Heart, Plane, GraduationCap, Briefcase, DollarSign, Music, Film, Dumbbell, Coffee, Moon, Wifi, ShoppingBag, Smile, Frown, Meh, ThumbsUp, ThumbsDown, Battery, Wrench, Bike, Car, Bus, Train, Ship, Anchor, Camera, Headphones, Book, PenTool, Mic, Phone, Mail, MessageSquare, User, Users, Home, Map, Navigation, Compass, Globe, Watch, Calendar, CreditCard, Key, Lock, Unlock, Gift, Bell, Star, Flag, Trash2, Download, Upload, Edit, Copy, Save, Plus, Minus, X, Check, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCw, RefreshCw, Power, Volume2, VolumeX, Sliders, Settings, HelpCircle, AlertCircle, Info, Lightbulb, Zap, Shield, Feather, Droplet, Wind, Thermometer, Umbrella, Leaf, Trees as Tree, Bug, Fish, Bird, Cat, Dog, PawPrint, Wine, Image, Wallet, Package, Eye, Paperclip, Link2, Bookmark } from 'lucide-react'
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

const Index = () => {
  // 从本地存储加载数据
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

  // 保存到本地存储
  const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  };

  // 人生时间配置
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
      // 大成就保持不变
      internship: false,
      travel: false,
      relationship: false,
      postgraduate: false,
      studyAbroad: false,
      job: false,
      lottery: false,
      learnedSkill: false,
      madeFriend: false,
      
      // 小成就 - 新增更多有趣的日常事件
      gaming: false,
      douyin: false,
      daydreaming: false,
      goodPoop: false,
      deliciousFood: false,
      expelled: false, // 被退学
      sleptWell: false,
      watchedMovie: false,
      listenedMusic: false,
      workedOut: false,
      drankCoffee: false,
      stayedUpLate: false,
      connectedWifi: false,
      wentShopping: false,
      feltHappy: false,
      feltSad: false,
      feltMeh: false,
      likedSomething: false,
      dislikedSomething: false,
      chargedPhone: false,
      fixedSomething: false,
      rodeBike: false,
      gotFired: false,
      brokeUp: false,
      gotDrunk: false,
      madeMeme: false,
      lostWallet: false,
      foundMoney: false,
      gotHaircut: false,
      boughtClothes: false,
      ateSpicy: false,
      criedAlone: false,
      laughedAloud: false,
      watchedSunset: false,
      sleptPastNoon: false,
      forgotPassword: false,
      metStranger: false,
      tookSelfie: false,
      deletedSocialMedia: false,
      reinstalledSocialMedia: false,
      arguedOnline: false,
      wonArgument: false,
      // 新增更多有趣的小事情
      lostGame: false, // 游戏连跪
      wonLottery: false, // 中了5块钱彩票
      missedBus: false, // 错过末班车
      brokePhone: false, // 手机摔碎
      atePizza: false, // 吃披萨
      watchedCat: false, // 看猫咪视频
      playedMahjong: false, // 打麻将
      sangKTV: false, // 唱K
      dancedAlone: false, // 一个人跳舞
      burntFood: false, // 把饭煮糊了
      plantedFlower: false, // 种了一盆花
      killedPlant: false, // 花养死了
      learnedRecipe: false, // 学会新菜
      forgotMask: false, // 出门忘带口罩
      sawRainbow: false, // 看到彩虹
      stepInPoop: false, // 踩到狗屎
      sawCelebrity: false, // 偶遇明星
      gotScammed: false, // 被骗钱
      wonRedPacket: false, // 抢到大红包
      missedDelivery: false, // 快递放丢了
      foundOldThing: false, // 翻到老物件
      triedNewFood: false, // 尝试新食物
      gotAllergic: false, // 食物过敏
      brokeGlasses: false, // 眼镜摔坏
      lostKey: false, // 丢钥匙
      stuckInElevator: false, // 电梯卡住
      sawShooting: false, // 看到流星
      madeIceCream: false, // 自制冰淇淋
      burnedTongue: false, // 烫到舌头
      ranInRain: false, // 雨中奔跑
      sawFireworks: false, // 看到烟花
      builtLego: false, // 拼乐高
      drewPicture: false, // 画画
      wrotePoem: false, // 写诗
      playedInstrument: false, // 弹琴
      tookNap: false, // 午睡
      watchedSunrise: false, // 看日出
      foldedPaper: false, // 折纸
      playedWithPet: false, // 逗宠物
      cleanedRoom: false, // 大扫除
      organizedPhotos: false, // 整理照片
      deletedExes: false, // 删前任照片
      stalkedCrush: false, // 偷看暗恋对象
      sentWrongMessage: false, // 发错群消息
      recoverMessage: false, // 撤回消息
      blockedEx: false, // 拉黑前任
      unblockedEx: false, // 取消拉黑
      changedHairstyle: false, // 换新发型
      dyedHair: false, // 染头发
      gotPiercing: false, // 打耳洞
      gotTattoo: false, // 纹身
      joinedGym: false, // 办健身卡
      quitGym: false, // 健身卡闲置
      startedDiet: false, // 开始减肥
      brokeDict: false, // 破戒
      learnedDance: false, // 学跳舞
      forgotDance: false, // 忘记舞步
      playedBasketball: false, // 打篮球
      playedFrisbee: false, // 玩飞盘
      wentSwimming: false, // 游泳
      gotSunburned: false, // 晒伤
      hadHotpot: false, // 吃火锅
      hadBBQ: false, // 烧烤
      orderedTakeout: false, // 点外卖
      cookedMeal: false, // 自己做饭
      watchedDrama: false, // 追剧
      bingeDrama: false, // 熬夜追剧
      playedSwitch: false, // 玩switch
      boughtGame: false, // 买新游戏
      completedGame: false, // 通关游戏
      uninstalledGame: false, // 卸载游戏
      installedGame: false, // 重装游戏
      watchedAnime: false, // 看动漫
      readManga: false, // 看漫画
      readNovel: false, // 看小说
      wroteStory: false, // 写小说
      startedBlog: false, // 开始写博客
      abandonedBlog: false, // 放弃写博客
      learnedLanguage: false, // 学新语言
      forgotLanguage: false, // 忘记语言
      madePlaylist: false, // 做歌单
      deletedPlaylist: false, // 删歌单
      watchedTutorial: false, // 看教程
      failedTutorial: false, // 教程没看懂
      joinedClub: false, // 加入社团
      quitClub: false, // 退出社团
      startedHobby: false, // 开始新爱好
      quitHobby: false, // 放弃爱好
      gotLost: false, // 迷路
      foundWayBack: false, // 找到路
      brokePromise: false, // 失约
      keptPromise: false, // 守约
      lostBet: false, // 打赌输了
      wonBet: false, // 打赌赢了
      gotPranked: false, // 被整蛊
      prankedOthers: false, // 整蛊他人
      toldJoke: false, // 讲笑话
      laughedAtJoke: false, // 笑话被笑
      startedDiary: false, // 开始写日记
      quitDiary: false, // 放弃写日记
      triedMeditation: false, // 尝试冥想
      fellAsleep: false, // 冥想睡着
      joinedParty: false, // 参加派对
      leftEarly: false, // 提前离场
      gotCompliment: false, // 被夸奖
      gaveCompliment: false, // 夸奖他人
      helpedStranger: false, // 帮助陌生人
      gotHelped: false, // 被帮助
      madeWish: false, // 许愿
      wishCameTrue: false, // 愿望成真
      brokeRule: false, // 违反规定
      gotCaught: false, // 被抓到
      escapedTrouble: false, // 逃过一劫
      causedTrouble: false, // 惹祸
      savedMoney: false, // 存钱
      spentAll: false, // 花光存款
    })
  );

  // 保存状态到localStorage
  useEffect(() => {
    saveToLocalStorage('lifeStart', lifeStart.toISOString());
    saveToLocalStorage('lifeEnd', lifeEnd.toISOString());
    saveToLocalStorage('activities', activities);
    saveToLocalStorage('achievements', achievements);
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

  const getScoreComment = (score) => {
    if (score === 0) return "你的人生太不值了，退学吧";
    if (score < 29) return "你的人生太不值了";
    if (score >= 29 && score < 39) return "你的人生要再加把劲了";
    if (score >= 39 && score < 49) return "你的人生勉强及格，但还是很废";
    if (score >= 49 && score < 59) return "还行吧，至少没完全浪费";
    if (score >= 59 && score < 69) return "不错不错，有点东西";
    if (score >= 69 && score < 79) return "哇塞，你是人生卷王吧";
    if (score >= 79 && score < 89) return "你怎么不上天呢？";
    if (score >= 89 && score < 99) return "神仙下凡辛苦了";
    return "你他娘的还真是个天才！";
  };

  const getNextMilestone = (score) => {
    const milestones = [
      { score: 28, comment: "过得不太值" },
      { score: 38, comment: "仍需努力" },
      { score: 48, comment: "勉强及格" },
      { score: 58, comment: "还不错" },
      { score: 68, comment: "相当精彩" },
      { score: 78, comment: "人生大师" },
      { score: 88, comment: "人中龙凤" },
      { score: 98, comment: "神仙下凡" },
      { score: Infinity, comment: "你真是个天才！" },
    ];
    const next = milestones.find(m => score < m.score);
    return next ? `下一个里程碑: ${next.score}分 (${next.comment})` : "你已达到人生的巅峰！";
  };

  const calculateLifeValue = () => {
    let score = 0;

    const majorAchievements = Object.keys(achievements).slice(0, 9);
    majorAchievements.forEach(key => {
      if (achievements[key]) score += 10;
    });

    const minorAchievements = Object.keys(achievements).slice(9);
    minorAchievements.forEach(key => {
      if (achievements[key]) score += 3;
    });

    score += activities.length * 10;

    return Math.min(score, 120);
  };

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>人生已结束，开始新的轮回吧！</span>;
    } else {
      return (
        <div className="text-center">
          <div className="text-2xl font-bold">
            {days}天 {hours}时 {minutes}分 {seconds}秒
          </div>
        </div>
      );
    }
  };

  const renderAchievementsList = () => {
    return (
      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.keys(achievements).map((key) => (
            <div key={key} className="flex items-center space-x-2">
              <input
                id={key}
                type="checkbox"
                checked={achievements[key]}
                onChange={() => toggleAchievement(key)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label htmlFor={key} className="text-gray-700">
                {key}
              </label>
            </div>
          ))}
        </div>
      </ScrollArea>
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
    <div className="container mx-auto p-4 bg-gray-50 text-gray-800 font-sans-serif selection:bg-blue-200">
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          这b人生过的值不值
          <span className="block text-2xl text-gray-500 font-normal tracking-normal mt-2">（做过划掉，算算这辈子到底值不值！）</span>
        </h1>
        {/* <p className="mt-4 text-lg text-gray-600">
          看看你的人生清单，算算这辈子到底值不值！
        </p> */}
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
            {calculateLifeValue()}
          </p>
          <p className="text-xl text-center text-gray-700 mb-4">
            {getScoreComment(calculateLifeValue())}
          </p>
          <p className="text-md text-center text-gray-500">
            {getNextMilestone(calculateLifeValue())}
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
            <Button onClick={copyUrlToClipboard} variant="outline">手动截图</Button>
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
                href="https://github.com/ktwu01/summer-calculator"
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
