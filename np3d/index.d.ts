export = np3d;
export as namespace np3d;

declare namespace np3d {
    /**
     * 图形引擎类型
     */
    enum EngineType {
        /**
         * Cesium引擎
         */
        Cesium,
        /**
         * 飞渡引擎
         */
        Freedo,
    }

    /**
     * 操作器类型
     */
    enum ManipulatorType {
        /**
         * 默认操作器（左键平移，右键基于当前视口场景中心旋转，中键滚动基于当前鼠标位置缩放）
         */
        Default,
        /**
         * 行走模式（w键：前进，s键：后退，a键：向左旋转，d键：向右旋转，鼠标右键：修改视角方向，鼠标中键缩放：修改相机与模型的距离）
         */
        Walk,
        /**
         * 原地环视模式（左键和中键被禁用，只可在原地使用右键修改视角）
         */
        LookAround,
        /**
         * 目标漫游模式（选择目标点后，目标会永远出现在视野的正中心，中键缩放修改相机与目标的距离，左键修改相机的位置，右键禁用）
         */
        LookAtTarget
    }

    /**
     * 操作器模式
     */
    enum ManipulatorMode {
        /**
         * 自由模式，可自由在地上、地下漫游
         */
        Freedom,
        /**
         * 地上模式，操作器只可在地上进行漫游
         */
        OverGround
    }

    /**
     * 量测类型
     */
    enum MeasureType {
        /**
         * 无
         */
        None,
        /**
         * 坐标量测
         */
        Coordinate,
        /**
         * 直线距离量测
         */
        LineDistance,
        /**
         * 水平距离量测
         */
        HorizontalDistance,
        /**
         * 垂直距离量测
         */
        VerticalDistance,
        /**
         * 圆形量测
         */
        Circle,
        /**
         * 多边形量测
         */
        Polygon,
        /**
         * 贴地距离量测
         */
        GroundDistance,
        /**
         * 地表多边形量测
         */
        GroundPolygon,
        /**
         * 北向夹角
         */
        NorthAngle,
        /**
         * 水平垂直距离量测
         */
        HorizontalVerticalDistance
    }

    /**
     * 鼠标事件类型
     */
    enum MouseEventType {
        /**
         * 左键落下
         */
        LEFT_DOWN = 0,
        /**
         * 左键弹起
         */
        LEFT_UP = 1,
        /**
         * 左键点击
         */
        LEFT_CLICK = 2,
        /**
         * 左键双击
         */
        LEFT_DOUBLE_CLICK = 3,
        /**
         * 右键落下
         */
        RIGHT_DOWN = 5,
        /**
         * 右键弹起
         */
        RIGHT_UP = 6,
        /**
         * 右键点击
         */
        RIGHT_CLICK = 7,
        /**
         * 中键落下
         */
        MIDDLE_DOWN = 10,
        /**
         * 中键谈起
         */
        MIDDLE_UP = 11,
        /**
         * 中键点击
         */
        MIDDLE_CLICK = 12,
        /**
         * 鼠标移动
         */
        MOUSE_MOVE = 15,
        /**
         * 滚轴滚动
         */
        WHEEL = 16,
    }

    /**
     * 鼠标样式
     */
    enum CursorStyleType {
        /**
         * 默认
         */
        Default,
        /**
         * 十字线
         */
        Crosshair,
        /**
         * 一只手
         */
        Pointer,
        /**
         * 指示对象可移动
         */
        Move,
        /**
         * 等待
         */
        Wait,
        /**
         * 自定义
         */
        Custom
    }

    /**
     * 拾取类型
     */
    enum PickMode {
        /**
         * 默认类型，会同时与地形和模型求交，返回距离更近的坐标
         */
        Default,
        /**
         * 与地形求交
         */
        Terrain,
        /**
         * 与模型求交
         */
        Entity,
    }

    /**
     * 选择模式
     */
    enum SelectMode {
        /**
         * 点选
         */
        Point,
        /**
         * 矩形选择
         */
        Rectangle,
        /**
         * 多边形选择
         */
        Polygon,
        /**
         * 球形选择
         */
        Sphere
    }

    /**
     * 动态场景对象状态
     */
    enum DynamicObjectStatus {
        /**
         * 正在播放
         */
        Playing,
        /**
         * 停止
         */
        Stop,
        /**
         * 暂停
         */
        Pause,
        /**
         * 完成
         */
        Finish
    }

    /**
     * 影像服务提供商的类型
     */
    enum ProviderType {
        /**
         * Arcgis提供的影像服务
         */
        Arcgis,
        /**
         * Bing提供的影像服务
         */
        Bing,
        /**
         * Openstreet影响服务
         */
        Openstreet,
        /**
         * Mapbox影像服务
         */
        Mapbox,
        /**
         * 天地图(影像)
        */
        Tiandi_Img,
        /**
         * 天地图(矢量)
         */
        Tiandi_Vec,
        /**
         * 天地图(标记)
         */
        Tiandi_Label,
        /**
         * 高德电子地图
         */
        Gaode,
        /**
         * 单张影像图片
         */
        Single,
        /**
         * 自主部署的影像服务
         */
        Custom,
        /**
         * 离线数据
         */
        Offline
    }

    /**
     * 影像服务类型
     */
    enum ServiceType {
        /**
         * XYZ格式瓦片
         */
        XYZ,
        /**
         * Web Map Service, OGC标准的WEB地图服务
         */
        WMS,
        /**
         * Tile Map Service, 一种REST接口的瓦片服务
         */
        TMS,
        /**
         * Web Map Tile Service, OGC标准的WEB地图切片服务
         */
        WMTS
    }

    /**
     * 影像在卷帘中的方位
     */
    enum ImagerySplitDirection {
        /**
         * 无
         */
        None,
        /**
         * 左侧
         */
        Left,
        /**
         * 右侧
         */
        Right
    }

    /**
     * 管线显示模式
     */
    enum PipelineShowMode {
        /**
         * 颜色
         */
        Color,
        /**
         * 纹理
         */
        Texture
    }

    /**
     * 拾取类型
     */
    enum Weather {
        /**
         * 晴
         */
        Sunny,
        /**
         * 阴
         */
        CloudOvercast,
        /**
         * 小雨
         */
        RainLittle,
        /**
         * 中雨
         */
        RainNormal,
        /**
         * 大雨
         */
        RainBig,
        /**
         * 小雪
         */
        SnowLittle,
        /**
         * 中雪
         */
        SnowNormal,
        /**
         * 大雪
         */
        SnowBig,
        /**
         * 大雾
         */
        Fog,
    }

    /**
     * 水平对齐
     */
    enum HorizontalAlignment {
        /**
         * 左对齐
         */
        Left,
        /**
         * 中间对齐
         */
        Center,
        /**
         * 右对齐
         */
        Right
    }

    /**
     * 垂直对齐
     */
    enum VerticalAlignment {
        /**
         * 顶部对齐
         */
        Top,
        /**
         * 中间对齐
         */
        Center,
        /**
         * 底部对齐
         */
        Bottom
    }

    /**
     * 视口布局
     */
    enum ViewportLayout {
        /**
         * 单视口
         */
        Single,
        /**
         * 水平双视口
         */
        HorizontalDouble,
        /**
         * 垂直双视口
         */
        VerticalDouble,
        /**
         * 四视口
         */
        Quad
    }

    /**
     * 引擎抽象接口
     */
    interface Engine {
        /**
         * 场景
         */
        scene: Scene;
        /**
         * 工具
         */
        utiles: Utils;
        /**
         * 画布
         */
        canvas: Canvas;
        /**
         * 导航
         */
        navigator: Navigator;
        /**
         * 量测
         */
        measure: Measure;
        /**
         * 漫游操作器
         */
        manipulator: Manipulator;
        /**
         * 标绘
         */
        plot: Plot;
        /**
         * 全局配置
         */
        configuration: Configuration;
        /**
         * 环境
         */
        environment: Environment;
        /**
         * 调试
         */
        debug: Debug;
        /**
         * 分析
         */
        analysis: Analysis;

        /**
         * 引擎创建状态回调
         */
        statusCallback: (bCreated: boolean) => void;
    }

    /**
     * 全局配置
     */
    interface Configuration {
        /**
         * 工艺流程的精度（三种精度，"Low"为低精度，"Mid"为中等精度，"High"为高精度）
         */
        processFlowPrecision: string;
        /**
         * 剖分高差阈值
         */
        heightDifference: number;
        /**
         * 是否自动调节模型图层显示效率
         */
        autoAdjustModelLayerDisplayEfficiency: boolean;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
        /**
         * 轮廓线宽度
         */
        outlineWidth: number;
        /**
         * 填充颜色
         */
        fillColor: Color;
        /**
         * 高亮颜色
         */
        hightlightColor: Color;
        /**
         * 闪烁间隔时间
         */
        flashInterval: number;
        /**
         * 资源基础路径
         */
        baseUrl: string;
    }

    /**
     * 调试
     */
    interface Debug {
        /**
         * 是否显示地球瓦片
         */
        showGlobeTile: boolean;
        /**
         * 是否显示相机的视锥体
         */
        showCameraFrustum: boolean;
        /**
         * 是否显示帧率
         */
        showFramesPerSecond: boolean;
        /**
         * 是否显示命令
         */
        showCommands: boolean;
        /**
         * 是否开启3dtiles检查器
         */
        enable3dTilesInspector: boolean;
        /**
         * 是否开启地球瓦片检查器
         */
        enableGlobeTilesInspector: boolean;
    }

    /**
     * 分析
     */
    interface Analysis {
        /**
         * 获取点的缓冲区
         * @param pt 点坐标
         * @param distance 缓冲半径
         */
        AcquirePointBufferZone(pt: Vector3, distance: number): Vector3[];

        /**
         * 获取多段线的缓冲区
         * @param pts 多段线点集合
         * @param distance 缓冲半径
         * @param isCloesd 是否闭合
         */
        AcquirePolylineBufferZone(pts: Vector3[], distance: number, isCloesd: boolean): Vector3[];

        /**
         * 获取填方量
         * @param pts 多边形点集合
         * @param levelAltitude 基准面高程
         */
        AcquireAmountOfFill(pts: Vector3[], levelAltitude: number): Promise<number>;

        /**
         * 获取挖方量
         * @param pts 多边形点集合
         * @param levelAltitude 基准面高程
         */
        AcquireAmountOfDig(pts: Vector3[], levelAltitude: number): Promise<number>;

        /**
         * 获取填方表面积
         * @param pts 多边形点集合
         * @param levelAltitude 基准面高程
         */
        AcquireAreaOfFill(pts: Vector3[], levelAltitude: number): Promise<number>;

        /**
         * 获取挖方表面积
         * @param pts 多边形点集合
         * @param levelAltitude 基准面高程
         */
        AcquireAreaOfDig(pts: Vector3[], levelAltitude: number): Promise<number>;

        /**
         * 获取区域内的海拔最高点
         * @param pts 多边形点集合
         */
        AcquireHighestPoint(pts: Vector3[]): Promise<Vector3>;

