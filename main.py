

from direct.showbase.ShowBase import ShowBase
from panda3d.core import LVector3
from direct.task import Task

class CuboidRenderer(ShowBase):
    def __init__(self):
        ShowBase.__init__(self)

        self.width = float(input("Enter width of cuboid: "))
        self.height = float(input("Enter height of cuboid: "))
        self.depth = float(input("Enter depth of cuboid: "))

        self.render_cuboid()

        self.taskMgr.add(self.move_camera, "move_camera")

    def render_cuboid(self):
        # Create cuboid geometry
        self.cuboid = self.loader.loadModel("models/box")
        self.cuboid.setScale(self.width, self.height, self.depth)
        self.cuboid.reparentTo(self.render)

self.cuboid.setPos(0, 0, 0)

    def move_camera(self, task):
        # Move camera with mouse
        if self.mouseWatcherNode.hasMouse():
            # Get mouse position
            mouse_pos = self.mouseWatcherNode.getMouse()

            # Set camera position based on mouse movement
            self.camera.setPos(mouse_pos.getX() * 10, -mouse_pos.getY() * 10, 0)
self.disableMouse()
self.camera.setPos(0, -10, 2)
self.camera.lookAt(Point3(0, 0, 0))

self.accept('mouse1',self.startRotation)
self.accept('mouse1-up',self.stopRotation)

def StartRotation(self):
self.taskMgr.add("rotateCameraTask")

def StopRotation(self):
self.taskMgr.remove("rotateCameraTask")

def rotateCameraTask(self, task)
    dt = globalClock.getDt     
    rotationSpeed = 20.0
mouseX,mouseY = base.mouseWatcherNode.getMouse()
self.camera.setH(self.camera.getH() - mouseX * rotationSpeed)
self.camera.setP(self.camera.getP() + mouseY * rotationSpeed)

        return Task.cont

app = CuboidRenderer()
app.run()