        /**
         * 获取区域内的海拔最低点
         * @param pts 多边形点集合
         */
        AcquireLowestPoint(pts: Vector3[]): Promise<Vector3>;

        /**
         * 获取水域面积
         * @param pts 多边形点集合
         * @param levelAltitude 水面高程
         */
        AcquireWaterArea(pts: Vector3[], levelAltitude: number): Promise<number>;

        /**
         * 获取从起点观察目标点被阻拦的位置坐标，若无阻拦物则返回undefined
         * @param sourcePoint 观察点
         * @param targetPoint 目标点
         */
        AcquireTheFirstBlockViewPoint(sourcePoint: Vector3, targetPoint: Vector3): Vector3;

        /**
         * 获取地表上的点
         * @param point 空间内任意一点
         */
        AcquirePointsOnGround(point: Vector3[]): Promise<Vector3[]>;

        /**
         * 计算两个点的地表距离
         * @param point1 第一个点
         * @param point2 第二个点
         */
        AcquireLineDistanceOnGround(point1: Vector3, point2: Vector3): Promise<number>;

        /**
         * 计算多边形的贴地面积
         * @param points 多边形的顶点集合
         */
        AcquirePolygonAreaOnGround(points: Vector3[]): Promise<number>;
    }

    /**
     * 画布
     */
    interface Canvas {
         /**
         * 宽度
         */
        readonly width: number;
        /**
         * 高度
         */
        readonly height: number;
        /**
         * 鼠标跟随提示可见性
         */
        followMouseTooltipDisplay: boolean;
        /**
         * 鼠标跟随提示内容
         */
        followMouseTooltipContent: string;
        /**
         * 鼠标箭头样式
         */
        cursorStyle: CursorStyleType;
        /**
         * 图标的地址，仅当鼠标箭头样式为自定义时可用
         */
        cursorUrl: string;
        /**
         * 是否启用状态栏
         */
        enableStatusBar: boolean;
        /**
         * 是否启用导航小工具
         */
        enableNavigationWidget: boolean;
        /**
         * 是否开启卷帘效果，默认为false
         */
        enableImagerySplit: boolean;
        /**
         * 视口布局，默认为Single单视口
         */
        viewportLayout: ViewportLayout;

        /**
         * 订阅鼠标事件
         * @param type 鼠标事件类型
         * @param action 鼠标事件回调
         */
        SubscribeMouseEvent(type: MouseEventType, action: ((x: number, y: number) => void)): string;

        /**
         * 取消订阅指定的鼠标事件
         * @param id 鼠标事件id
         */
        UnsubscribeMouseEvent(id: string): void;

        /**
         * 屏幕坐标转换为世界坐标（笛卡尔坐标）
         * @param screenX 屏幕X坐标
         * @param screenY 屏幕Y坐标
         * @param mode 拾取类型
         */
        ScreenToWorld(screenX: number, screenY: number, mode?: PickMode): Vector3;

        /**
         * 场景截图
         */
        CaptureScene(): Blob;
    }

    /**
     * 漫游操作器
     */
    interface Manipulator {
        /**
         * 漫游模式
         */
        mode: ManipulatorMode;
        /**
         * 漫游操作器类型
         */
        type: ManipulatorType;
        /**
         * 是否开启多视口联动，该设置只有当canvas.viewportLayout为非Single类型时才生效，默认为false
         */
        enableMultiViewportLinkage: boolean;
        /**
         * 漫游操作器类型修改回调事件
         */
        typeChangeCallback: (beforType: ManipulatorType, afterType: ManipulatorType) => void;
        /**
        * 漫游操作器类型修改事件
        * @param Manipulator 操作器对象
        * @param ManipulatorType[] [修改前的操作器类型, 修改后的操作器类型]
        */
        readonly typeChangedEvent: EventWithArguments<Manipulator, ManipulatorType[]>;
    }

    /**
     * 事件
     */
    interface EventWithoutArguments<TSender> {
        /**
         * 订阅
         * @param listener 监听回调
         * @param scope 作用域
         * @returns 取消订阅该事件的回调
         */
        On(listener: (sender: TSender) => void, scope?: any): () => void;

        /**
         * 取消订阅
         * @param listener 监听回调
         * @param scope 作用域
         */
        Off(listener: (sender: TSender) => void, scope?: any): boolean;
    }
    
    /**
     * 事件
     */
    interface EventWithArguments<TSender, TArgs> {
        /**
         * 订阅
         * @param listener 监听回调
         * @param scope 作用域
         * @returns 取消订阅该事件的回调
         */
        On(listener: (sender: TSender, args: TArgs) => void, scope?: any): () => void;
    
        /**
         * 取消订阅
         * @param listener 监听回调
         * @param scope 作用域
         */
        Off(listener: (sender: TSender, args: TArgs) => void, scope?: any): boolean;
    }

    /**
     * 量测工具
     */
    interface Measure {
        /**
         * 是否正在量测(只读)
         */
        running: boolean;
        /**
         * 当前量测的类型(只读)
         */
        currentType: MeasureType;
        /**
         * 完成量测回调
         */
        completeCallback: () => void;
        /**
         * 取消量测回调
         */
        cancelCallback: () => void;
        /**
         * 完成量测事件
         */
        readonly completeEvent: EventWithoutArguments<Measure>;
        /**
         * 取消量测事件
         */
        readonly cancelEvent: EventWithoutArguments<Measure>;

        /**
         * 开始量测
         * @param type 量测类型
         */
        Start(type: MeasureType): void;

        /**
         * 取消量测
         */
        Cancel(): void;

        /**
         * 清除量测结果
         */
        Clear(): void;
    }

    /**
     * 导航
     */
    interface Navigator {
        /**
         * 相机的当前位置(只读)
         */
        readonly position: Vector3;
        /**
         * 相机当前的朝向(只读)
         */
        readonly direction: Vector3;
        /**
         * 相机当前的偏航角(只读)
         */
        readonly heading: number;
        /**
         * 相机当前的俯仰角(只读)
         */
        readonly pitch: number;

        /**
         * 完成飞行定位后的事件回调（即将废弃）
         */
        completeCallback: () => void;
        /**
         * 取消飞行定位后的事件回调（即将废弃）
         */
        cancelCallback: () => void;
        /**
         * 相机修改后的事件回调（即将废弃）
         */
        cameraChangedCallback: (navigator: Navigator) => void;

        /**
         * 完成飞行定位事件
         */
        readonly completeEvent: EventWithoutArguments<Navigator>;
        /**
         * 取消飞行定位事件
         */
        readonly cancelEvent: EventWithoutArguments<Navigator>;
        /**
         * 相机修改后事件
         */
        readonly cameraChangedEvent: EventWithoutArguments<Navigator>;

        /**
         * 定位，以相机位置和姿态为参考
         * @param cameraPosition 相机位置(笛卡尔坐标)
         * @param heading 相机的偏航角（单位为度数）
         * @param pitch 相机的俯仰角（单位为度数）
         * @param duration 飞行时间（单位为秒）
         */
        FlytoByPosture(cameraPosition: Vector3, heading: number, pitch: number, duration: number): void;

        /**
         * 定位，以相机位置和目标位置为参考
         * @param cameraPosition 相机位置(笛卡尔坐标)
         * @param targetPosition 目标位置(笛卡尔坐标)
         * @param duration 飞行时间（单位为秒）
         */
        FlytoByTargetPos(cameraPosition: Vector3, targetPosition: Vector3, duration: number): void;

        /**
         * 定位到场景对象
         * @param obj 场景对象
         * @param duration 飞行时间（单位为秒）
         */
        FlytoSceneObject(obj: SceneObject | SceneObject[], duration: number): void;

        /**
         * 定位到一个区域
         * @param west 所视范围最西边的经度
         * @param east 所视范围最东边的经度
         * @param south 所视范围最南边的纬度
         * @param north 所视范围最北边的纬度
         * @param duration 飞行时间（单位为秒）
         */
        FlytoRegion(west: number, east: number, south: number, north: number, duration: number): void;

        /**
         * 定位到包围盒
         * @param box 包围盒
         * @param duration 飞行时间（单位为秒）
         */
        FlytoBoundingBox(box: BoundingBox, duration: number): void;

        /**
         * 定位，以目标点位置和姿态为参考
         * @param targetPositions 目标点的位置（笛卡尔坐标）
         * @param heading 相机的偏航角（单位为度数）
         * @param pitch 相机的俯仰角（单位为度数）
         * @param distance 当targetPositions只包含一个目标点时，distance为相机与目标点的距离；当targetPositions包含多个目标点时，distance为相机与多个目标点的包围球球心的距离，此时不建议设置该值
         * @param duration 飞行时间（单位为秒）
         */
        FlytoTargets(targetPositions: Vector3 | Vector3[], heading: number, pitch: number, distance: number, duration: number): void;

        /**
         * 定位到下一个相机视图
         */
        FlytoNextView(): void;

        /**
         * 定位到上一个相机视图
         */
        FlytoPreView(): void;

        /**
         * 停止飞行定位动作，若当前存在飞行定位动作则会立即停止，并停在当前位置
         */
        StopFly(): void;
    }

    /**
     * 包围盒
     */
    interface BoundingBox {
        /**
         * 最小经度值
         */
        minLongitude: number;
        /**
         * 最大经度值
         */
        maxLongitude: number;
        /**
         * 最小纬度值
         */
        minLatitude: number;
        /**
         * 最大纬度值
         */
        maxLatitude: number;
        /**
         * 最小高程值
         */
        minAltitude: number;
        /**
         * 最大高程值
         */
        maxAltitude: number;

        /**
         * 并集
         * @param box 包围盒
         */
        Union(box: BoundingBox): BoundingBox;

        /**
         * 交集
         * @param box 包围盒
         */
        Intersection(box: BoundingBox): BoundingBox;
    }

    /**
     * 标绘，该接口为交互式创建标绘的入口
     */
    interface Plot {
        /**
         * 完成标绘后的事件回调（即将废弃）
         */
        completeCallback: (obj: SceneObject) => void;
        /**
         * 取消标绘后的事件回调（即将废弃）
         */
        cancelCallback: () => void;

        /**
         * 完成标绘后事件
         * @param Plot 标绘接口对象
         * @param SceneObject 创建的对象
         */
        readonly completeEvent: EventWithArguments<Plot, SceneObject>;
        /**
         * 取消标绘后事件
         */
        readonly cancelEvent: EventWithoutArguments<Plot>;

        /**
         * 绘制多段线
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.color 颜色
         * @param options.width 线宽
         * @param options.clampToGround 是否贴地
         * @param options.arrow 是否有箭头
         */
        PlotPolyline(options?: {name?: string, group?: string, color?: Color, width?: number, clampToGround?: boolean, arrow?: boolean}): void;

        /**
         * 绘制多边形
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.fillColor 填充颜色
         * @param options.outlineVisible 是否显示轮廓
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineWidth 轮廓线宽
         * @param options.clampToGround 是否贴地
         * @param options.extrudedHeight 挤出高度
         */
        PlotPolygon(options?: {name?: string, group?: string, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color, outlineWidth?: number, clampToGround?: boolean, extrudedHeight?: number}): void;

        /**
         * 绘制矩形
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.fillColor 填充颜色
         * @param options.outlineVisible 是否显示轮廓
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineWidth 轮廓线宽
         * @param options.clampToGround 是否贴地
         */
        PlotRectangle(options?: {name?: string, group?: string, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color, outlineWidth?: number, clampToGround?: boolean}): void;

        /**
         * 绘制圆形
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.fillColor 填充颜色
         * @param options.outlineVisible 是否显示轮廓
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineWidth 轮廓线宽
         * @param options.clampToGround 是否贴地
         */
        PlotCircle(options?: {name?: string, group?: string, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color, outlineWidth?: number, clampToGround?: boolean}): void;

        /**
         * 放置模型
         * @param url 模型文件路径
         * @param pos 模型在场景中的位置
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.heading 偏航角
         * @param options.pitch 俯仰角
         * @param options.roll 翻滚角
         * @param options.scale 缩放比例
         */
        PlotModel(url: string, options?: { name?: string, group?: string, heading?: number, pitch?: number, roll?: number, scale?: number}): void;

        /**
         * 放置图片标签
         * @param url 图片路径
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.width 宽度
         * @param options.height 高度
         * @param options.scale 缩放比例
         * @param options.fixedPixel 是否固定像素
         * @param options.depthTest 是否深度检测
         * @param options.maxVisibleDistance 最大可见距离
         * @param options.minVisibleDistance 最小可见距离
         * @param options.pixelOffsetX 屏幕空间下相对于position的X方向偏移
         * @param options.pixelOffsetY 屏幕空间下相对于position的Y方向偏移
         * @param options.horizontalAlignment 水平对齐方式
         * @param options.verticalAlignment 垂直对齐方式
         */
        PlotImageLabel(url: string, options?: { name?: string, group?: string, width?: number, height?: number, scale?: number, fixedPixel?: boolean,
            depthTest?: boolean, maxVisibleDistance?: number, minVisibleDistance?: number, pixelOffsetX?: number, pixelOffsetY?: number, horizontalAlignment?: HorizontalAlignment,
            verticalAlignment?: VerticalAlignment}): void;

        /**
         * 放置文字标签
         * @param text 文本内容
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.fontColor 文字颜色
         * @param options.fontName 字体名称
         * @param options.fontSize 字号
         * @param options.bold 是否加粗
         * @param options.italic 是否斜体
         * @param options.lineHeightScale 行间距
         * @param options.backgroundColor 背景颜色
         * @param options.showBackground 是否显示背景
         * @param options.pixelOffsetX 屏幕空间下相对于position的X方向偏移
         * @param options.pixelOffsetY 屏幕空间下相对于position的Y方向偏移
         * @param options.horizontalAlignment 水平对齐方式
         * @param options.verticalAlignment 垂直对齐方式
         * @param options.highlightColor 高亮颜色
         * @param options.depthTest 是否开启深度测试
         * @param options.maxVisibleDistance 最大可见距离
         * @param options.minVisibleDistance 最小可见距离
         * @param options.scale 缩放比例
         * @param options.showOutline 是否显示文字轮廓
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineWidth 轮廓线宽度
         */
        PlotTextLabel(text: string[], options?: { name?: string, group?: string, fontColor?: Color, fontName?: string, fontSize?: number,
            bold?: boolean, italic?: boolean, lineHeightScale?: number, backgroundColor?: Color, showBackground?: boolean, pixelOffsetX?: number, pixelOffsetY?: number,
            horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment, highlightColor?: Color, depthTest?: boolean, maxVisibleDistance?: number,
            minVisibleDistance?: number, scale?: number, showOutline?: boolean, outlineColor?: Color, outlineWidth?: number}): void;

        /**
         * 绘制坑对象
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.depth 坑的深度
         * @param options.angle 挖坑的角度
         * @param options.bottomTextueUrl 坑底面的纹理路径
         * @param options.sideTextureUrl 坑测面的纹理路径
         */
        PlotHole(options?: {name?: string, group?: string, depth?: number, angle?: number, bottomTextueUrl?: string, sideTextureUrl?: string}): void;

        /**
         * 绘制动态线
         * @param url 纹理资源地址
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.color 颜色
         * @param options.width 线宽度
         * @param options.speed 流动速度
         * @param options.repeat 纹理平铺次数
         * @param options.clampToGround 是否贴地
         */
        PlotDynamicLine(url: string, options?: {name?: string, group?: string, color?: Color, width?: number, speed?: number, repeat?: number, clampToGround?: boolean}): void;

        /**
         * 绘制球
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.fillColor 填充颜色
         * @param options.fillVisible 是否显示填充颜色
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineVisible 是否显示轮廓
         */
        PlotSphere(options?: {name?: string, group?: string, fillVisible?: boolean, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color}): void;

        /**
         * 绘圆柱体
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.fillColor 填充颜色
         * @param options.fillVisible 是否显示填充颜色
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineVisible 是否显示轮廓
         */
        PlotCylinder(options?: {name?: string, group?: string, fillVisible?: boolean, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color}): void;
    }

    /**
     * 场景，为场景对象的创建、销毁、获取、选择的接口入口
     */
    interface Scene {
        /**
         * 单选光标悬浮于可选择对象上时的回调事件（即将废弃）
         * @param id 主对象id
         * @param subId 子对象id
         */
        singlePickSelectHoverInCallback: (id: string, subId: string) => void;
        /**
         * 单选光标离开可选择对象上时的回调事件（即将废弃）
         * @param id 主对象id
         * @param subId 子对象id
         */
        singlePickSelectHoverOutCallback: (id: string, subId: string) => void;
        /**
         * 完成批量选择后回调事件（即将废弃）
         * @param selectset 选择集
         */
        selectCompleteCallback: (selectset: SelectResult[]) => void;
        /**
         * 取消选择后回调（即将废弃）
         */
        selectCancelCallback: () => void;
        /**
         * 完成拾取点回调（即将废弃）
         */
        pickPointCompleteCallback: (pos: Vector3) => void;
        /**
         * 取消拾取点回调（即将废弃）
         */
        pickPointCancelCallback: () => void;
        /**
         * 二维地图所在的视口索引
         */
        map2dViewportIndexs: number[];


        /**
         * 单选光标悬浮于可选择对象上事件
         * @param Scene 场景对象
         * @param any[] [主对象id,子对象id]
         */
        readonly singlePickSelectHoverInEvent: EventWithArguments<Scene, any[]>;
        /**
         * 单选光标离开可选择对象上事件
         * @param Scene 场景对象
         * @param any[] [主对象id,子对象id]
         */
        readonly singlePickSelectHoverOutEvent: EventWithArguments<Scene, any[]>;
        /**
         * 完成批量选择后回调事件
         * @param Scene 场景对象
         * @param SelectResult[] 选择集
         */
        readonly selectCompleteEvent: EventWithArguments<Scene, SelectResult[]>;
        /**
         * 取消选择后回调
         * @param Scene 场景对象
         */
        readonly selectCancelEvent: EventWithoutArguments<Scene>;
        /**
         * 完成拾取点回调
         * @param Scene 场景对象
         * @param Vector3 拾取点坐标
         */
        readonly pickPointCompleteEvent: EventWithArguments<Scene, Vector3>;
        /**
         * 取消拾取点回调
         * @param Scene 场景对象
         */
        readonly pickPointCancelEvent: EventWithoutArguments<Scene>;

        /**
         * 从场景中获取指定id的对象
         * @param id 动作id
         */
        GetSceneObjectById(id: string): SceneObject;

        /**
         * 通过名称获取场景对象
         * @param name 场景对象名称
         */
        GetSceneObjectsByName(name: string): SceneObject[];

        /**
         * 获取所有的场景对象
         */
        GetAllSceneObjects(): SceneObject[];

        /**
         * 销毁指定id的场景对象
         * @param id 场景对象id
         */
        DestroySceneObject(id: string): void;

        /**
         * 销毁所有场景对象
         */
        DestoryAllSceneObjects(): void;

        /**
         * 获取组
         * @param name 组名
         */
        GetEntityGroup(name: string): EntityGroup;

        /**
         * 获取所有组
         */
        GetAllEntityGroups(): EntityGroup[];

        /**
         * 开启选择
         * @param mode 选择模式（默认为点选）
         * @param add 是否累计选择，默认为false
         */
        StartSelect(mode?: SelectMode, add?: boolean): void;

        /**
         * 停止选择
         */
        StopSelect(): void;

        /**
         * 清除选择结果
         */
        ClearSelectResult(): void;

        /**
         * 开始拾取点
         * @param mode 拾取模式
         */
        StartPickPoint(mode?: PickMode): void;

        /**
         * 停止拾取点
         */
        StopPickPoint(): void;

        /**
         * 获取在2D多边形内的场景对象
         * @param pts 多边形顶点
         */
        GetSceneObjectsInPolygon2D(pts: Vector3[]): SelectResult[];


        /**
         * 创建模型
         * @param url 模型文件路径
         * @param pos 模型在场景中的位置
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.heading 偏航角
         * @param options.pitch 俯仰角
         * @param options.roll 翻滚角
         * @param options.scale 缩放比例
         * @param options.maxVisibleDistance 最大可见距离
         * @param options.minVisibleDistance 最小可见距离
         * @returns 模型对象
         */
        CreateModel(url: string, pos: Vector3, options?: { name?: string, group?: string, heading?: number, pitch?: number, roll?: number, scale?: number, maxVisibleDistance?: number, minVisibleDistance?: number}): Model;

        /**
         * 创建多段线
         * @param vertexs 顶点集合
         * @param options 可选参数（name:名称，group: 组名称, color:颜色，width:线宽, clampToGround:是否贴地, dynamic:是否为动态绘制, arrow:是否为箭头）
         * @returns 多段线对象
         */
        CreatePolyline(vertexs: Vector3[], options?: {name?: string, group?: string, color?: Color, width?: number, clampToGround?: boolean, dynamic?: boolean, arrow?: boolean}): Polyline;

        /**
         * 创建多边形
         * @param vertexs 顶点集合
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.fillColor 填充颜色
         * @param options.outlineVisible 是否显示轮廓
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineWidth 轮廓线宽
         * @param options.clampToGround 是否贴地
         * @param options.extrudedHeight 挤出高度
         * @returns 多边形对象
         */
        CreatePolygon(vertexs: Vector3[], options?: {name?: string, group?: string, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color, outlineWidth?: number,
            clampToGround?: boolean, extrudedHeight?: number}): Polygon;

        /**
         * 创建椭圆
         * @param center 圆心坐标
         * @param semiMajorAxisLength 长半轴长度
         * @param semiMinorAxisLength 短半轴长度
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.clampToGround 是否贴地
         * @returns 圆形对象
         */
        CreateEllipse(center: Vector3, semiMajorAxisLength: number, semiMinorAxisLength: number, options?: {name?: string, group?: string, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color, outlineWidth?: number, clampToGround?: boolean}): Ellipse;

        /**
         * 创建点
         * @param position 点在场景中的位置
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名
         * @param options.size 像素尺寸
         * @param options.fillColor 填充颜色
         * @param options.outlineVisible 轮廓可见性
         * @param options.outlineColor 轮廓颜色
         * @param options.outlineWidth 轮廓宽度
         * @param options.depthTest 深度检测
         * @param options.maxVisibleDistance 最大可见距离
         * @param options.minVisibleDistance 做小可见距离
         * @returns 点对象
         */
        CreatePoint(position: Vector3, options?: { name?: string, group?: string, size?: number, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color, outlineWidth?: number,
            depthTest?: boolean, maxVisibleDistance?: number, minVisibleDistance?: number}): Point;

        /**
         * 创建图片标签
         * @param url 图片路径
         * @param pos 图片标签在场景中的位置
         * @param options 可选参数（name: 名称, group: 组名, width: 宽度, height: 高度, scale: 缩放比例, fixedPixel: 是否固定像素,
         *   depthTest: 是否开启深度测试, maxVisibleDistance: 最大可见距离, minVisibleDistance: 最小可见距离, pixelOffsetX: 屏幕空间下相对于position的X方向偏移,
         *   pixelOffsetY: 屏幕空间下相对于position的Y方向偏移, horizontalAlignment: 水平对齐, verticalAlignment: 垂直对齐）
         * @returns 图片标签对象
         */
        CreateImageLabel(url: string, pos: Vector3, options?: { name?: string, group?: string, width?: number, height?: number, scale?: number, fixedPixel?: boolean,
            depthTest?: boolean, maxVisibleDistance?: number, minVisibleDistance?: number, pixelOffsetX?: number, pixelOffsetY?: number, horizontalAlignment?: HorizontalAlignment,
            verticalAlignment?: VerticalAlignment}): ImageLabel;

        /**
         * 创建文字标签
         * @param text 文本内容
         * @param pos 在场景中的位置
         * @param options 可选参数（name:名称，group: 组名称, fontColor:文字颜色，fontName:字体名称，fontSize:字号，bold: 是否字体加粗, italic: 是否斜体, lineHeightScale: 行间距,
         *   backgroundColor: 背景颜色, showBackground: 是否显示背景, pixelOffsetX: 屏幕空间下相对于position的X方向偏移, pixelOffsetY: 屏幕空间下相对于position的Y方向偏移,
         *   horizontalAlignment: 水平对齐, verticalAlignment: 垂直对齐, highlightColor: 高亮颜色, depthTest: 是否开启深度测试, maxVisibleDistance: 最大可见距离,
         *   minVisibleDistance: 最小可见距离, scale: 缩放比例, showOutline: 是否显示文字轮廓, outlineColor: 轮廓颜色, outlineWidth: 轮廓线宽度）
         * @returns 文字标签对象
         */
        CreateTextLabel(text: string[], pos: Vector3, options?: { name?: string, group?: string, fontColor?: Color, fontName?: string, fontSize?: number,
            bold?: boolean, italic?: boolean, lineHeightScale?: number, backgroundColor?: Color, showBackground?: boolean, pixelOffsetX?: number, pixelOffsetY?: number,
            horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment, highlightColor?: Color, depthTest?: boolean, maxVisibleDistance?: number,
            minVisibleDistance?: number, scale?: number, showOutline?: boolean, outlineColor?: Color, outlineWidth?: number}): TextLabel;

        /**
         * 创建html样式标签
         * @param htmlScript html脚本
         * @param pos 在场景中的位置
         * @param options 可选参数（name:名称，group: 组名称, horizontalAlignment:水平对齐，verticalAlignment:垂直对齐，draggable:是否可拖拽，leaderVisible:引线是否可见，leaderColor：引线颜色，leaderVector：引线向量）
         * @returns html样式标签对象
         */
        CreateHtmlLabel(htmlScript: string, pos: Vector3, options?: {name?: string, group?: string, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment, draggable?: boolean, leaderVisible?: boolean, leaderColor?: Color, leaderVector?: Vector3}): HtmlLabel;

        /**
         * 创建相机动画对象
         * @param routePoints 相机控制点集合
         * @param options 可选参数（name:名称，playNow:是否创建即开始播放，loop:是否循环播放，ratio:播放速率，showPath:是否显示路径）
         * @returns 相机动画对象
         */
        CreateCameraAnimation(routePoints: RoutePoint[], options?: { name?: string, playNow?: boolean, loop?: boolean, ratio?: number, showPath?: boolean}): CameraAnimation;

        /**
         * 创建影像图层
         * @param providerType 影像提供商类型
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名称
         * @param options.url 影像服务或数据地址
         * @param options.serviceType 影像服务类型，只有当影像提供商类型为Custom时，该类型的设置才会有效
         * @param options.servicelayer 为自定义影像服务相关的配置参数
         * @param options.style 为自定义影像服务相关的配置参数
         * @param options.format 为自定义影像服务相关的配置参数
         * @param options.tileMatrixSetID 为自定义影像服务相关的配置参数
         * @param options.maximumLevel 为自定义影像服务相关的配置参数
         * @param options.bGeographicProjection 为自定义影像服务相关的配置参数
         * @param options.transparent 为自定义影像服务相关的配置参数
         * @param options.splitDirection 当前影像位于卷帘中的方位，只有当canvas.enableImagerySplit为true时，该属性的设置才会生效
         * @returns 影像图层对象
         */
        CreateImageryLayer(providerType: ProviderType, options?: { name?: string, group?: string, url?: string, serviceType?: ServiceType,
            servicelayer?: string, style?: string, format?: string, tileMatrixSetID?: string, maximumLevel?: number,
            bGeographicProjection?: boolean, transparent?: boolean, splitDirection?: ImagerySplitDirection}): ImageryLayer;

        /**
         * 创建地形图层
         * @param url 地形数据服务地址
         * @param option 可选参数（name:名称，group: 组名称, enableNormals:是否开启法线，enableOcean:是否开启海洋效果）
         * @returns 地形图层对象
         */
        CreateTerrainLayer(url: string, options?: { name?: string, group?: string, enableNormals?: boolean, enableOcean?: boolean }): TerrainLayer;

        /**
         * 创建模型图层
         * @param url 若底层为cesium,该路径为tileset.json文件地址
         * @param option 可选参数（name: 名称，group: 组名, xRotate: x轴旋转角度, yRotate: y轴旋转角度, zRotate: z轴旋转角度）
         * @returns 模型图层对象
         */
        CreateModelLayer(url: string, options?: { name?: string, group?: string, xRotate?: number, yRotate?: number, zRotate?: number }): ModelLayer;


        /**
         * 创建工艺流程
         * @param content 脚本字符串
         * @param option 可选参数（name: 名称，group: 组名称, playNow:是否创建即开始播放，isOuter: 是否是外部模式， outerRatio：外部模式下外管与内管的管径比例，relevantModels：关联的模型集合， pipeTransparence：管线透明度）
         * @returns 工艺流程对象
         */
        CreateProcessFlow(script: string, options?: {name?: string, group?: string, playNow?: boolean, isOuter?: boolean, outerRatio?: number, relevantModels?: Map<string, string[]>, pipeTransparence?: number}): ProcessFlow;

        /**
         * 创建坑对象
         * @param vertexs 坑顶点结合
         * @param options 可选参数（name: 名称，group: 组名称, depth：坑的深度，bottomTextueUrl：坑底面的纹理路径，sideTextureUrl：坑测面的纹理路径，angle：挖坑的角度）
         */
        CreateHole(vertexs: Vector3[], options?: {name?: string, group?: string, depth?: number, bottomTextueUrl?: string, sideTextureUrl?: string, angle?: number}): Hole;

        /**
         * 创建屏幕图片
         * @param url 图片地址
         * @param options 可选参数（name: 名称, group: 组名称, width: 图片宽度, height: 图片高度, horizontalAlignment: 水平对齐方式, verticalAlignment: 垂直对齐方式, offsetX: x方向偏移, offsetY: y方向偏移）
         */
        CreateScreenImage(url: string, options?: {name?: string, group?: string, width?: number, height?: number, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment, offsetX?: number, offsetY?: number}): ScreenImage;

        /**
         * 创建屏幕文字
         * @param text 文字内容
         * @param options 可选参数（name: 名称, group: 组名称, fontName: 字体名称, fontSize: 字号, fontColor: 文字颜色， horizontalAlignment: 水平对齐方式, verticalAlignment: 垂直对齐方式, offsetX: x方向偏移, offsetY: y方向偏移, outline: 是否有阴影, outlineColor: 阴影颜色）
         */
        CreateScreenText(text: string, options?: {name?: string, group?: string, fontName?: string, fontSize?: number, fontColor?: Color, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment, offsetX?: number, offsetY?: number, outline?: boolean, outlineColor?: Color}): ScreenText;

        /**
         * 创建动态线
         * @param vertexs 顶点集合
         * @param url 图片资源地址
         * @param options 可选参数（name: 名称, group: 组名称,  width: 线宽度，speed: 流动速度，color：颜色, repeat: 纹理平铺次数，clampToGround：是否贴地）
         */
        CreateDynamicLine(vertexs: Vector3[], url: string, options?: {name?: string, group?: string, width?: number, speed?: number, color?: Color, repeat?: number, clampToGround?: boolean}): DynamicLine;

        /**
         * 创建可移动实体
         * @param routePoints 路径点集合
         * @param url 资源地址
         * @param options 可选参数（name: 名称， group: 组名称, playNow: 是否创建即播放， loop: 是否循环播放， ratio: 播放速率， showPath: 是否显示路径， smooth: 是否平滑路径， cameraTracked: 相机是否跟随实体， clampToGround：是否贴地）
        */
        CreateMoveableEntity(routePoints: RoutePoint[], url: string, options?: { name?: string, group?: string, playNow?: boolean, loop?: boolean, ratio?: number, showPath?: boolean, smooth?: boolean, cameraTracked?: boolean, clampToGround?: boolean}): MoveableEntity;

        /**
         * 创建矩形
         * @param minLongitude 最小经度值
         * @param maxLongitude 最大经度值
         * @param minLatitude 最小纬度值
         * @param maxLatitude 最大纬度值
         * @param options 可选参数（name:名称，group: 组名称, height: 高度， fillColor:填充颜色，outlineVisible:是否显示轮廓，outlineColor:轮廓颜色，outlineWidth:轮廓线宽, clampToGround:是否贴地）
         * @returns 多边形对象
         */
        CreateRectangle(minLongitude: number, maxLongitude: number, minLatitude: number, maxLatitude: number, options?: {name?: string, group?: string, height?: number, fillColor?: Color, outlineVisible?: boolean, outlineColor?: Color, outlineWidth?: number, clampToGround?: boolean}): Rectangle;

        /**
         * 创建场景对象
         * @param script 场景对象的json字符串脚本
         * @param options 可选参数（group: 组名称）
         * @returns 场景对象集合
         */
        CreateSceneObjects(script: string, options?: {group?: string}): SceneObject[];

        /**
         * 创建动画
         * @param script 动画的json字符串脚本
         * @param resourceUrl 资源路径
         * @param options 可选参数（name: 名称， playNow: 是否创建即播放， loop: 是否循环播放， ratio: 播放速率）
         * @returns 动画对象
         */
        CreateAnimation(script: string, resourceUrl: string, options?: {name?: string, playNow?: boolean, loop?: boolean, ratio?: number}): Animation;

        /**
         * 创建标签图层
         * @param script 标签图层脚本
         * @param options 可选参数（name: 名称，group: 组名称, visible: 是否可见, clusterEnable: 是否开启聚类, clusterPixelRange: 发生聚类效果的屏幕像素尺寸, clusterMinimumSize: 聚类包含的最少的对象数量, clusterFontSize: 聚类文字字号, clusterFontName: 聚类文字字体名称, clusterFontColor: 聚类文字颜色）
         * @returns 标签图层对象
         */
        CreateLabelLayer(script: string, options?: {name?: string, group?: string, visible?: boolean, clusterEnable?: boolean, clusterPixelRange?: number, clusterMinimumSize?: number, clusterFontSize?: number, clusterFontName?: string, clusterFontColor?: Color}): LabelLayer;

        /**
         * 创建场景对象更新器
         * @param script 更新json字符串脚本
         * @param options 可选参数（name: 名称， playNow: 是否创建即播放， loop: 是否循环播放， ratio: 播放速率）
         * @returns 场景对象更新器
         */
        CreateSceneObjectUpdater(script: string, options?: {name?: string, playNow?: boolean, loop?: boolean, ratio?: number}): SceneObjectUpdater;

        /**
         * 创建水域
         * @param vertexs 水域顶点集合
         * @param noptions 可选参数（name: 名称， group: 组名称, waterSurfaceAltitude: 水面高程， depth: 深度）
         * @returns 水域对象
         */
        CreateWaterRegion(vertexs: Vector3[], options?: {name?: string, group?: string, waterSurfaceAltitude?: number, depth?: number}): WaterRegion;

        /**
         * 创建球
         * @param center 球心坐标
         * @param radius 球半径
         * @param options 可选参数（name:名称，group: 组名称, fillColor:填充颜色，fillVisible：是否显示填充颜色, outlineColor:轮廓颜色, outlineVisible:是否显示轮廓，）
         * @returns 球对象
         */
        CreateSphere(center: Vector3, radius: number, options?: {name?: string, group?: string, fillColor?: Color, fillVisible?: boolean, outlineColor?: Color, outlineVisible?: boolean}): Sphere;

        /**
         * 创建圆柱体
         * @param position 底部中心
         * @param radius 圆柱体半径
         * @param height 圆柱体高度
         * @param options 可选参数（name:名称，group: 组名称, fillColor:填充颜色，fillVisible：是否显示填充颜色, outlineColor:轮廓颜色, outlineVisible:是否显示轮廓，）
         * @returns 圆柱体对象
         */
        CreateCylinder(position: Vector3, radius: number, height: number, options?: {name?: string, group?: string, fillColor?: Color, fillVisible?: boolean, outlineColor?: Color, outlineVisible?: boolean}): Cylinder;

        /**
         * 创建扩散波
         * @param center 圆心坐标
         * @param radius 半径
         * @param options 可选参数（name:名称，group: 组名称, color:颜色，duration:扩散一次的时间，count:波纹的数量，clampToGround:是否贴地）
         * @returns 扩散波对象
         */
        CreateWave(center: Vector3, radius: number, options?: {name?: string, group?: string, color?: Color, duration?: number, count?: number, clampToGround?: boolean}): Wave;

        /**
         * 创建声音
         * @param url 声音地址
         * @param options 可选参数（name: 名称， playNow: 是否创建即播放， loop: 是否循环播放， ratio: 播放速率）
         * @returns 声音对象
         */
        CreateVoice(url: string, options?: {name?: string, playNow?: boolean, loop?: boolean, ratio?: number}): Voice;

        /**
         * 创建屏幕视频
         * @param script 视频地址
         * @param options 可选参数（name: 名称， group: 组名称, playNow: 是否创建即播放， loop: 是否循环播放， ratio: 播放速率， width: 宽度, height: 高度, horizontalAlignment: 水平对齐方式, verticalAlignment: 垂直对齐方式, offsetX: x方向偏移, offsetY: y方向偏移）
         * @returns 屏幕视频对象
         */
        CreateScreenVideo(url: string, options?: {name?: string, group?: string, playNow?: boolean, loop?: boolean, ratio?: number, width?: number, height?: number, horizontalAlignment?: HorizontalAlignment, verticalAlignment?: VerticalAlignment, offsetX?: number, offsetY?: number}): ScreenVideo;

        /**
         * 创建矢量图层
         * @param url 矢量文件地址
         * @param options 可选参数（name: 名称， group: 组名称, outlineColor: 线的颜色, fillColor: 填充颜色, lineWidth: 线的宽度, outlineVisible: 是否显示线, fillVisible: 是否显示填充色, fontColor: 文字颜色, fontSize: 文字字号, fontFamily: 字体名称, minimumLevel: 最小级别, maximumLevel: 最大级别）
         * @returns 矢量图层对象
         */
        CreateVectorLayer(url: string, options?: {name?: string, group?: string, outlineColor?: Color, fillColor?: Color, lineWidth?: number, outlineVisible?: boolean, fillVisible?: boolean, fontColor?: Color, fontSize?: number, fontFamily?: string, minimumLevel?: number, maximumLevel?: number}): VectorLayer;

        /**
         * 创建属性标签
         * @param position 位置
         * @param title 标题
         * @param content 内容
         * @param style 样式
         * @param options 可选参数（name: 名称, group: 组名称, titleBackground: 标题背景, contentBackground: 内容背景, leaderVisible: 引线是否可见, leaderColor: 引线颜色, frameVisible: 边框是否可见, frameColor: 边框颜色, leaderVector: 引线向量, enableShortcutKeyDestory: 是否开启快捷销毁, relateAnimationId: 关联动画的id，lifetime: 存活时间）
         * @returns 属性标牌对象
         */
        CreateAttributeLabel(position: Vector3, title: string, content: string, style: string, options?: {name?: string, group?: string, titleBackground?: string, contentBackground?: string, leaderVisible?: boolean, leaderColor?: Color, frameVisible?: boolean, frameColor?: Color, leaderVector?: Vector3, enableShortcutKeyDestory?: boolean, relateAnimationId?: string, lifetime?: number}): AttributeLabel;

        /**
         * 创建组
         * @param name 组名
         * @param options 可选参数 （entities： 实体集合, group: 所属组名)
         */
        CreateEntityGroup(name: string, options?: { entities?: Entity[], group?: string }): EntityGroup;

        /**
         * 创建扫描线
         * @param position 位置
         * @param radius 半径
         * @param options 可选参数
         * @param options.name 名称
         * @param options.group 组名
         * @param options.color 颜色
         * @param options.duration 时间
         * @param options.colorGradientStrength 颜色渐变强度
         * @param options.type 类型
         * @returns 扫描线对象
         */
        CreateScanLine(position: Vector3, radius: number, options?: {name?: string, group?: string, color: Color, duration: number, colorGradientStrength: number, type: ScanLineType}): ScanLine;
    }

    interface SelectResult {
        /**
         * 场景对象id
         */
        id: string;
        /**
         * 子对象id
         */
        subId: string;
        /**
         * 对象选择的空间位置
         */
        position: Vector3;
    }

    /**
     * 工具
     */
    interface Utils {
        /**
         * 创建三维向量
         * @param x 笛卡尔坐标系下的X坐标
         * @param y 笛卡尔坐标系下的Y坐标
         * @param z 笛卡尔坐标系下的Z坐标
         */
        CreateVector3(x: number, y: number, z: number): Vector3;

        /**
         * 由经纬高创建三维向量
         * @param longitude 经度
         * @param latitude 纬度
         * @param altitude 高程
         */
        CreateVector3FromDegree(longitude: number, latitude: number, altitude: number): Vector3;

        /**
         * 由经度、纬度创建贴地三维向量
         * @param longitude 经度
         * @param latitude 纬度
         */
        CreateVector3ClampOnGround(longitude: number, latitude: number): Vector3;

        /**
         * 创建颜色
         * @param red 红色(0-1.0)
         * @param green 绿色(0-1.0)
         * @param blue 蓝色(0-1.0)
         * @param alpha 透明度(0-1.0, 0为完全透明，1为不透明)
         */
        CreateColor(red: number, green: number, blue: number, alpha: number): Color;

        /**
         * 创建相机控制点
         * @param time 时刻（单位：秒）
         * @param position 位置(笛卡尔)
         * @param heading 偏航角（单位：度）
         * @param pitch 俯仰角（单位：度）
         * @param roll 翻滚角（单位：度）
         */
        CreateRoutePoint(time: number, position: Vector3, heading: number, pitch: number, roll: number): RoutePoint;

        /**
         * 创建包围盒
         * @param minLongitude 最小经度值
         * @param maxLongitude 最大经度值
         * @param minLatitude 最小纬度值
         * @param maxLatitude 最大纬度值
         * @param minAltitude 最小高程值
         * @param maxAltitude 最大高程值
         */
        CreateBoundingBox(minLongitude: number, maxLongitude: number, minLatitude: number, maxLatitude: number, minAltitude: number, maxAltitude: number): BoundingBox;
    }

    /**
     * 场景环境
     */
    interface Environment {
        /**
         * 是否显示地球，默认为true
         */
        globeVisible: boolean;
        /**
         * 地球透明度，范围为0.0-1.0，0.0为完全透明，1.0为不透明，默认为1.0
         */
        globeTransparent: number;
        /**
         * 天气
         */
        weather: Weather;
        /**
         * 风向，该方向为与正北方向的夹角，单位为度，范围为（0-360）
         */
        windDirection: number;
        /**
         * 风速，单位为米/秒
         */
        windSpeed: number;
        /**
         * 是否显示星空，默认为true
         */
        starsVisible: boolean;
    }

    /**
     * 颜色
     */
    interface Color {
        /**
         * 红色（0-1.0）
         */
        red: number;
        /**
         * 绿色（0-1.0）
         */
        green: number;
        /**
         * 蓝色（0-1.0）
         */
        blue: number;
        /**
         * 透明度（0-1.0）
         */
        alpha: number;

        /**
         * 是否相等
         * @param other 另外一个颜色
         */
        Equals(other: Color): boolean;
    }

    /**
     * 三维向量
     */
    interface Vector3 {
        /**
         * x坐标
         */
        x: number;
        /**
         * y坐标
         */
        y: number;
        /**
         * z坐标
         */
        z: number;

        /**
         * 克隆
         */
        Clone(): Vector3;

        /**
         * 是否相等
         * @param other 另外一个三维向量
         */
        Equals(other: Vector3): boolean;

        /**
         * 转换为字符串，"(x,y,z)"
         */
        ToString(): string;

        /**
         * 向量相加
         * @param other 另外一个三维向量
         */
        Add(other: Vector3): Vector3;

        /**
         * 向量相减
         * @param other 另外一个三维向量
         */
        Minus(other: Vector3): Vector3;

        /**
         * 向量点乘
         * @param other 另外一个三维向量
         */
        Dot(other: Vector3): number;

        /**
         * 向量叉乘
         * @param other 另外一个三维向量
         */
        Cross(other: Vector3): Vector3;

        /**
         * 向量间的距离
         * @param other 另外一个三维向量
         */
        Distance(other: Vector3): number;

        /**
         * 向量的模
         */
        Magnitude(): number;

        /**
         * 向量缩放
         * @param value 缩放值
         */
        Scale(value: number): Vector3;

        /**
         * 向量单位化
         */
        Normalize(): Vector3;

        /**
         * 角度
         * @param other 另外一个三维向量
         */
        Angle(other: Vector3): number;

        /**
         * 转换为经度(度)、纬度(度)、高程(米)
         */
        ToLonLatAlt(): number[];
    }

    /**
     * 路径点
     */
    interface RoutePoint {
        /**
         * 该点时的时刻（单位为秒）
         */
        time: number;
        /**
         * 位置坐标（笛卡尔）
         */
        position: Vector3;
        /**
         * 偏航角（单位为度）
         */
        heading: number;
        /**
         * 俯仰角（单位为度）
         */
        pitch: number;
        /**
         * 翻滚角（单位为度）
         */
        roll: number;
    }

    /**
     * 动态场景对象
     */
     interface Entity extends SceneObject {
        /**
         * 组名
         */
        group: string;
        /**
         * 是否可见
         */
        visible: boolean;
        /**
         * 所在视口的索引集合，默认值为[0]，表示默认出现在第一个视口
         */
        viewportIndexs: number[];
    }

    /**
     * 实体图层
     */
    interface EntityGroup extends Entity {
        /**
         * 实体集合
         */
        readonly entities: Entity[];

        /**
         * 添加实体到图层
         * @param id 实体id
         */
        AddEntity(id: string): void;
        /**
         * 从图层中移除实体
         * @param id 实体id
         */
        RemoveEntity(id: string): void;
        /**
         * 从图层中移除所有实体
         */
        RemoveAll(): void;
    }

    /**
     * 场景对象
     */
    interface SceneObject {
        /**
         * 唯一标识
         */
        id: string;
        /**
         * 名称
         */
        name: string;
        /**
         * 是否已经被销毁
         */
        isDestroyed: boolean;
        /**
         * 类型名称
         */
        typeName: string;
    }

    /**
     * 动态场景对象
     */
    interface DynamicSceneObject extends SceneObject {
        /**
         * 状态
         */
        readonly status: DynamicObjectStatus;
        /**
         * 总时长（秒）
         */
        readonly totalDuration: number;
        /**
         * 是否循环播放，默认为false
         */
        loop: boolean;
        /**
         * 播放倍率（默认为1.0）
         */
        ratio: number;
        /**
         * 当前时刻（秒）
         */
        time: number;

        /**
         * 运行状态回调
         */
        statusCallback: (obj: DynamicSceneObject) => void;

        /**
         * 开始或恢复运动
         */
        Start(): void;

        /**
         * 停止运动，并回到初始位置
         */
        Stop(): void;

        /**
         * 暂停运动
         */
        Pause(): void;
    }

    interface AnimationSceneObject {
        /**
         * 创建时间
         */
        createTime: number;
        /**
         * 销毁时间
         */
        destoryTime: number;
        /**
         * 场景对象
         */
        sceneObject: SceneObject;
    }

    /**
     * 属性标牌
     */
    interface AttributeLabel extends Entity {
        /**
         * 位置
         */
        position: Vector3;
        /**
         * 引线是否可见（默认为可见）
         */
        leaderVisible: boolean;
        /**
         * 引线颜色（默认为白色）
         */
        leaderColor: Color;
        /**
         * 边框是否可见（默认为可见）
         */
        frameVisible: boolean;
        /**
         * 边框颜色（默认为白色）
         */
        frameColor: Color;
        /**
         * 引线向量（默认为（20，-20，0））
         */
        leaderVector: Vector3;
        /**
         * 标题背景图片地址
         */
        titleBackground: string;
        /**
         * 内容背景图片地址
         */
        contentBackground: string;
        /**
         * 存活时间，单位秒
         */
        lifetime: number;
        /**
         * 是否启用快捷键销毁（默认为false）
         */
        enableShortcutKeyDestory: boolean;
        /**
         * 关联的动画id, 若该id不为空，则标牌的生命周期与动画的暂停、播放绑定
         */
        relateAnimationId: string;
        /**
         * 快捷销毁的按键， "Space"代表空格，"Enter"代表回车
         */
        shortcutKey: string;
        /**
         * 标题
         */
        title: RowContent;
        /**
         * 内容
         */
        content: RowContent[];
        /**
         * 样式
         */
        style: TextStyle[];
    }

    /**
     * 行内容
     */
    interface RowContent {
        /**
         * 行号
         */
        rowNumber: number;
        /**
         * 关联的样式id
         */
        styleId: string;
        /**
         * 文本内容
         */
        text: string;
        /**
         * 开始时间
         */
        startTime: number;
    }

    /**
     * 文字样式
     */
    interface TextStyle {
        /**
         * 唯一标识
         */
        id: string;
        /**
         * 字体名称
         */
        fontName: string;
        /**
         * 字号
         */
        fontSize: number;
        /**
         * 字体颜色
         */
        fontColor: Color;
    }

    /**
     * 相机动画
     */
    interface CameraAnimation extends DynamicSceneObject {
        /**
        * 相机动画控制点集合
        */
       routePoints: RoutePoint[];
       /**
        * 是否显示路径线（默认为false）
        */
       showPath: boolean;
   }

    /**
     * 椭圆
     */
    interface Ellipse extends Entity {
        /**
         * 圆心坐标
         */
        center: Vector3;
        /**
         * 长半轴长度
         */
        semiMajorAxisLength: number;
        /**
         * 短半轴长度
         */
        semiMinorAxisLength: number;
        /**
         * 颜色
         */
        fillColor: Color;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
        /**
         * 轮廓的宽度
         */
        outlineWidth: number;
        /**
         * 轮廓的可见性
         */
        outlineVisible: boolean;
        /**
         * 是否贴地
         */
        clampToGround: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
        /**
         * 挤出高度
         */
        extrudedHeight: number;
    }

    /**
     * 圆柱体
     */
    interface Cylinder extends Entity {
        /**
         * 圆柱体坐标（底部）
         */
        position: Vector3;
        /**
         * 高度
         */
        height: number;
        /**
         * 半径
         */
        radius: number;
        /**
         * 填充颜色
         */
        fillColor: Color;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
        /**
         * 轮廓线宽度
         */
        outlineWidth: number;
        /**
         * 填充可见性
         */
        fillVisible: boolean;
        /**
         * 轮廓的可见性
         */
        outlineVisible: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
    }

    /**
     * 动态线
     */
    interface DynamicLine extends Entity {
        /**
         * 顶点集合
         */
        vertexs: Vector3[];
        /**
         * 资源地址
         */
        url: string;
        /**
         * 线宽度，单位:米
         */
        width: number;
        /**
         * 流动速度，单位:米/秒
         */
        speed: number;
        /**
         * 颜色
         */
        color: Color;
        /**
         * 纹理的平铺次数
         */
        repeat: number;
        /**
         * 是否贴地
         */
        clampToGround: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
    }

    /**
     * 坑
     */
    interface Hole extends Entity {
        /**
         * 坑顶点集合
         */
        vertexs: Vector3[];
        /**
         * 坑的深度（默认为30米）
         */
        depth: number;
        /**
         * 坑底部的纹理图片地址
         */
        bottomTextueUrl: string;
        /**
         * 坑侧面的纹理图片地址
         */
        sideTextureUrl: string;
        /**
         * 挖坑的角度（默认为90度，应小于90度，大于0度）
         */
        angle: number;
        /**
         * 挖方量（单位：立方米，现支持90度挖坑角度）
         */
        readonly digVolume: Promise<number>;
    }

    /**
     * html样式标签
     */
    interface HtmlLabel extends Entity {
        /**
         * 位置
         */
        position: Vector3;
        /**
         * html脚本
         */
        htmlScript: string;
        /**
         * 水平对齐（默认为左对齐）
         */
        horizontalAlignment: HorizontalAlignment;
        /**
         * 垂直对齐（默认为底部对齐）
         */
        verticalAlignment: VerticalAlignment;
        /**
         * 是否可拖着（默认为可拖拽）
         */
        draggable: boolean;
        /**
         * 引线是否可见（默认为可见）
         */
        leaderVisible: boolean;
        /**
         * 引线颜色（默认为白色）
         */
        leaderColor: Color;
        /**
         * 引线向量（默认为（20，-20，0））
         */
        leaderVector: Vector3;

        /**
         * 拖拽结束事件回调
         */
        dragEndCallback: (vec: Vector3) => void;
    }

    /**
     * 图片标签
     */
    interface ImageLabel extends Entity {
        /**
         * 图片地址
         */
        url: string;
        /**
         * 位置
         */
        position: Vector3;
        /**
         * 宽度
         */
        width: number;
        /**
         * 高度
         */
        height: number;
        /**
         * 缩放比例，默认为1.0
         */
        scale: number;
        /**
         * 是否固定像素，默认为false
         */
        fixedPixel: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否闪烁（默认为false）
         */
        flash: boolean;
        /**
         * 闪烁间隔（单位：秒，默认为1）
         */
        interval: number;
        /**
         * 是否开启深度测试，默认为false
         */
        depthTest: boolean;
        /**
         * 最大可见距离（默认为MaxValue）
         */
        maxVisibleDistance: number;
        /**
         * 最小可见距离（默认为0）
         */
        minVisibleDistance: number;
        /**
         * 屏幕空间下相对于position的X方向偏移（单位：像素，默认为0）
         */
        pixelOffsetX: number;
        /**Y
         * 屏幕空间下相对于position的Y方向偏移（单位：像素，默认为0）
         */
        pixelOffsetY: number;
        /**
         * 水平对齐（默认为居中对齐）
         */
        horizontalAlignment: HorizontalAlignment;
        /**
         * 垂直对齐（默认为居中对齐）
         */
        verticalAlignment: VerticalAlignment;
    }

    /**
     * 点
     */
    interface Point extends Entity {
        /**
         * 位置
         */
        position: Vector3;
        /**
         * 像素尺寸，默认为2
         */
        size: number;
        /**
         * 颜色
         */
        fillColor: Color;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
        /**
         * 轮廓的宽度，默认为1
         */
        outlineWidth: number;
        /**
         * 轮廓的可见性，默认为false
         */
        outlineVisible: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
        /**
         * 最大可见距离（默认为MaxValue）
         */
        maxVisibleDistance: number;
        /**
         * 最小可见距离（默认为0）
         */
        minVisibleDistance: number;
        /**
         * 是否开启深度测试，默认为false
         */
        depthTest: boolean;
    }    

    /**
     * 影像图层
     */
    interface ImageryLayer extends Entity {
        /**
         * 影像提供商类型
         */
        providerType: ProviderType;
        /**
         * 影像服务地址，当ProviderType为Custom时为服务地址，若ProviderType为Single类型则为图片地址，若ProviderTyper为Offline类型则为离线数据目录地址， 若为其他类型该值的设置无效果
         */
        url: string;
        /**
         * 影像服务类型，只有当影像提供商类型为Custom时，该类型的设置才会有效，默认为None
         */
        serviceType: ServiceType;
        /**
         * 图层名，可为多个，以分号隔开
         */
        serviceLayer: string;
        /**
         * 透明度，默认为1.0（不透明），0代表完全透明
         */
        transparency: number;
        /**
         * 亮度，默认为1.0，当该值大于1.0，该图层会变亮；当该值小于1.0时，该图层会变暗；当该值等于1.0时，图层无变化
         */
        brightness: number;
        /**
         * 对比度，默认值为1.0
         */
        contrast: number;
        /**
         * 灰度系数，默认值为1.0
         */
        gamma: number;
        /**
         * 色调，默认值为0.0
         */
        hue: number;
        /**
         * 饱和度，默认值为1.0
         */
        saturation: number;
        /**
         * 当前影像位于卷帘中的方位，默认为None，只有当canvas.enableImagerySplit为true时，该属性的设置才会生效
         */
        splitDirection: ImagerySplitDirection;

        /**
         * 向上提升一层显示
         */
        moveUp(): void;


        /**
         * 向下降低一层显示
         */
        moveDown(): void;


        /**
         * 移动到最顶端显示
         */
        moveTop(): void;


        /**
         * 移动到最底端显示
         */
        moveBottom(): void;
    }

    /**
     * 标签图层
     */
    interface LabelLayer extends Entity {
        /**
         * 图片标签集合
         */
        readonly imageLabels: ImageLabel[];
        /**
         * 文字标签集合
         */
        readonly textLabels: TextLabel[];
        /**
         * 是否开启聚类，默认为false
         */
        clusterEnable: boolean;
        /**
         * 发生聚类效果的屏幕像素尺寸，默认为15
         */
        clusterPixelRange: number;
        /**
         * 聚类包含的最少的对象数量，默认为3
         */
        clusterMinimumSize: number;
        /**
         * 聚类文字字号
         */
        clusterFontSize: number;
        /**
         * 聚类文字字体名称
         */
        clusterFontName: string;
        /**
         * 聚类文字颜色
         */
        clusterFontColor: Color;

        /**
         * 添加聚类标签
         * @param minNum 包含的标签的最小数量值
         * @param maxNum 包含的标签的最大数量值
         * @param url 聚类标签地址
         * @param scale 聚类标签缩放比例
         * @returns 聚类标签id
         */
        AddClusterImageLabel(minNum: number, maxNum: number, url: string, scale?: number): string;

        /**
         * 移除聚类标签
         * @param id 移除聚类标签的id
         * @returns 是否正常移除
         */
        RemoveClusterImageLabel(id: string): boolean;
    }


    /**
     * 模型图层
     */
    interface ModelLayer extends Entity {
        /**
         * 基于Cesium底层时, 该地址为tileset.json文件地址
         */
        url: string;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 透明度，取值范围为0.0-1.0，0.0为完全透明，1.0为完全不透明，默认值为1.0
         */
        transparency: number;
        /**
         * 模型id集合
         */
        readonly ids: string[];
        /**
         * 隐藏的模型id集合
         */
        hideModelIds: string[];
        /**
         * 高亮的模型id集合
         */
        highlightModelIds: string[];
        /**
         * 透明的模型id集合
         */
        transparentModelIds: string[];
        /**
         * 闪烁的模型id集合
         */
        flashModelIds: string[];
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
        /**
         * 相对于x轴的旋转角度，单位为度数
         */
        xRotate: number;
        /**
         * 相对于y轴的旋转角度，单位为度数
         */
        yRotate: number;
        /**
         * 相对于z轴的旋转角度，单位为度数
         */
        zRotate: number;
        /**
         * 是否可编辑，默认为false
         */
        editable: boolean;
        /**
         * 是否可被剪切，默认为false
         */
        clipable: boolean;
        /**
         * 正在编辑中触发事件
         * @param ModelLayer 模型图层对象
         */
        readonly editingEvent: EventWithoutArguments<ModelLayer>;

        /**
         * 模型信息加载后回调
         */
        modelsInfoLoadedCallback: () => void;

        /**
         * 显示指定的模型(将废弃)
         * @param ids 模型id集合
         */
        ShowModels(ids: string[]): void;

        /**
         * 隐藏指定的模型(将废弃)
         * @param ids 模型id集合
         */
        HideModels(ids: string[]): void;

        /**
         * 高亮指定模型(将废弃)
         * @param ids 模型id集合
         */
        HighlightModels(ids: string[]): void;

        /**
         * 取消指定模型的高亮(将废弃)
         * @param ids 模型id集合
         */
        CancelHighlightModels(ids: string[]): void;

        /**
         * 开始闪烁(将废弃)
         * @param ids 模型id集合
         * @param interval 闪烁间隔，单位为秒
         * @param isHighlight 闪烁时是否高亮
         */
        StartFlashModels(ids: string[], interval: number, isHighlight: boolean): void;

        /**
         * 停止闪烁(将废弃)
         * @param ids 模型id集合
         */
        StopFlashModels(ids: string[]): void;

        /**
         * 设定指定模型的透明度(将废弃)
         * @param ids 模型id集合
         * @param transparency 透明度，取值范围为0.0-1.0，0.0为完全透明，1.0为完全不透明
         */
        SetModelsTransparency(ids: string[], transparency: number): void;

        /**
         * 定位到指定的模型
         * @param ids 模型id集合
         * @param duration 飞行时间
         */
        FlyToModels(ids: string[], duration: number): void;

        /**
         * 设置模型颜色
         * @param ids 模型id集合
         * @param color 颜色
         */
        SetModelsColor(ids: string[], color: Color): void;

        /**
         * 恢复模型颜色
         */
        ResetModelsColor(): void;

        /**
         * 获取模型的空间位置
         * @param id 模型id
         */
        GetModelPosition(id: string): Vector3;
    }

    /**
     * 可运动的实体
     */
    interface MoveableEntity extends DynamicSceneObject, Entity {
        /**
         * 实体资源地址
         */
        url: string;
        /**
         * 控制点集合
         */
        routePoints: RoutePoint[];
        /**
         * 是否显示路径线（默认为false）
         */
        showPath: boolean;
        /**
         * 相机跟随实体（默认为false）
         */
        cameraTracked: boolean;
        /**
         * 平滑路径（默认为false）
         */
        smooth: boolean;
        /**
         * 是否贴地
         */
        clampToGround: boolean;

    }

    /**
     * 管线工程
     */
    interface PipelineProject extends SceneObject {
        /**
         * 管线工程数据地址
         */
        url: string;
        /**
         * 是否可见
         */
        visible: boolean;
        /**
         * 显示模式
         */
        mode: PipelineShowMode;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;

        /**
         * 显示指定类型名称的管线
         * @param names 管线类型名称集合
         */
        ShowPipelineTypes(names: string[]): void;

        /**
         * 隐藏指定类型名称的管线
         * @param names 管线类型名称集合
         */
        HidePipelineTypes(names: string[]): void;

        /**
         * 显示指定id的管线设施
         * @param ids 管线设施id集合
         */
        ShowPipelineDevices(ids: string[]): void;

        /**
         * 显示指定id的管线设施
         * @param ids 管线设施id集合
         */
        HidePipelineDevices(ids: string[]): void;

        /**
         * 高亮指定id的管线设施
         * @param ids 管线设施id集合
         */
        HighlightPipelineDevices(ids: string[]): void;

        /**
         * 取消指定id的管线设施高亮
         * @param ids 管线设施id集合
         */
        CancelHighlightPipelineDevices(ids: string[]): void;

        /**
         * 闪烁
         * @param ids 管线设施id集合
         * @param interval 闪烁间隔，单位为秒
         * @param isHighlight 闪烁时是否高亮
         */
        FlashPipelineDevices(ids: string[], interval: number, isHighlight: boolean): void;

        /**
         * 停止闪烁
         * @param ids 管线设施id集合
         */
        StopFlashPipelineDevices(ids: string[]): void;

        /**
         * 获取管线设施的空间位置
         * @param id 管线设施id
         */
        GetPipelineDevicePosition(id: string): Vector3;
    }

    /**
     * 模型
     */
    interface Model extends Entity {
        /**
         * 模型文件地址
         */
        url: string;
        /**
         * 模型位置（笛卡尔坐标）
         */
        position: Vector3;
        /**
         * 偏航角（度）
         */
        heading: number;
        /**
         * 俯仰角（度）
         */
        pitch: number;
        /**
         * 翻滚角（度）
         */
        roll: number;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 缩放比例
         */
        scale: number;
        /**
         * 是否启动动画，默认为false
         */
        runAnimation: boolean;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
        /**
         * 是否可编辑，默认为false
         */
        editable: boolean;
        /**
         * 最大可见距离（默认为MaxValue）
         */
        maxVisibleDistance: number;
        /**
         * 最小可见距离（默认为0）
         */
        minVisibleDistance: number;
        /**
         * 正在编辑中触发事件
         * @param Model 模型对象
         */
        readonly editingEvent: EventWithoutArguments<Model>;
    }

    /**
     * 多边形
     */
    interface Polygon extends Entity {
        /**
         * 顶点集合
         */
        vertexs: Vector3[];
        /**
         * 颜色
         */
        fillColor: Color;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
        /**
         * 轮廓的宽度
         */
        outlineWidth: number;
        /**
         * 轮廓的可见性
         */
        outlineVisible: boolean;
        /**
         * 是否贴地
         */
        clampToGround: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
        /**
         * 挤出高度
         */
        extrudedHeight: number;
        /**
         * 是否可编辑，默认为false
         */
        editable: boolean;
        /**
         * 正在编辑中触发事件
         * @param Polygon 多边形对象
         */
        readonly editingEvent: EventWithoutArguments<Polygon>;
    }

    /**
     * 多段线
     */
    interface Polyline extends Entity {
        /**
         * 顶点集合
         */
        vertexs: Vector3[];
        /**
         * 颜色
         */
        color: Color;
        /**
         * 线宽
         */
        width: number;
        /**
         * 是否贴地
         */
        clampToGround: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否被动态的使用，在交互中，该值为true
         */
        dynamic: boolean;
        /**
         * 是否包含箭头，默认为false
         */
        arrow: boolean;
        /**
         * 可见的相机最大高度
         */
        visibleMaxCameraHeight: number;
        /**
         * 可见的相机最小高度
         */
        visibleMinCameraHeight: number;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
        /**
         * 是否可编辑，默认为false
         */
        editable: boolean;
        /**
         * 正在编辑中触发事件
         * @param Polyline 多段线对象
         */
        readonly editingEvent: EventWithoutArguments<Polyline>;
    }

    /**
     * 工艺流程对象
     */
    interface ProcessFlow extends DynamicSceneObject, SceneObject {
        /**
         * 是否是外部模式，默认为false
         */
        isOuter: boolean;
        /**
         * 外部模式下外管与内管的管径比例， 默认为2.0
         */
        outerRatio: number;
        /**
         * 关联的模型集合
         */
        relevantModels: Map<string, string[]>;
        /**
         * 管线透明度
         */
        pipeTransparence: number;
    }

    /**
     * 矩形
     */
    interface Rectangle extends Entity {
        /**
         * 最小经度值
         */
        minLongitude: number;
        /**
         * 最大经度值
         */
        maxLongitude: number;
        /**
         * 最小纬度值
         */
        minLatitude: number;
        /**
         * 最大纬度值
         */
        maxLatitude: number;
        /**
         * 高度
         */
        height: number;
        /**
         * 颜色
         */
        fillColor: Color;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
        /**
         * 轮廓的宽度
         */
        outlineWidth: number;
        /**
         * 轮廓的可见性
         */
        outlineVisible: boolean;
        /**
         * 是否贴地
         */
        clampToGround: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
    }

    /**
     * 场景对象更新器
     */
    interface SceneObjectUpdater extends DynamicSceneObject {
        /**
         * 更新脚本
         */
        script: string;
    }

    /**
     * 屏幕图片
     */
    interface ScreenImage extends Entity {
        /**
         * 图片地址
         */
        url: string;
        /**
         * 图片宽度
         */
        width: number;
        /**
         * 图片高度
         */
        height: number;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 水平对齐
         */
        horizontalAlignment: HorizontalAlignment;
        /**
         * 垂直对齐
         */
        verticalAlignment: VerticalAlignment;
        /**
         * 屏幕x坐标，若horizontalAlignment为undefine,该值为绝对的屏幕x坐标;若不为undefine,则为基于水平对齐坐标的相对偏移
         */
        offsetX: number;
        /**
         * 屏幕y坐标，若verticalAlignment为undefine,该值为绝对的屏幕y坐标;若不为undefine,则为基于垂直对齐坐标的相对偏移
         */
        offsetY: number;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
    }

    /**
     * 屏幕文字
     */
    interface ScreenText extends Entity {
        /**
         * 文字内容
         */
        text: string;
        /**
         * 字体
         */
        fontName: string;
        /**
         * 字号
         */
        fontSize: number;
        /**
         * 文字颜色
         */
        fontColor: Color;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 水平对齐
         */
        horizontalAlignment: HorizontalAlignment;
        /**
         * 垂直对齐
         */
        verticalAlignment: VerticalAlignment;
        /**
         * 屏幕x坐标，若horizontalAlignment为undefine,该值为绝对的屏幕x坐标;若不为undefine,则为基于水平对齐坐标的相对偏移
         */
        offsetX: number;
        /**
         * 屏幕y坐标，若verticalAlignment为undefine,该值为绝对的屏幕y坐标;若不为undefine,则为基于垂直对齐坐标的相对偏移
         */
        offsetY: number;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
        /**
         * 是否有轮廓
         */
        outline: boolean;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
    }

    /**
     * 屏幕视频
     */
    interface ScreenVideo extends DynamicSceneObject, Entity {
        /**
         * 视频资源地址
         */
        url: string;
        /**
         * 视频宽度
         */
        width: number;
        /**
         * 视频高度
         */
        height: number;
        /**
         * 水平对齐
         */
        horizontalAlignment: HorizontalAlignment;
        /**
         * 垂直对齐
         */
        verticalAlignment: VerticalAlignment;
        /**
         * 屏幕x坐标，若horizontalAlignment为undefine,该值为绝对的屏幕x坐标;若不为undefine,则为基于水平对齐坐标的相对偏移
         */
        offsetX: number;
        /**
         * 屏幕y坐标，若verticalAlignment为undefine,该值为绝对的屏幕y坐标;若不为undefine,则为基于垂直对齐坐标的相对偏移
         */
        offsetY: number;
        /**
         * 音量大小，默认值为0.5，最大值为1，最小值为0，代表静音
         */
        volume: number;
    }

    /**
     * 动画
     */
    interface Animation extends DynamicSceneObject {
        /**
         * 对象集合
         */
        sceneObjects: AnimationSceneObject[];
        /**
         * 音量大小，默认值为0.5，最大值为1，最小值为0，代表静音
         */
        volume: number;
    }

    /**
     * 球
     */
    interface Sphere extends Entity {
        /**
         * 球心坐标
         */
        center: Vector3;
        /**
         * 半径
         */
        radius: number;
        /**
         * 填充颜色
         */
        fillColor: Color;
        /**
         * 轮廓颜色
         */
        outlineColor: Color;
        /**
         * 填充可见性
         */
        fillVisible: boolean;
        /**
         * 轮廓的可见性
         */
        outlineVisible: boolean;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮
         */
        highlight: boolean;
        /**
         * 高亮颜色
         */
        highlightColor: Color;
        /**
         * 是否闪烁
         */
        flash: boolean;
        /**
         * 闪烁间隔，单位为秒
         */
        interval: number;
    }

    /**
     * 地形图层
     */
    interface TerrainLayer extends Entity {
        /**
         * 地形数据服务地址
         */
        url: string;
        /**
         * 是否开启顶点法线，默认为关闭，若开启，地形的光照效果会更佳
         */
        enableNormals: boolean;
        /**
         * 是否开启海洋效果，默认为关闭
         */
        enableOcean: boolean;
        /**
         * 图层名称
         */
        layerName: string;
        /**
         * 样式名称
         */
        styleName: string;
    }

    /**
     * 文字标签
     */
    interface TextLabel extends Entity {
        /**
         * 文字内容
         */
        text: string[];
        /**
         * 文字颜色（默认为白色）
         */
        fontColor: Color;
        /**
         * 字体名称(默认为Helvetica)
         */
        fontName: string;
        /**
         * 字号（默认为10）
         */
        fontSize: number;
        /**
         * 是否显示文字轮廓，（默认为false）
         */
        showOutline: boolean;
        /**
         * 文字轮廓颜色（默认为黑色）
         */
        outlineColor: Color;
        /**
         * 文字轮廓线宽度（默认为1）
         */
        outlineWidth: number;
        /**
         * 是否字体加粗（默认为false）
         */
        bold: boolean;
        /**
         * 是否斜体（默认为false）
         */
        italic: boolean;
        /**
         * 行间距（默认为1.2）
         */
        lineHeightScale: number;
        /**
         * 背景颜色（默认为黑色，50%透明度）
         */
        backgroundColor: Color;
        /**
         * 是否显示背景（默认为true）
         */
        showBackground: boolean;
        /**
         * 位置
         */
        position: Vector3;
        /**
         * 屏幕空间下相对于position的X方向偏移（单位：像素，默认为0）
         */
        pixelOffsetX: number;
        /**Y
         * 屏幕空间下相对于position的Y方向偏移（单位：像素，默认为0）
         */
        pixelOffsetY: number;
        /**
         * 水平对齐（默认为居中对齐）
         */
        horizontalAlignment: HorizontalAlignment;
        /**
         * 垂直对齐（默认为居中对齐）
         */
        verticalAlignment: VerticalAlignment;
        /**
         * 缩放比例（默认为1.0）
         */
        scale: number;
        /**
         * 是否可选
         */
        selectable: boolean;
        /**
         * 是否高亮（默认为false）
         */
        highlight: boolean;
        /**
         * 高亮颜色（默认为红色）
         */
        highlightColor: Color;
        /**
         * 是否闪烁（默认为false）
         */
        flash: boolean;
        /**
         * 闪烁间隔（单位：秒，默认为1）
         */
        interval: number;
        /**
         * 是否开启深度测试，默认为false
         */
        depthTest: boolean;
        /**
         * 最大可见距离（默认为MaxValue）
         */
        maxVisibleDistance: number;
        /**
         * 最小可见距离（默认为0）
         */
        minVisibleDistance: number;
    }

    /**
     * 矢量图层
     */
    interface VectorLayer extends Entity {
        /**
         * 矢量文件地址，支持shp和geojson
         */
        url: string;
        /**
         * 最小级别，默认为3
         */
        minimumLevel: number;
        /**
         * 最大级别，默认为22
         */
        maximumLevel: number;
        /**
         * 线的颜色，默认为rgb(255,255,255)
         */
        outlineColor: Color;
        /**
         * 填充颜色，默认为rgba(0,255,0,0.2)
         */
        fillColor: Color;
        /**
         * 线的宽度，默认为1.5
         */
        lineWidth: number;
        /**
         * 是否显示线，默认为true
         */
        outlineVisible: boolean;
        /**
         * 是否显示填充色，默认为true
         */
        fillVisible: boolean;
        /**
         * 文字颜色，默认为黑色
         */
        fontColor: Color;
        /**
         * 文字字号，默认为16
         */
        fontSize: number;
        /**
         * 字体名称，默认为宋体
         */
        fontFamily: string;
    }

    /**
     * 声音
     */
    interface Voice extends DynamicSceneObject {
        /**
         * 音频地址
         */
        url: string;
        /**
         * 音量大小，默认值为0.5，最大值为1，最小值为0，代表静音
         */
        volume: number;
    }

    /**
     * 水域
     */
    interface WaterRegion extends Entity {
        /**
         * 顶点集合
         */
        vertexs: Vector3[];
        /**
         * 水面高程
         */
        waterSurfaceAltitude: number;
        /**
         * 深度
         */
        depth: number;
    }

    /**
     * 扩散波
     */
    interface Wave extends Entity {
        /**
         * 圆心坐标
         */
        center: Vector3;
        /**
         * 半径
         */
        radius: number;
        /**
         * 颜色
         */
        color: Color;
        /**
         * 扩散一次的时间（单位：秒，默认值：1秒）
         */
        duration: number;
        /**
         * 波纹的数量(默认值: 3)
         */
        count: number;
        /**
         * 是否贴地
         */
        clampToGround: boolean;
    }

    /**
     * 扫描线类型
     */
    enum ScanLineType {
        /**
         * 扩散
         */
        Spread,
        /**
         * 雷达
         */
        Radar,
    }

    /**
     * 扫描线
     */
    interface ScanLine extends Entity {
        /**
         * 位置
         */
        position: Vector3;
        /**
         * 半径
         */
        radius: number;
        /**
         * 颜色
         */
        color: Color;
        /**
         * 时间（单位：秒）
         */
        duration: number;
        /**
         * 颜色渐变强度（默认为5）
         */
        colorGradientStrength: number;
        /**
         * 类型（默认为Spread）
         */
        type: ScanLineType;
    }

    /**
     * 创建三维引擎，该接口只需在页面初始化时调用一次，多次调用会抛出异常
     * @param type 引擎类型
     * @param containerId 容器id
     * @returns 三维引擎对象
     */
    function Create3dEngine(type: EngineType, containerId: string): Engine|undefined;

    /**
     * 获取当前三维引擎
     * @returns 三维引擎对象
     */
    function Get3dEngine(): Engine;
}